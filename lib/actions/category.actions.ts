"use server";

import { databases } from "../appwrite.config";
import { revalidatePath } from "next/cache";

export const getCategories = async () => {
  try {
    const categories = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.CATEGORIES_COLLECTION_ID!
    );

    revalidatePath("/");

    return categories;
  } catch (error) {
    console.error("Fetching categories failed:", error);
  }
};
