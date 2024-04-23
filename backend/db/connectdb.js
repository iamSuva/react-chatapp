import mongoose from 'mongoose';


export const connect=async()=>{
    try{
        const mongoURI=process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);
        console.log('*************MongoDB Connected*************');
    }catch(err){
        console.log(err);
    }
}