import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const tagColors = {
    '技术笔记': 'bg-blue-100 text-blue-700',
    '数码分享': 'bg-purple-100 text-purple-700',
    '观影记': 'bg-pink-100 text-pink-700',
    '生活感悟': 'bg-green-100 text-green-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${post.id}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 h-full border border-gray-100">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-3">
            <Tag size={16} />
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[post.tag] || 'bg-gray-100 text-gray-700'
                }`}
            >
              {post.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
            {post.title}
          </h3>

          {/* Date */}
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar size={16} className="mr-2" />
            <span>{post.date}</span>
          </div>

          {/* Excerpt */}
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;

