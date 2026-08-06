import React from "react";
import Section from "../components/ui/Section";
import BlogHero from "../components/blogs/BlogHero";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import BlogCard from "../components/blogs/BlogCard";
import { blogs } from "../data/blog";

const OurBlogs = () => {
  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];
  const latestBlogs = blogs.filter(
    (blog) => !(featuredBlog && blog.id === featuredBlog.id)
  );

  return (
    <div className="min-h-screen bg-accent">
      {/* Simple Hero */}
      <BlogHero />

      {/* Featured */}
      <FeaturedBlog blog={featuredBlog} />

      {/* All Articles - Simple grid */}
      <Section
        title="All Articles"
        subtitle="Tips, guides and inspiration for mehndi lovers"
        padding="pb-16 md:pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default OurBlogs;
