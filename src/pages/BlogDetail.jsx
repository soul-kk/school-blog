import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { blogPosts } from '../data/blogPosts';
import 'highlight.js/styles/github-dark.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
        <button
          onClick={() => navigate('/blog')}
          className="text-green-600 hover:text-green-700"
        >
          返回博客列表
        </button>
      </div>
    );
  }

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
      transition={{ duration: 0.6 }}
      className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center text-gray-600 hover:text-green-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        返回博客列表
      </button>

      {/* Article Header */}
      <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex items-center gap-2 mb-4">
          <Tag size={18} />
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${tagColors[post.tag] || 'bg-gray-100 text-gray-700'
              }`}
          >
            {post.tag}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-500 mb-8">
          <Calendar size={18} className="mr-2" />
          <span>{post.date}</span>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogDetail;

