import React from 'react'
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

// styles
import './Skeleton.css';

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || 'light';
  return (
    <div className={`skeleton_wrapper ${themeClass}`}>
        <Shimmer />
        <div className='skeleton_article'>
            <SkeletonElement tag={'title'} />
            <SkeletonElement tag={'text'} />
            <SkeletonElement tag={'text'} />
            <SkeletonElement tag={'text'} />
        </div>
    </div>
  )
}

export default SkeletonArticle