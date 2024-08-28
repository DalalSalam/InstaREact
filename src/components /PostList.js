import React from "react";
import "../assest/css/PostList.css";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    title: "Pasta",
    description: "",
    image:
      "https://i.pinimg.com/564x/3b/f1/0d/3bf10d9b0909728ae532fc4aa3ca306c.jpg",
    likes: 24,
  },
  {
    id: 2,
    title: "morning stretch",
    description: "",
    image:
      "https://i.pinimg.com/564x/d4/8e/75/d48e753f0cc60f6fed1723cf4f1cef3f.jpg",
    likes: 44,
  },
  {
    id: 3,
    title: "indoor run",
    description: "",
    image:
      "https://i.pinimg.com/564x/6d/bf/92/6dbf92811511f3b3e43845cd4d13aedf.jpg",
    likes: 4,
  },
  {
    id: 4,
    title: "carpets",
    description: "",
    image:
      "https://i.pinimg.com/564x/86/e6/f3/86e6f3cd87446eb05d65b715fd887be0.jpg",
    likes: 14,
  },
  {
    id: 5,
    title: "journal",
    description: "",
    image:
      "https://i.pinimg.com/564x/f2/91/40/f2914060d040dde35d182579be778c92.jpg",
    likes: 22,
  },
  {
    id: 6,
    title: "jam",
    description: "",
    image:
      "https://i.pinimg.com/564x/8b/d4/62/8bd4629cb33dc5a5474691f4545f5c83.jpg",
    likes: 16,
  },
];

const PostList = () => {
  return (
    <div className="postList">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default PostList;
