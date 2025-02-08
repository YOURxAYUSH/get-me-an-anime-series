import React from 'react';

const About = () => {
  return (
    <div className="text-white container mx-auto px-8 md:px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">About Get Me an Anime Series</h1>
      <p className="text-lg mb-6">
        Get Me an Anime Series is a unique platform that not only connects passionate anime fans and creators but also empowers logged-in users to request support for funding their anime marathons. Whether you're planning an epic binge-watching session or looking to share detailed reviews and research on the latest anime toys and trends, our community is here to help you achieve your vision.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center mb-6">
          <img className="w-20 h-20 rounded-full mr-4" src="/yarimasu.gif" alt="Marathon Support" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Fund Your Anime Marathon</h3>
            <p>
              Once you log in, you can ask for financial support from fellow anime enthusiasts. Share your marathon plans, gain backing from the community, and transform your anime binge into a celebrated event.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <img className="w-20 h-20 rounded-full mr-4" src="/rikka.gif" alt="In-Depth Reviews & Research" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Detailed Reviews & Latest Anime Toys</h3>
            <p>
              Our dedicated team researches and provides well-informed reviews on the latest anime series and toys. Stay up-to-date with expert opinions and detailed insights to enhance your anime experience.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Support marathon enthusiasts in funding epic anime viewing sessions.</li>
        <li className="mb-2">Receive in-depth reviews and recommendations on the latest anime series and toys.</li>
        <li className="mb-2">Engage with a community that shares your passion for anime.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Benefits for Creators & Marathoners</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Direct support from a community of dedicated anime fans.</li>
        <li className="mb-2">Showcase your marathon plans and receive the funding you need.</li>
        <li className="mb-2">Share your research, reviews, and insights with fellow enthusiasts.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Community and Collaboration</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Join a vibrant network of anime fans, marathoners, and creators.</li>
        <li className="mb-2">Collaborate on projects, share ideas, and celebrate anime culture together.</li>
        <li className="mb-2">Participate in interactive Q&A sessions and live events with experts.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Exclusive Features</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Custom funding tiers and rewards for marathon supporters.</li>
        <li className="mb-2">Early access to exclusive content and behind-the-scenes updates.</li>
        <li className="mb-2">Regular, research-backed reviews on the latest anime trends and merchandise.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">We are dedicated to promoting original anime creations and celebrating anime culture.</li>
        <li className="mb-2">Our platform is built by anime fans, for anime fans—ensuring authenticity and passion in every feature.</li>
        <li className="mb-2">We combine community support, creative funding, and expert insights to enhance your anime experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
      <p className="text-lg mb-6">
        Whether you’re a marathoner looking for support or a fan eager for the latest reviews and research on anime toys, Get Me an Anime Series offers a unique space for creativity, collaboration, and community. Log in, share your passion, and be part of the revolution in anime culture.
      </p>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Get Me an Anime Series",
};
