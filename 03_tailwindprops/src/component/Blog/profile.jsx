import React, { useState } from "react";
import {
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Mohd Furkan",
    role: "Software Engineer",
    bio: "Passionate developer with 2 years of experience in building scalable web applications. Love to explore new technologies and share knowledge through blogging.",
    email: "furkansde@gmail.com",
    phone: "+925XXXXXXX",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    avatar: "https://i.imgur.com/T48emLx.jpeg",
  });

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "2024-01-15",
      excerpt:
        "Hooks are a powerful feature in React that allow you to use state and other React features without writing a class component...",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      date: "2024-01-10",
      excerpt:
        "Tailwind CSS is a utility-first CSS framework that can speed up your development process significantly...",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Modern JavaScript Features",
      date: "2024-01-05",
      excerpt:
        "ES6+ brings many powerful features to JavaScript that every developer should know about...",
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {!isEditing ? (
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1";
                  }}
                />
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-gray-600 mt-1">{profile.role}</p>
                <p className="mt-4 text-gray-700">{profile.bio}</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-600" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-gray-600" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-gray-600" />
                    <span>{profile.github}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-gray-600" />
                    <span>{profile.linkedin}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={editedProfile.role}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={editedProfile.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={editedProfile.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditedProfile(profile);
                  }}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Blog Posts Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                  <p className="mt-4 text-gray-600">{post.excerpt}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
