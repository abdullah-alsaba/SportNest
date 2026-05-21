import Booking from '../models/Booking.js'
import Facility from '../models/Facility.js'

export const createBooking = async (req, res) => {
  try {
    const { facilityId, date, timeSlot, duration } = req.body

    if (!facilityId || !date || !timeSlot || !duration) {
      return res.status(400).json({ success: false, message: 'All fields are required' })
    }

    const facility = await Facility.findById(facilityId)
    if (!facility) {
      return res.status(404).json({ success: false, message: 'Facility not found' })
    }

    const totalPrice = facility.pricePerHour * duration + 5

    const booking = await Booking.create({
      user: req.user._id,
      facility: facilityId,
      date,
      timeSlot,
      duration,
      price: totalPrice,
      status: 'confirmed',
    })

    facility.bookingsCount += 1
    await facility.save()

    const populated = await Booking.findById(booking._id).populate(
      'facility',
      'name location image sportType pricePerHour',
    )

    res.status(201).json({ success: true, booking: populated })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('facility', 'name location image sportType pricePerHour')
      .sort({ date: -1 })

    res.json({ success: true, count: bookings.length, bookings })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' })
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not allowed' })
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ success: false, message: 'Already cancelled' })
    }

    booking.status = 'cancelled'
    await booking.save()

    const populated = await Booking.findById(booking._id).populate(
      'facility',
      'name location image sportType pricePerHour',
    )

    res.json({ success: true, booking: populated })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
