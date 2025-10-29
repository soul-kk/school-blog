import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  const [selectedTag, setSelectedTag] = useState('全部');

  const tags = ['全部', '技术笔记', '数码分享', '观影记', '生活感悟'];

  const filteredPosts =
    selectedTag === '全部'
      ? blogPosts
      : blogPosts.filter((post) => post.tag === selectedTag);

  const tagColors = {
    全部: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    技术笔记: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    数码分享: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    观影记: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
    生活感悟: 'bg-green-100 text-green-700 hover:bg-green-200',
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
            博客文章
          </h1>
          <p className="text-gray-600 text-lg">
            记录学习、分享经验、感悟生活
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${selectedTag === tag
                  ? 'ring-2 ring-green-600 ' + tagColors[tag]
                  : tagColors[tag]
                }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">暂无该分类的文章</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogList;

