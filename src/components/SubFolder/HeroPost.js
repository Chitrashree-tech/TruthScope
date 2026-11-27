import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots } from "react-icons/fa";

// Sample post data
const postsData = [
  {
    id: 1,
    title: "Deepfake Political Endorsement of Boris Johnson",
    description:
      "A manipulated video image shows UK Prime Minister Boris Johnson falsely endorsing Jeremy Corbyn for the prime minister role. It was generated using deepfake technology, placing Johnson’s likeness in a fabricated scenario. The video appears authentic, filmed in his 10 Downing Street office, but is entirely AI-generated. Only the first half was used in studies, as the latter part devolves into incoherent gibberish.",
    image: "/images/p1.jpg",
  },
  {
    id: 3,
    title: "Deepfake of President Zelensky Surrendering to Russia",
    description:
      "This fake image circulated online showing President Zelensky supposedly announcing Ukraine’s surrender. The AI-generated photo mimicked official press visuals to appear authentic. It was created to undermine public morale and spread false narratives. Fact-checkers and Ukrainian authorities confirmed the image was a deepfake.",
    image: "/images/p3.png",
  },
  {
    id: 4,
    title: "Jordan Peele Uses President Obama in Fake News Deepfake",
    description:
      "In a widely circulated video, filmmaker Jordan Peele used deepfake technology to portray former President Barack Obama delivering a public service announcement. The video starts with Obama making a serious statement about fake news, but then shifts tone as Peele, who provided the voice and facial performance, breaks character to reveal the deception. This was done intentionally to raise awareness about the dangers of deepfakes and how easily public figures can be manipulated to say things they never did. It served as a stark warning about verifying information and the future threats of synthetic media.",
    image: "/images/p5.png",
  },
  {
    id: 5,
    title: "Fake Biden Robocall Tells New Hampshire Democrats Not to Vote",
    description:
      "A deepfake robocall impersonating U.S. President Joe Biden was circulated in New Hampshire, falsely telling Democratic voters not to vote in the state's primary election. The AI-generated voice mimicked Biden’s tone and speech patterns, urging voters to save their vote for the general election instead. This misinformation tactic was a clear attempt to suppress voter turnout and undermine the democratic process. Authorities launched an investigation to trace the source and prevent future incidents of election-related deepfake manipulation.",
    image: "/images/p4.png",
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
