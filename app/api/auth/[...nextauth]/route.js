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
            coverpic:'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejVvMGpxaHltcjY5MGEyamh4OWlzN2ltZmdudHgxNG1pOTZyMTYzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z7wIVXPnpm1DiJDdsU/giphy.gif',
            razorpayid:'your_id',
            razorpaysecret:'your_secret',

            
           

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
