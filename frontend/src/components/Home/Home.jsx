import React, { useEffect, useState } from "react";
import "./Home.css"; // Ensure this path is correct
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FiMessageCircle, FiX } from 'react-icons/fi'; // Example: React Icon for a chatbot symbol


const Home = () => {
  useEffect(() => {
    // Create a script element for the Elfsight widget
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "defer");
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  const [userInput, setUserInput] = useState(""); // Store user input
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle the chat window visibility
  };
 const handleInputChange = (event) => {
    setUserInput(event.target.value); // Update the user input
  };
  return (
    <div>
      {/* Donate Button */}
{/*       
      <div className={`chatbot-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isChatOpen ? <FiX size={30} /> : <FiMessageCircle size={30} />} 
      </div> */}
{/* 

     {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with us</h3>
          </div>
          <div className="chat-body">
            <p>How can we assist you?</p>
          </div>
          <div className="chat-footer">
            <textarea
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
              rows={3}
            />
          </div>
        </div>
      )} */}

      {/* Hero Section */}
      <div className="hero">
        <img
          src="/images/WhatsApp Image 2024-09-11 at 14.05.00.jpeg"
          alt="Hero"
        />
      </div>

      {/* Initiatives Section */}
      <section>
        <div className="container mx-auto py-12 px-4">
          <h1 className="initiatives">
            OUR INITIATIVES
          </h1>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  alt="Skill Development"
                  className="w-full h-64 object-cover"
                  src="/images/explore it skil development.jpeg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                    Skill Development
                  </h2>
                  <hr className="border-t-2 border-gray-300 mb-4" />
                  <p className="text-gray-700 m-3">
                    ExploreIT has conducted a variety of skill-based trainings, workshops, webinars, competitions, and internship drives with the objective of equipping the youth with the finest set of skills and abilities to succeed as the leaders of our future.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  alt="Environmental Projects"
                  className="w-full h-64 object-cover"
                  src="/images/explore it enviromental proejcts.jpeg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                    Environmental Projects
                  </h2>
                  <hr className="border-t-2 border-gray-300 mb-4" />
                  <p className="text-gray-700 m-3">
                    Our team has organized cleaning drives, tree donation and plantation drives, and climate awareness campaigns in order to empower the youth to take climate action.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  alt="Eco-expeditions"
                  className="w-full h-64 object-cover"
                  src="/images/explore it image 3.jpeg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                    Eco-expeditions
                  </h2>
                  <hr className="border-t-2 border-gray-300 mb-4" />
                  <p className="text-gray-700 m-3">
                    We have organized several expeditions, with agendas ranging from research and educational tours to eco-trails and celebrations. Our expeditions are guided by a holistic itinerary, with sustainability as our main focus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <br /><br />
      <div className="elfsight-app-fe684ddf-b897-41a0-b31a-c10145630e4d" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Home;
