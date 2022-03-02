import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, client, imageBuilder, getCategories } from "../services/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { linkStyle } from "../styles/text";

const urlFor = (source) => {
  return imageBuilder.image(source);
};

const AuthorImage = ({ authorImage, name }) => {
  if (!authorImage) {
    return null;
  }

  return <img src={urlFor(authorImage).width(100).url()} alt={`Author is ${name}`} />;
};

export const BlogPost = () => {
  const [postData, setPostData] = useState(null);
  const [categories, setCategories] = useState(null);
  const { slug } = useParams();

  const fetchData = async () => {
    const post = await getPost(slug);
    const allCategories = await getCategories();

    const postCategoryRefs = post.categories.map((category) => category._ref);

    setPostData(post);
    setCategories(allCategories.filter((category) => postCategoryRefs.includes(category._id)));
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-prose mx-auto pt-8 px-2">
      <div className="self-start">
        <div className="flex row justify-start items-center">
          {categories.map((category) => {
            return (
              <Link
                className={`pr-2 ${linkStyle}`}
                to={`/blog/${categories.title}`}
                key={category._id}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <h1 className="text-xl text-pink-500 pt-2">{postData.title}</h1>
      </div>
      {postData.mainImage && <img src={urlFor(postData.mainImage).width(200).url()} alt="" />}
      <div className="max-w-prose pt-4">
        <BlockContent
          blocks={postData.body}
          projectId={client.config().projectId}
          dataset={client.config().dataset}
        />
      </div>
      <div>
        <AuthorImage authorImage={postData.authorImage} name={postData.name} />
        <h4>{postData.name}</h4>
      </div>
    </div>
  );
};
