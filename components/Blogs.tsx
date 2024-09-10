"use client";

import { CategoryContext } from "@/context/CategoryContext";
import { useContext } from "react";
import BlogCard from "./BlogCard";

const Blogs = ({ blogs }: { blogs: any }) => {
  const { categoryId } = useContext(CategoryContext);

  const filteredBlogs = blogs?.filter(
    (blog: any) => blog.categoryId.$id === categoryId
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {filteredBlogs?.map((blog: any) => (
        <div key={blog.$id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
