// src/News.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json'
          );
          setNews(response.data.articles.slice(0, 9));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-5xl font-bold mb-10 text-center text-gray-700">Latest in Technology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="bg-slate-100 text-slate-900 rounded-lg shadow-lg overflow-hidden">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">
                {article.description ? article.description.substring(0, 150) + '...' : ''}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
