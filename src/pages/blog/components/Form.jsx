import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    image: null,
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      image: e.target.files[0], // Capture file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center w-screen h-screen bg-white">
      <div className="container mt-20 my-4 px-4 lg:px-20">
        <div className="w-full ml-40 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">{type} Blog</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                placeholder="Title*"
                value={data.title}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                value={data.subtitle}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                onChange={handleFileChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="category"
                placeholder="Category*"
                value={data.category}
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <textarea
                name="description"
                placeholder="Description"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
