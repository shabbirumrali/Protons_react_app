import React from 'react';

// styles
import './Skeleton.css';

const SkeletonElement = ({ tag }) => {
  const classes = `skeleton_element ${tag}`
    return (
    <div className={classes}></div>
  )
}

export default SkeletonElement