import mongoose from 'mongoose'

const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Facility name is required'],
      trim: true,
    },
    sportType: {
      type: String,
      required: [true, 'Sport type is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    pricePerHour: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    bookingsCount: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
)

const Facility = mongoose.model('Facility', facilitySchema)

export default Facility
