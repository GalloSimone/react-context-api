import React from 'react';
import { usePosts } from  "../contexts/PostsContext";
import PostCard from './PostCard';

const PostsList = () => {
  const posts = usePosts();

  return (
    <div className='row'>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;