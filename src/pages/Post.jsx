import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../redux/actions";
import Card from "../components/Card";
import Style from "./Post.module.css";

const Post = ({ getPost, posts }) => {
  console.log(posts);
  useEffect(() => {
    getPost();
  });
  return (
    <div className={Style.postContainer}>
      {posts.map((p) => (
        <Card key={p.id} id={p.id} title={p.title} body={p.body} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    getPostReducer: { posts },
  } = state;

  return { posts };
};

const mapActionToProps = () => {
  return { getPost };
};

export default connect(mapStateToProps, mapActionToProps)(Post);
