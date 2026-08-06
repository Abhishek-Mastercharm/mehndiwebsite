import { Link } from "react-router-dom";

const FeaturedBlog = ({ blog }) => {
  if (!blog) return null;

  return (
    <section className="container mx-auto px-5 py-10 md:py-14">
      <Link
        to={`/blogs/${blog.slug}`}
        className="grid lg:grid-cols-2 gap-8 md:gap-10 bg-white rounded-3xl overflow-hidden shadow-lg group"
      >
        <div className="overflow-hidden h-64 md:h-auto">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 duration-500"
          />
        </div>

        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <span className="bg-primary text-white px-4 py-1.5 rounded-full w-fit text-xs md:text-sm font-semibold uppercase tracking-wide">
            Featured
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 group-hover:text-primary transition-colors font-['Playfair_Display']">
            {blog.title}
          </h2>

          <p className="mt-4 md:mt-5 text-gray-600 leading-7 md:leading-8">
            {blog.excerpt}
          </p>

          <div className="mt-6 md:mt-8 text-primary font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Read Article →
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedBlog;
