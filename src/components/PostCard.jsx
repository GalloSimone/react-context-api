import React from 'react';

const PostCard = ({ post }) => {
  return (
    
<div  className='card carte'>
      <h2 className='card-title text-center '>{post.titolo}</h2>
      <p className='card-text text-center' >{post.description}</p>
    </div>
    
  );
};

export default PostCard;