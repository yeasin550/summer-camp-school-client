const FreePass = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-10">
        GET YOUR FREE PASS
      </h1>
      <div className="w-10/12 mx-auto my-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            placeholder="Your name"
            className="mb-2 w-full rounded-md border border-gray-400 py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            name="name"
          />
          <input
            type="number"
            id="name"
            autoComplete="given-name"
            placeholder="Your phone number"
            className="mb-2 w-full rounded-md border border-gray-400 py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            name="name"
          />
          <input
            type="date"
            id="name"
            autoComplete="given-name"
            placeholder="01-01-2024"
            className="mb-2 w-full rounded-md border border-gray-400 py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            name="name"
          />
          <input
            type="time"
            id="name"
            autoComplete="given-name"
            placeholder="Your name"
            className="mb-2 w-full rounded-md border border-gray-400 py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            name="name"
          />
        </div>
        <div className="mt-7">
          <textarea
            name=""
            className="border border-gray-900 shadow-md w-full rounded-md p-3 text-xl"
            id=""
            placeholder="Type your messege"
            cols="30"
            rows="6"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FreePass;
