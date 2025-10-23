import SearchBtn from '@/components/SearchBtn';
import React from 'react'

const NewsPage = async ({ searchParams }) => {


    const { query } = await searchParams;
    const news = await fetch(`http://localhost:3000/api/news?q=${query}`).then(res => res.json())


    return (
        <div className='container mx-auto'>
            <SearchBtn />
            {news?.articles?.map((article, i) => (
                <div key={i} className="border p-3 rounded flex gap-2 my-4">
                    <div className='w-100 h-auto overflow-hidden'>
                        <img src={article.urlToImage} alt={article.title} className='w-100 h-auto' />
                    </div>
                    <div>
                        <h2 className="font-semibold">{article.title}</h2>
                        <p>{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsPage