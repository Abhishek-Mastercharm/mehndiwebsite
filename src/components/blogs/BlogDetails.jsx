import { Link, useParams } from "react-router-dom";
import { blogs } from "../../data/blog";
import { FaCheckCircle } from "react-icons/fa";
import Head from "../../seo/Head";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-accent flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="text-6xl font-black text-primary mb-4">404</div>
          <h1 className="text-xl md:text-2xl font-bold mb-4">Blog Not Found</h1>
          <Link
            to="/blogs"
            className="inline-block px-5 py-2.5 bg-primary text-white rounded-lg"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head
        title={`${blog.title} - TIK TOK Mehndi`}
        description={blog.excerpt || blog.content.substring(0, 160)}
        type="article"
        keywords={blog.keywords || undefined}
        image={
          blog.image
            ? `https://altamash-mehndi.com${blog.image}`
            : "https://altamash-mehndi.com/images/og-cover.jpg"
        }
      />
      <div className="min-h-screen bg-accent py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <article className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              title={blog.title + " - TIK TOK Mehndi blog - " + blog.category}
              className="w-full h-56 md:h-80 object-cover"
            />
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-500 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {blog.category}
                </span>
                <span>{blog.date}</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-5 font-serif">
                {blog.title}
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-7">
                {blog.content}
              </p>
              <div className="h-px bg-gray-200 mb-7" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Key Points
                </h3>
                <ul className="space-y-3">
                  {blog.points &&
                    blog.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-1 text-secondary shrink-0">
                          <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                        <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
