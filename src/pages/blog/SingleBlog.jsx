import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";
import axios from "axios";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://react30.onrender.com/api/user/blog/${id}`
      );
      if (response.status === 200) {
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  const deleteBlog = async (  ) => {
    try {
      const response = await axios.delete(
        `https://react30.onrender.com/api/user/blog/${id}`,
        {
          headers: {
            "Authorization": localStorage.getItem("token") 
          }
        }
      );
      if (response.status === 200) {
        alert("Blog deleted successfully");
        navigate("/");
      }
    } catch (error) {
      alert("Error deleting blog:");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]); // Added `id` as a dependency

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blog?.imageUrl}
                  alt={blog?.title || "Blog Image"}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <Link to={`/blog/edit/${id}`} className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Edit
                  </button>
                </Link>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={deleteBlog}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog?.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog?.subtitle}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Category:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {blog?.category || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Author: {blog?.userID?.username}
                  </span>

                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Blog Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
