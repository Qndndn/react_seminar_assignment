import React from 'react';

const Feed = ({ title, content }) => {
  return (
    <div className="feed">
      <h4 className="feed--title">{title}</h4>
      <p className="feed--content">{content}</p>
    </div>
  );
};

export default Feed;
