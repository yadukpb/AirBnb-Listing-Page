import React from 'react';
import { Star, Award, PawPrint, Calendar } from 'lucide-react';

const ListingComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 font-sans">
      <div className="flex flex-wrap justify-between">
        <div className="w-full">
          <h1 className="text-xl font-semibold mb-1">
            Private room in tent in Wadi Rum Village, Jordan
          </h1>
          <p className="text-sm mb-2">
            4 guests · 5 bedrooms · 10 beds · 6 shared bathrooms
          </p>
          <div className="flex items-center text-s mb-4">
            <Star className="w-4 h-4 text-black fill-current" />
            <span className="mx-1">·</span>
            <span className="font-semibold">5.0 · 2 reviews</span>
          </div>

          <div className="flex items-center mb-4 py-8 border-t border-b border-gray-300">
            <img src="https://a0.muscache.com/im/pictures/user/fb091745-c915-453f-bf3f-acaae92c65e4.jpg?im_w=240" alt="Host" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Hosted by Rakan</p>
              <p className="text-sm text-gray-600">Superhost · 2 years hosting</p>
            </div>
          </div>

          <div className="space-y-4 mb-4 py-4 border-b">
            <div className="flex items-center py-2">
              <Award className="w-6 h-6 mr-4" />
              <div>
                <p className="font-semibold ">Rakan is a Superhost</p>
                <p className="text-sm text-gray-600">Superhosts are experienced, highly rated Hosts.</p>
              </div>
            </div>

            <div className="flex items-center py-2">
              <PawPrint className="w-6 h-6 mr-4" />
              <div>
                <p className="font-semibold">Furry friends welcome</p>
                <p className="text-sm text-gray-600">Bring your pets along for the stay.</p>
              </div>
            </div>

            <div className="flex items-center pt-2 pb-6">
              <Calendar className="w-6 h-6 mr-4" />
              <div>
                <p className="font-semibold">Free cancellation before 30 Aug</p>
                <p className="text-sm text-gray-600">Get a full refund if you change your mind.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 mb-4 rounded-md">
            <p className="text-sm text-gray-600">Some info has been automatically translated. <span className="underline">Show original</span></p>
          </div>

          <div>
            <p className="mb-2 pt-5">
              My name's Rakan. Welcome to my campsite, a perfect blend of adventure and relaxation!
              All our tents are cozy, comfortable and private.
            </p>
            <p className="mb-2">
              You can stay connected with the world as the campsite provides Wi-Fi.
            </p>
            <p className="mb-2">
              We also organize a variety of desert activities such as jeep tours, camel rides, rock
              climbing, and mountain hiking, including the Burdah Bridge ascent.
            </p>
            <button className="text-black font-semibold">Show more &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingComponent;