import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from 'next-auth/providers/facebook'
import mongoose from "mongoose";
import connectDb from "@/database/connectDb";
import User from "@/models/User";


export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_ID
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

    
        await connectDb()
        
        const currentUser =  await User.findOne({email: user.email}) 
        if(!currentUser){
           await User.create({
            email: user.email, 
            username: user.email.split("@")[0], 
            name: user.name,
            profilepic: user.image,
            coverpic:'http://localhost:3000/c20.gif',
            razorpayid:'',
            razorpaysecret:'',

            
           

          })   
        } 
        return true
     
    },
    
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      

      return session
    },
  } 
});

export { authoptions as GET, authoptions as POST };
