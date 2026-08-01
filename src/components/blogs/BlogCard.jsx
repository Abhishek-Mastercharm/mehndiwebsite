import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl duration-300 block flex flex-col"
    >
      <div className="overflow-hidden h-52 shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold w-fit">
          {blog.category}
        </span>

        <h3 className="text-xl md:text-2xl font-bold mt-4 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {blog.title}
        </h3>

        <p className="mt-3 text-gray-600 line-clamp-3 text-sm md:text-base">
          {blog.excerpt}
        </p>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">{blog.date}</span>
          <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-sm group-hover:translate-x-0.5 transition-transform">
            Read <FaArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
