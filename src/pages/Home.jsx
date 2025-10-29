import { motion } from 'framer-motion';
import { Code2, Smartphone, Film, BookOpen } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const recentPosts = blogPosts.slice(0, 3);

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📦' },
  ];

  const interests = [
    { icon: Code2, label: '技术笔记', color: 'text-blue-600' },
    { icon: Smartphone, label: '数码分享', color: 'text-purple-600' },
    { icon: Film, label: '观影记', color: 'text-pink-600' },
    { icon: BookOpen, label: '生活感悟', color: 'text-green-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
            你好，我是开发者
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            一个热爱技术、热爱生活的全栈开发者 ✨
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            在这里记录我的技术学习、数码体验、观影感悟和生活思考。
            欢迎和我一起探索代码世界，分享技术与生活的点点滴滴。
          </p>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">我的兴趣领域</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <interest.icon size={48} className={`mx-auto mb-4 ${interest.color}`} />
                <p className="font-semibold text-gray-800">{interest.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">技术栈</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="font-semibold text-gray-800 text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recent Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">最近更新</h2>
            <a
              href="/blog"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              查看全部 →
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

