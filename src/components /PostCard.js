import React from "react";
import "../assest/css/PostCard.css";

const PostCard = ({ image, title, description, likes }) => {
  return (
    <div className="postCard">
      <img src={image} alt={title} className="PostCard__image" />
      <h1 className="postCard_title">{title}</h1>
      <p className="postCard_description">{description}</p>
      <span className="postCard_likes">{likes} Likes</span>
      <button className="postCard_likeButton">Like</button>
    </div>
  );
};

export default PostCard;

// note ts: <span> is an inline HTML element used to group and apply styles to parts of the text or other inline elements.
