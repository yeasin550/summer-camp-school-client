/* eslint-disable no-unused-vars */
import { useState } from "react";

const AddNewCard = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleClassImageChange = (e) => {
    setClassImage(e.target.value);
  };

  // You can populate the instructor name and email using the logged in user's data
  const instructorDisplayName = "John Doe"; // Replace with the actual display name
  const instructorEmailAddress = "john.doe@example.com"; // Replace with the actual email

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new class object with the form data
    const newClass = {
      className,
      classImage,
      instructorName: instructorDisplayName,
      instructorEmail: instructorEmailAddress,
      availableSeats,
      price,
      status: "pending",
    };

    // Here you can perform any necessary database operations to save the new class

    // Clear the form inputs
    setClassName("");
    setClassImage("");
    setAvailableSeats("");
    setPrice("");

    // Optionally, you can show a success message or redirect to another page
  };

  return (
      <div>
          <h1 className="text-center font-bold text-4xl my-12">Add New Card</h1>
      <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="class-name"
          >
            Class Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-name"
            type="text"
            placeholder="Enter class name"
            value={className}
            onChange={handleClassNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="class-image"
          >
            Class Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-image"
            type="file"
            placeholder="Enter class image URL"
            value={classImage}
            onChange={handleClassImageChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instructor-name"
          >
            Instructor Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100"
            id="instructor-name"
            type="text"
            value={instructorDisplayName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instructor-email"
          >
            Instructor Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100"
            id="instructor-email"
            type="email"
            value={instructorEmailAddress}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="available-seats"
          >
            Available Seats
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="available-seats"
            type="number"
            placeholder="Enter available seats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCard;
