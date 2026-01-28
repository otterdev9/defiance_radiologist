import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ArticleContent1 from './components/ArticleContent1';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Article metadata
  const articles = {
    1: {
      title: 'Periarticular Calcification on X‑ray / CT: Pictorial Patterns & Differential Diagnosis',
      author: 'Dr. Hassan Semaan',
      date: 'January 2026',
      readTime: '15 min read',
      category: 'MSK Imaging • Pattern Recognition',
      component: ArticleContent1,
    },
  };

  const article = articles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <StickyNavigationBar />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="AlertCircle" size={64} className="mx-auto mb-4 text-destructive" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/article')}>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Back to Articles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const ArticleComponent = article.component;

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/article')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Back to Articles
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Icon name="User" size={18} />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="article-content">
            <ArticleComponent />
          </article>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => navigate('/article')}
              >
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Back to Articles
              </Button>
              <Button
                variant="default"
                onClick={() => navigate('/appointment-confirmation-page')}
              >
                Schedule Consultation
                <Icon name="Calendar" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
