"use server";

import { databases } from "../appwrite.config";

export const getBlog = async (id: string) => {
  try {
    const blog = await databases.getDocument(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!,
      id
    );

    return blog;
  } catch (error) {
    console.error("Fetching a blog failed:", error);
  }
};

export const getBlogs = async () => {
  try {
    const blogs = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!
    );

    return blogs;
  } catch (error) {
    console.error("Fetching blogs failed:", error);
  }
};
