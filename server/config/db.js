import dns from 'dns'
import mongoose from 'mongoose'

dns.setServers(['8.8.8.8', '8.8.4.4'])
dns.setDefaultResultOrder('ipv4first')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`MongoDB error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
