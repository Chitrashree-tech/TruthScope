import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots } from "react-icons/fa";

// Sample post data
const postsData = [
  {
    id: 1,
    title: "Maryland Teacher Arrested for Deepfake Audio Framing Principal with Racist Remarks",
    description:
      "Dazhon Darien, a 31-year-old high school teacher, was arrested for allegedly creating an AI-generated deepfake audio of Principal Eric Eiswert making racist comments. The fake clip led to the principal being placed on leave and receiving death threats.",
    image: "/images/s1.jpg",
  },
  {
    id: 3,
    title: "Cybersecurity Firm Duped by Deepfake: North Korean Hacker Hired as Remote IT Worker",
    description:
      "A North Korean hacker infiltrated a cybersecurity firm by using a deepfake identity to pass multiple video interviews during the hiring process. The company unknowingly onboarded the scammer as a remote IT employee, exposing critical vulnerabilities.",
    image: "/images/s2.jpg",
  },
   {
    id: 3,
    title: "European Mayors Targeted by Deepfake Posing as Kyiv’s Mayor Klitschko",
    description:
      "Mayors of major European cities like Berlin, Madrid, and Vienna were victims of a deepfake video call impersonating Kyiv’s Mayor Vitali Klitschko. The manipulated calls attempted to sway their stance on Ukrainian refugees through deceptive AI-generated content.",
    image: "/images/s3.jpg",
  },


];

export default function HeroPost() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    if (dislikes[id]) {
      setDislikes((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleDislike = (id) => {
    setDislikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    if (likes[id]) {
      setLikes((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Explore Detected Threats
      </h2>

      <div className="max-w-3xl mx-auto">
        {postsData.slice(0, visibleCount).map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-orange-300 transition-shadow duration-300 mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-t-lg object-contain"
            />

            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4 font-medium">
                {post.description}
              </p>

              {/* Reactions */}
              <div className="flex justify-around text-gray-700 text-sm border-t border-gray-200 pt-4">
                <button
                  className={`flex items-center gap-1 group transition ${
                    likes[post.id] ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                  onClick={() => toggleLike(post.id)}
                  title="Like this post"
                >
                  <FaThumbsUp className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Like</span>
                </button>

                <button
                  className={`flex items-center gap-1 group transition ${
                    dislikes[post.id] ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                  onClick={() => toggleDislike(post.id)}
                  title="Dislike this post"
                >
                  <FaThumbsDown className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Dislike</span>
                </button>

                <button
                  className="flex items-center gap-1 group hover:text-orange-500 transition"
                  title="Comment on this post"
                >
                  <FaRegCommentDots className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Comment</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        {visibleCount < postsData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
