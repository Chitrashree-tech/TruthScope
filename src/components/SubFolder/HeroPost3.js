import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots } from "react-icons/fa";

// Sample post data
const postsData = [
  {
    id: 1,
    title: "WPP CEO Duped by Deepfake in Costly Scam",
    description:
      "The CEO of WPP, one of the world's largest advertising firms, was deceived by a hyper-realistic deepfake video call impersonating a company executive. The scammers used AI-generated visuals and voice cloning to orchestrate a convincing fraud, resulting in significant financial losses and raising urgent concerns about the risks of deepfake technology in corporate environments.",
    image: "/images/f1.png",
  },
  {
    id: 3,
    title: "$25 Million Lost in 2024 Singapore Deepfake Scam",
    description:
      "In a shocking 2024 incident in Singapore, a multinational company lost $25 million after an employee was tricked by a deepfake video call. The scammers used AI-generated visuals to impersonate the company’s CFO and other executives during a video meeting, convincing the employee to transfer funds to fraudulent accounts. This incident highlights the growing sophistication of deepfake scams targeting global businesses.",
    image: "/images/f2.png",
  },
  {
    id: 4,
    title: "British Multinational Arup Scammed into Sending $39 Million via Deepfake",
    description:
      "In 2024, engineering giant Arup, a British multinational, was duped into transferring $39 million to fraudsters using a highly sophisticated deepfake scam. The attackers created a convincing video call that mimicked the CFO’s voice and appearance, tricking a Hong Kong-based employee into making the transfer. This incident marks one of the largest deepfake-related financial frauds to date.",
    image: "/images/f3.jpg",
  },
  {
    id: 5,
    title: "Italian Corporate Duped as Criminal Poses as Defense Minister Guido Crosetto",
    description:
      "A criminal successfully impersonated Italy’s Defense Minister Guido Crosetto using deepfake video calls to target top corporate executives. The scammer, posing as the minister, attempted to solicit sensitive information and build trust under false pretenses. This incident highlights growing concerns over the use of AI-generated deepfakes in high-level corporate espionage and fraud.",
    image: "/images/f4.png",
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
