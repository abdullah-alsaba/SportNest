import express from 'express'
import {
  createBooking,
  getUserBookings,
  cancelBooking,
} from '../controllers/booking.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/', protect, createBooking)
router.get('/my', protect, getUserBookings)
router.patch('/:id/cancel', protect, cancelBooking)

export default router
