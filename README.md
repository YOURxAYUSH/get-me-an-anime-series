# Get Me an Anime Series  

![Main Website Preview]![get-me-an-anime-series vercel app_login (4)](https://github.com/user-attachments/assets/67195a9f-8858-49b0-88b6-77093ae9f62b)



A crowdfunding platform designed to support the creation of your favorite anime series! This app includes features like user authentication, secure payment processing, and personalized user experiences.  

---

## 🚀 Features  
- **User Authentication:** Secure login system with NextAuth.js for smooth authentication flows.  
- **Payment Integration:** Razorpay integration for seamless transactions.  
- **Dynamic User Pages:** Personalized user profiles and dashboards based on their activity.  
- **Responsive Design:** Fully optimized for all devices using modern frameworks.  
- **Interactive Animations:** Dynamic typing effects using Typed.js for an engaging user experience.  
- **404 Page:** A custom "Not Found" page for better user navigation.  

---

## 🌐 Live Demo  
Visit the live site here: [Get Me an Anime Series](https://get-me-an-anime-series.vercel.app/)  

---

## 📂 Endpoints and Features  

### **Homepage `/`**  
![Homepage Screenshot]![get-me-an-anime-series vercel app_login (4)](https://github.com/user-attachments/assets/1367005b-8b6f-4341-9a35-2bc7c6148036)


- Introduction to the project and its mission.  
- Dynamic typing animations using Typed.js.  
- Clear call to action for supporters and visitors.  

---

### **Login `/login`**  
![Login Page Screenshot]![get-me-an-anime-series vercel app_login](https://github.com/user-attachments/assets/15ab024b-2a25-4531-a565-82fbdbac04df)

- Secure login using NextAuth.js.  
- Input fields for username and password with real-time validation.  

---

### **Dashboard `/dashboard`**  
![Dashboard Screenshot]![get-me-an-anime-series vercel app_login (1)](https://github.com/user-attachments/assets/ad7173e2-616b-4d83-ab07-ffa1f99c131c)
  
- Personalized dashboard showing user contributions.  
- Links to active campaigns and user settings.  

---

### **User Profile `/[username]`**  
![User Profile Screenshot]![get-me-an-anime-series vercel app_login (2)](https://github.com/user-attachments/assets/2f5a45d5-90ea-4a21-9a8e-f8fefa3e8dcf)
 
- Dynamic user-specific pages generated using Next.js dynamic routing.  
- Displays user contributions, profile information, and activity.  

---

### **Not Found Page `/notfound`**  
![404 Page Screenshot]![get-me-an-anime-series vercel app_vayua](https://github.com/user-attachments/assets/aaab1d30-0aab-429e-9631-884c396ba698)

- Custom 404 page for improved error handling.  
- Links back to the homepage.  

---

### **Supporters Page `/supporter`**  
![Supporters Page Screenshot]![get-me-an-anime-series vercel app_notfound](https://github.com/user-attachments/assets/285bf06f-1182-44b6-8047-a121cd3fbc87)

- A list of all supporters and their contributions.  

---

### **About Page `/about`**  
![About Page Screenshot]![get-me-an-anime-series vercel app_notfound (1)](https://github.com/user-attachments/assets/7b9dea46-84b9-4e89-9e4a-7344772f6101)

- Information about the project and its goals.  
- Details about the team and vision.  

---

## 🔧 Tech Stack  
- **Frontend:** React.js, Tailwind CSS, Typed.js  
- **Backend:** Node.js  
- **Authentication:** NextAuth.js  
- **Database:** MongoDB Atlas  
- **Payment Integration:** Razorpay  
- **Framework:** Next.js  

---

## 🖥️ Setup and Installation  

### Prerequisites  
- Node.js and npm installed  
- MongoDB Atlas or a local MongoDB server  
- Razorpay account for payment gateway setup  

### Steps  
1. Clone this repository:  
   ```bash  
   git clone https://github.com/your-username/get-me-an-anime-series.git  
   cd get-me-an-anime-series  

Here’s the section you wanted with proper formatting for copy-pasting into your README file:  

---

### Install Dependencies  
```bash  
npm install  
```  

### Set Up Environment Variables  
Create a `.env` file in the root directory with the following details:  
```plaintext  
MONGO_URI=your-mongodb-connection-string  
RAZORPAY_KEY_ID=your-razorpay-key-id  
RAZORPAY_KEY_SECRET=your-razorpay-key-secret  
NEXTAUTH_SECRET=your-nextauth-secret  
NEXTAUTH_URL=http://localhost:3000 # For local development  
```  

### Start the Development Server  
```bash  
npm run dev  
```  
Open the site in your browser at `http://localhost:3000`.  

---

### 🧪 Testing  
Use Razorpay's test credentials to simulate payments:  
- **UPI:** `success@razorpay` for successful payments.  
- **UPI:** `failure@razorpay` for failed payments.  

---

### 📈 Roadmap  
- Add a progress tracker for funding goals.  
- Implement email notifications for backers.  
- Allow users to comment and interact on campaign pages.  

---

### 📜 License  
This project is licensed under the [MIT License](LICENSE).  

---

### ✨ Contributors  
- **Ayush Varshney**  

---

### 💬 Feedback  
Have suggestions or issues? Feel free to open an [issue](https://github.com/your-username/get-me-an-anime-series/issues) or reach out via [email]vayuayu9568@gmail.com.  

---  
