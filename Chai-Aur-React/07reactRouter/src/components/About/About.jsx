import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          
                        Life goals can be broadly categorized into personal, professional, and social ambitions that individuals aim to achieve over their lifetimes. These goals serve as guiding principles that provide direction and purpose to one's actions and decisions. They often encompass aspirations related to career achievements, personal growth, relationships, health and wellness, financial stability, and contributions to society.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Setting life goals involves introspection, envisioning desired outcomes, and planning steps to attain them. They can range from short-term objectives like learning a new skill or completing a degree, to long-term ambitions such as starting a family, establishing a successful career, or making a significant impact in one's community or field of work.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}