import { useState } from "react";
import logo from "../images/icon.png";
import { getLatestPosts } from "../services/sanity";

export const Footer = () => {
  const [latestPosts, setLatestsPost] = useState([]);

  const fetchPosts = async () => {
    const posts = await getLatestPosts();

    setLatestsPost(posts);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  return (
    <div className="bg-gray-100 border-t border-black flex flex-col justify-center items-center text-black text-sm p-4">
      {/* <PostList postList={latestPosts} title="Recent Posts" /> */}
      <img src={logo} alt="Seabrook Studios Logo" className="h-24 w-24 mt-4" />
      <p>© Seabrook Studios 2018-2022</p>
      <p className="text-xs text-gray-400">
        Apple logo is a trademark of Apple Inc. Google Play and the Google Play logo are trademarks
        of Google LLC.
      </p>
    </div>
  );
};
