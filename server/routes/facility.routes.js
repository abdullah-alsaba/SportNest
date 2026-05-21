import express from 'express'
import {
  createFacility,
  getFacilities,
  getMyFacilities,
  getFacilityById,
  updateFacility,
  deleteFacility,
} from '../controllers/facility.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/', getFacilities)
router.get('/my', protect, getMyFacilities)
router.get('/:id', getFacilityById)
router.post('/', protect, createFacility)
router.put('/:id', protect, updateFacility)
router.delete('/:id', protect, deleteFacility)

export default router
