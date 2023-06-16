import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { deletePost, getPost } from "../redux/actions";
import Card from "../components/Card";
import Style from "./Post.module.css";

const Post = ({ getPost, posts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [getPost, dispatch]);

  const deleteBtnHandler = (postId) => {
    dispatch(deletePost(postId));
  };
  return (
    <>
      <div className={Style.addBtnContainer}>
        <button className={Style.addBtn}>Add Post</button>
      </div>
      <div className={Style.postContainer}>
        {posts.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}
            deleteHandler={deleteBtnHandler}
          />
        ))}
      </div>
    </>
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
