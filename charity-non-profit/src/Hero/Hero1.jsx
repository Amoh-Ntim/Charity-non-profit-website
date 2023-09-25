import { useState, useEffect } from 'react';
const Hero1 = () => {

  const [text, setText] = useState('');
  const initialText = 'can change the world';
  const typingSpeed = 500; // Adjust typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index <= initialText.length) {
          setText(initialText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);
  return (
    <div className="relative">
      <img
        src="/Rectangle 2907.png" // Replace with the path to your image
        alt="Your Image"
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex-col justify-center items-center">
        <div className=" text-white p-4 whitespace-pre-line mt-20">
          <h2 className="text-5xl font-bold">Helping each other</h2>
          <h2 className="text-5xl font-bold">{text}</h2>
          <p className="text-sm mt-4">We Seek out world changers and difference makers around the</p>
          <p className="text-sm">globe,and equip them to fulfill their unique purpose.</p>
        </div>
        {/* buttons */}
        <div className='flex justify-center gap-4'>
          <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
           Donate Now
          </button>
          <button className="bg-opacity-0 border-green-700 border hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded">
            Know About Us
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Hero1