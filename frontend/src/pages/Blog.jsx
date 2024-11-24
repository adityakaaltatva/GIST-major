import { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Getting Started with Gist",
      author: "Aditya Pandey",
      date: "November 24, 2024",
      content:
        "Gist simplifies deployment by merging the best of Vercel and Render. In this guide, we'll show you how to deploy your first app using Gist in under 5 minutes.",
      category: "Guides",
    },
    {
      title: "Building Custom Pipelines in Gist",
      author: "Aditya Pandey",
      date: "November 20, 2024",
      content:
        "Learn how to create powerful custom build pipelines to optimize your deployments and streamline your development process.",
      category: "Advanced Features",
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    category: "",
  });

  const handleAddBlog = () => {
    if (
      newBlog.title &&
      newBlog.author &&
      newBlog.date &&
      newBlog.content &&
      newBlog.category
    ) {
      setBlogs([newBlog, ...blogs]);
      setNewBlog({
        title: "",
        author: "",
        date: "",
        content: "",
        category: "",
      });
      alert("Blog added successfully!");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-center">Gist Blogs</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-white">
            Featured Blogs
          </h2>
          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all"
                >
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    By {blog.author} on {blog.date}
                  </p>
                  <p className="text-gray-300 line-clamp-3">{blog.content}</p>
                  <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded mt-3 inline-block">
                    {blog.category}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No blogs available. Add your first blog below!</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">
            Add a New Blog
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="Author"
              value={newBlog.author}
              onChange={(e) =>
                setNewBlog({ ...newBlog, author: e.target.value })
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="date"
              value={newBlog.date}
              onChange={(e) =>
                setNewBlog({ ...newBlog, date: e.target.value })
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea
              placeholder="Content"
              value={newBlog.content}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              rows="5"
            ></textarea>
            <select
              value={newBlog.category}
              onChange={(e) =>
                setNewBlog({ ...newBlog, category: e.target.value })
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="">Select Category</option>
              <option value="Guides">Guides</option>
              <option value="Updates">Updates</option>
              <option value="Advanced Features">Advanced Features</option>
              <option value="Tips and Tricks">Tips and Tricks</option>
            </select>
            <button
              onClick={handleAddBlog}
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Add Blog
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
