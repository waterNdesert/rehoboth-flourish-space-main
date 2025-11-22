import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Building Stronger Family Bonds',
      excerpt: 'Practical tips and insights for nurturing deeper connections within your family...',
      date: 'March 15, 2024',
      author: 'Elizabeth Dotun',
    },
    {
      title: 'The Power of Forgiveness in Family Life',
      excerpt: 'Exploring how forgiveness can transform relationships and create healing...',
      date: 'March 10, 2024',
      author: 'Dr Ugonna Chukwumaife',
    },
    {
      title: 'Supporting Youth Mental Health',
      excerpt: 'Understanding and addressing mental health challenges in young people...',
      date: 'March 5, 2024',
      author: 'Aaron Antrobus',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stories, insights, and updates from Rehoboth for Families
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h2 className="text-3xl font-serif font-semibold mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-primary hover:underline font-medium">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
