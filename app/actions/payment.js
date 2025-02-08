"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/database/connectDb"
import User from "@/models/User"



export const initiate=async(amount,to_username,paymentform)=>{
    
    await connectDb()
    
    let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret
    
  var instance = new Razorpay({ key_id: user.razorpayid, key_secret:secret })

 let options = {
    amount:Number.parseInt(amount),
    currency:"INR",
  }

  let x = await instance.orders.create(options)

  await Payment.create({oid: x.id, amount: Number.parseInt(amount)/100 , to_user: to_username , name: paymentform.name || "Anonymous" , message: paymentform.message || "enjoy 😎"})

  return x
    
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    if(u){
    let user = u.toObject({ flattenObjectIds: true })
    return user
    }
}

export const fetchpayments = async (username) => {
    await connectDb();
  
    // Find all payments sorted by decreasing order of amount and return plain JavaScript objects
    const payments = await Payment.find({ to_user: username, done: true })
      .sort({ amount: -1 })
      .limit(10)
      .lean();
  
    // Transform data to ensure it is JSON serializable
    return payments.map(payment => ({
      ...payment,
      _id: payment._id.toString(), // Convert ObjectId to string
      createdAt: payment.createdAt?.toISOString(), // Convert Date to ISO string
      updatedAt: payment.updatedAt?.toISOString(), // Convert Date to ISO string
    }));
  };


  export const updateProfile = async (formData, username) => {
   
    await connectDb();
    
  
    try {
        // Ensure undefined values are not passed to the update
        const validData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => value !== undefined)
        );

        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $set: validData },
            { new: true }
        );
        console.log('User updated successfully:', updatedUser);
        return updatedUser ? true : false;
    } catch (error) {
        console.error('Error updating user profile:', error);
        return false;
    }
};

