import React, { useEffect, useState } from 'react';
import styles from '../styles/news.module.css';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
}

function News() {
  const [news, setNews] = useState<{ mainNews?: NewsItem[]; secondaryNews?: NewsItem[] }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainNews}>
      {/* Tin tức chính */}
      {news.mainNews && news.mainNews.length > 0 && (
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>{news.mainNews[0].title}</h2>
            <img src={news.mainNews[0].image} alt={news.mainNews[0].title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{news.mainNews[0].content}</p>
          </div>
        </div>
      )}

      {/* Các tin tức phụ */}
      <div className={styles.secondaryNews}>
        {news.secondaryNews && news.secondaryNews.length > 0 && news.secondaryNews.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', display: 'flex' }}>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
