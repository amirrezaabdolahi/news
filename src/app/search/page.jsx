import SearchBtn from '@/components/SearchBtn';
import React from 'react';

const NewsPage = async ({ searchParams }) => {
    const { query } = await searchParams;

    const res = await fetch(`https://news-sepia-sigma.vercel.app/api/news?q=${query}`, { cache: "no-store" });
    const news = await res.json();

    return (
        <div className='container mx-auto'>
            <SearchBtn />
            {news?.articles?.length > 0 ? (
                news.articles.map((article, i) => (
                    <div key={i} className="border p-3 rounded flex gap-2 my-4">
                        {article.urlToImage && (
                            <div className='w-100 h-auto overflow-hidden'>
                                <img src={article.urlToImage} alt={article.title} className='w-100 h-auto' />
                            </div>
                        )}
                        <div>
                            <h2 className="font-semibold">{article.title}</h2>
                            <p>{article.description}</p>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-5">No articles found.</p>
            )}
        </div>
    );
};

export default NewsPage;
