
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://ZarakKhan:Zarakkhan1234@legalai.fnaibbg.mongodb.net/AppLogin";
const connection = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
       
        process.exit(1);
      }
}

export default connection
