import React from 'react';
import { Share, Heart, Grid } from 'lucide-react';

const ImageGallery = () => {
  
  const images = [
    'https://a0.muscache.com/im/pictures/af4d8061-045a-463f-a394-5b033d5a35a3.jpg?im_w=960',
    'https://a0.muscache.com/im/pictures/miso/Hosting-580769989775447042/original/aadc6780-1b62-421d-b52c-bb2109b0d8f9.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/26aff2ea-c66d-4c92-806e-b9b0d6410c5b.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/d2caca3b-bd6a-4dee-bd19-f3cef9f2be34.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/ec0b4180-08ed-4a6b-8b68-9125cef05ea8.jpg?im_w=720',
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Rakan's Chill camp (dinner & breakfast included)</h2>
        <div className="flex space-x-6">
          <button className="flex underline font-semibold items-center space-x-1 text-gray-600">
            <Share size={15} />
            <span>Share</span>
          </button>
          <button className="flex underline font-semibold items-center space-x-1 text-gray-600">
            <Heart size={15} />
            <span>Save</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
        <div className="col-span-2 row-span-2 relative group">
          <img src={images[0]} alt="Main" className="w-full h-full object-cover rounded-lg transition-transform duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
        </div>
        {images.slice(1).map((src, index) => (
          <div key={index} className="relative group">
            <img src={src} alt={`Image ${index + 2}`} className="w-full h-full object-cover rounded-lg transition-transform duration-300" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
            {index === 3 && (
              <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md">
                <Grid size={16} />
                <span>Show all photos</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
