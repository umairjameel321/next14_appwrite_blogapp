import Image from "next/image";
import Link from "next/link";
import { getBlog } from "@/lib/actions/blog.actions";

const BlogPage = async ({ params }: { params: any }) => {
  const blog: any = await getBlog(params.id);
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <Link href="/">{"< back"}</Link>
      <div className="relative size-[400px] overflow-hidden rounded-lg mt-5">
        <Image width={400} height={400} src={blog.imageUrl} alt={blog?.title} />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog?.title}</h1>
        <p className="text-gray-300 mt-6">{blog?.description}</p>
        <div className="mt-4 flex items-center text-gray-500">
          <span className="text-sm">
            Published on: {new Date(blog?.$createdAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
