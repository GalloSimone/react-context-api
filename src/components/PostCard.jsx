import React from 'react';

const PostCard = ({ post }) => {
  return (
<div  className='card'>
      <h2 className='card-title'>{post.titolo}</h2>
      <p className='card-text'>{post.description}</p>
    </div>
  );
};

export default PostCard;