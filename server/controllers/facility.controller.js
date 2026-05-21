import Facility from '../models/Facility.js'

export const createFacility = async (req, res) => {
  try {
    const { name, sportType, location, pricePerHour, image, description, rating } =
      req.body

    if (!name || !sportType || !location || pricePerHour == null || !image) {
      return res.status(400).json({ success: false, message: 'Required fields missing' })
    }

    const facility = await Facility.create({
      name,
      sportType,
      location,
      pricePerHour,
      image,
      description,
      rating,
      owner: req.user._id,
    })

    res.status(201).json({ success: true, facility })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const getFacilities = async (req, res) => {
  try {
    const { search, sportType } = req.query
    const filter = {}

    if (search) {
      filter.name = { $regex: search, $options: 'i' }
    }

    if (sportType) {
      filter.sportType = sportType
    }

    const facilities = await Facility.find(filter)
      .populate('owner', 'name email')
      .sort({ createdAt: -1 })

    res.json({ success: true, count: facilities.length, facilities })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const getMyFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find({ owner: req.user._id }).sort({
      createdAt: -1,
    })

    res.json({ success: true, count: facilities.length, facilities })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const getFacilityById = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id).populate(
      'owner',
      'name email',
    )

    if (!facility) {
      return res.status(404).json({ success: false, message: 'Facility not found' })
    }

    res.json({ success: true, facility })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const updateFacility = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id)

    if (!facility) {
      return res.status(404).json({ success: false, message: 'Facility not found' })
    }

    if (facility.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not allowed' })
    }

    const fields = [
      'name',
      'sportType',
      'location',
      'pricePerHour',
      'image',
      'description',
      'rating',
    ]

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        facility[field] = req.body[field]
      }
    })

    const updated = await facility.save()

    res.json({ success: true, facility: updated })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export const deleteFacility = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id)

    if (!facility) {
      return res.status(404).json({ success: false, message: 'Facility not found' })
    }

    if (facility.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not allowed' })
    }

    await facility.deleteOne()

    res.json({ success: true, message: 'Facility deleted' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
