import React from "react";

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative container mx-auto px-5 py-24 lg:py-32">
        <span className="uppercase tracking-[4px] text-sm font-medium">
          TIK TOK MEHNDI
        </span>

        <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Mehndi Tips, Product Guides & Inspiration
        </h1>

        <p className="mt-6 text-lg max-w-2xl text-red-100">
          Discover everything about Tick Tok Red Cone, bridal mehndi, festivals,
          application tips and premium export-quality mehndi cones.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
