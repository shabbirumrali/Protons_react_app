import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { HiOutlineArrowRight } from 'react-icons/hi'
import SkeletonArticle from '../../skeleton/SkeletonArticle';
// styles
import './Article.css';

const Article = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data: articles } = useFetch(url);
    return (
    <div className='article'>
        <h1>Articles</h1>
        {articles && articles.map(article => (
            <div className='article_card flex'>
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
                <div className='button arrow'>
                    <HiOutlineArrowRight />
                </div>
            </div>
        ))}
        {!articles && [1, 2, 3, 4, 5].map(n => <SkeletonArticle theme="light" />)}
    </div>
  )
}

export default Article