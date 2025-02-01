import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Striger, sans-serif' }}>
      {/* Ensure no yellow light effect by removing unnecessary styles */}
      <div className="pb-40 py-12 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-t from-red-200 to-red-800 bg-clip-text text-transparent sm:text-4xl animate-popIn">
              For More Details
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              If you have questions, or need more information about our events, feel free to reach out to us.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/11814/11814665.png"
                      className="w-6 h-6"
                      alt="Address Icon"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-t from-red-200 to-red-800">
                    Address
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    St. Martin&apos;s Engineering College<br />
                    Dhulapally, 500100
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3059/3059498.png"
                      className="w-6 h-6"
                      alt="Phone Icon"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-t from-red-200 to-red-800">
                    Phone number
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    +91 96525 95873 Tagore Monish (CHIEF)<br />
                    +91 70758 02770 M. Aditya (TECHNICAL HEAD)
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3059/3059455.png"
                      className="w-6 h-6"
                      alt="Email Icon"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-t from-red-200 to-red-800">
                    Email
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    tamv112024@gmail.com
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3114/3114865.png"
                      className="w-6 h-6"
                      alt="Timings Icon"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-t from-red-200 to-red-800">
                    Timings
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    10am to 4pm
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;