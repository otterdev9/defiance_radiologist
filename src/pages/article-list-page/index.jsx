import React from 'react';
import { useNavigate } from 'react-router-dom';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ArticleListPage = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Periarticular Calcification on X‑ray / CT: Pictorial Patterns & Differential Diagnosis',
      description: 'A systematic approach to periarticular calcification - first confirming calcification vs ossification vs foreign body, then localizing the deposit (tendon, bursa/capsule, intra‑articular, subcutaneous, vascular, or true mass) to narrow the differential dramatically.',
      author: 'Dr. Hassan Semaan',
      category: 'MSK Imaging • Pattern Recognition',
      tags: ['X-ray', 'CT', 'DDx', 'MSK'],
      date: 'January 2026',
      readTime: '15 min read',
    },
  ];

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              <Icon name="BookOpen" size={18} />
              <span>Educational Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Educational Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert insights and comprehensive guides on radiology, imaging patterns, and diagnostic approaches from Dr. Hassan Semaan and the team at Defiance Radiologist Associates.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleArticleClick(article.id)}
              >
                <div className="flex flex-col gap-4">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold w-fit">
                    {article.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="text-secondary hover:text-secondary/80 group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (if needed in future) */}
          {articles.length === 0 && (
            <div className="text-center py-16">
              <Icon name="BookOpen" size={64} className="mx-auto mb-4 text-muted" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Yet</h3>
              <p className="text-muted-foreground">Check back soon for educational content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;
