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
                      React is more than just a library; it’s a philosophy that teaches us the power of reusability, component-based architecture, and declarative coding. It empowers developers to break down complex UIs into simple, manageable pieces, fostering both innovation and maintainability. The true strength of React lies not just in what it does, but in how it encourages us to think about our applications in a way that is both scalable and elegant.
                      </p>
                      <p className="mt-4 text-gray-600">
                      !! Life doesn’t get easier or more forgiving; we get stronger and more resilient. It’s in the moments of struggle that we find our true capacity to endure, adapt, and ultimately, overcome. Strength is not the absence of adversity, but the courage to continue in spite of it. !!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}