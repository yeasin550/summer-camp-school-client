const OurKeyFeatures = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our service statistics
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div className="bg-white overflow-hidden shadow hover:shadow-lg sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 border border-gray-600 rounded-lg">
              <dl>
                <dt className="leading-5 font-medium text-gray-500 truncate">
                  Total free servers
                </dt>
                <dd className="mt-1 text-2xl leading-9 font-semibold text-indigo-600">
                  1.6M
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow hover:shadow-lg sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 border border-gray-600 rounded-lg">
              <dl>
                <dt className="leading-5 font-medium text-gray-500 truncate">
                  Servers a month
                </dt>
                <dd className="mt-1 text-2xl leading-9 font-semibold text-indigo-600">
                  19.2K
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow hover:shadow-lg sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 border border-gray-600 rounded-lg">
              <dl>
                <dt className="leading-5 font-medium text-gray-500 truncate">
                  Servers a week
                </dt>
                <dd className="mt-1 text-2xl leading-9 font-semibold text-indigo-600">
                  4.9K
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow hover:shadow-lg sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 border border-gray-600 rounded-lg">
              <dl>
                <dt className="leading-5 font-medium text-gray-500 truncate">
                  Total users
                </dt>
                <dd className="mt-1 text-2xl leading-9 font-semibold text-indigo-600">
                  166.7K
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-700 body-font my-5">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap text-center">
            <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
              <div className="border border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-9 h-9 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
              <div className="border border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-9 h-9 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
              <div className="border border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-9 h-9 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
              <div className="border border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-9 h-9 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-4 px-4 mx-8 mt-6 sm:grid-cols-4 sm:px-8">
        <div className=" bg-white border rounded-lg overflow-hidden shadow px-4 py-6 ">
          <h3 className="text-sm tracking-wider">Total Member</h3>
          <p className="text-3xl">12,768</p>
        </div>
        <div className="bg-white border rounded-lg overflow-hidden shadow px-4 py-6 ">
          <h3 className="text-sm tracking-wider">Total Post</h3>
          <p className="text-3xl">39,265</p>
        </div>
        <div className="bg-white border rounded-lg overflow-hidden shadow px-4 py-6 ">
          <h3 className="text-sm tracking-wider">Total Comment</h3>
          <p className="text-3xl">142,334</p>
        </div>
        <div className="bg-white border rounded-lg overflow-hidden shadow px-4 py-6 ">
          <h3 className="text-sm tracking-wider">Server Load</h3>
          <p className="text-3xl">34.12%</p>
        </div>
      </div>
    </div>
  );
};

export default OurKeyFeatures;
