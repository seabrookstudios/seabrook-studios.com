import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "fe74eg8r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export const getLatestPosts = async () => {
  const data = await client.fetch(
    `*[_type == "post"][0..2]{
        title,
        slug
    }`
  );

  return data;
};

export const getPost = async (slug) => {
  const res = await client.fetch(
    `*[slug.current == $slug]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
            }
          },
        categories[]{
          _ref,
          _key,
        },
        body,
        "name": author->name,
        "authorImage": author->image
       }`,
    { slug }
  );

  return res[0];
};

export const getCategories = async () => {
  return await client.fetch(
    `*[_type == "category"] {
      _id,
      title,
  }`
  );
};

export const imageBuilder = imageUrlBuilder(client);
