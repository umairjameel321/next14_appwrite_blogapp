import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="rounded-lg shadow-md p-8 mb-4 border-2 border-gray-700 cursor-pointer">
      <Link href={`/blog/${blog.$id}`}>
        <div className="flex items-center justify-center">
          <Image
            width={200}
            height={200}
            src={blog.imageUrl}
            alt={blog.title}
            className="rounded-t-lg items-center"
          />
        </div>
        <h2 className="text-xl font-semibold mt-6 overflow-ellipsis">
          {blog.title}
        </h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{blog.description}</p>
      </Link>
    </div>
  );
};
export default BlogCard;
