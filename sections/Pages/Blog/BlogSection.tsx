import React from "react";
import { BLOG_LIST } from "@/data/data"; 
import { Categories, PopularTags, CallToAction, Search, LatestPosts, BlogListCard } from "@/components";

const BlogSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 shadow-sm p-8">
            {BLOG_LIST.map((post, index)=>(
              <BlogListCard 
                key={index}
                title={post.title} 
                url={post.url} 
                date={post.date} 
                img={post.img} 
                author={post.author} 
                comments={post.comments} 
                tag={post.tag} 
                intro={post.intro} 
            /> 
            ))}
                     
          </div>
          <div className="lg:col-span-4">
            <Search />
            <Categories /> 
            <LatestPosts />
            <PopularTags />
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
