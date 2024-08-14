import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-6 text-black">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4 pl-4">Explore the BBC</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 border-b border-gray-300 pb-3">
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Home</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">News</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Sport</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Business</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Innovation</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Culture</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Travel</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Earth</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Video</div>
          <div className="border-r border-gray-300 py-2 pl-4 font-semibold text-sm">Live</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 pt-2">
          <div className="py-2 pl-4 text-sm font-thin">Terms of Use</div>
          <div className="py-2 pl-4 text-sm font-thin">About the BBC</div>
          <div className="py-2 pl-4 text-sm font-thin">Privacy Policy</div>
          <div className="py-2 pl-4 text-sm font-thin">Cookies</div>
          <div className="py-2 pl-4 text-sm font-thin">Accessibility Help</div>
          <div className="py-2 pl-4 text-sm font-thin">Parental Guidance</div>
          <div className="py-2 pl-4 text-sm font-thin">Contact the BBC</div>
          <div className="py-2 pl-4 text-sm font-thin">BBC emails for you</div>
          <div className="py-2 pl-4 text-sm font-thin">Advertise with us</div>
        </div>
        <p className="pt-4 text-xs">
          <b>Copyright © 2024 BBC.</b> The BBC is not responsible for the content of
          external sites. <b>Read about our approach to external linking.</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
