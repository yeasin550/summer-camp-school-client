import  { useState } from "react";

const AddNewClass = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a database API to send the form data
    // You can replace the code inside this function with your actual API call
    // Here's an example using fetch:
    fetch("/api/classes", {
      method: "POST",
      body: JSON.stringify({
        className,
        classImage,
        instructorName,
        instructorEmail,
        availableSeats,
        price,
        status: "pending",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 md:w-[600px]">
      <div className="mb-4">
        <label htmlFor="class-name" className="block mb-2">
          Class Name
        </label>
        <input
          type="text"
          id="class-name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="class-image" className="block mb-2">
          Class Image
        </label>
        <input
          type="text"
          id="class-image"
          value={classImage}
          onChange={(e) => setClassImage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructor-name" className="block mb-2">
          Instructor Name
        </label>
        <input
          type="text"
          id="instructor-name"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructor-email" className="block mb-2">
          Instructor Email
        </label>
        <input
          type="text"
          id="instructor-email"
          value={instructorEmail}
          onChange={(e) => setInstructorEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="available-seats" className="block mb-2">
          Available Seats
        </label>
        <input
          type="number"
          id="available-seats"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddNewClass;
