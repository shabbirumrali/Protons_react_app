import React from 'react'
import SkeletonElement from './SkeletonElement'

import './Skeleton.css';
import Shimmer from './Shimmer';

const SkeletonProfile = ({ theme }) => {
    const themeClass = theme || 'light';
  return (
    <div className={`skeleton_wrapper profile ${themeClass}`}>
      <Shimmer />
        <div className='skeleton_profile'>
            <SkeletonElement tag={'avatar'} />
            <SkeletonElement tag={'title'} />
            <SkeletonElement tag={'text'} />
            <SkeletonElement tag={'text'} />
            <SkeletonElement tag={'text'} />
        </div>
    </div>
  )
}

export default SkeletonProfile