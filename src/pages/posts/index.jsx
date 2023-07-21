import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { deletePost, getPost } from "../../redux/actions";
import Card from "../../components/Card";
import Style from "./Post.module.css";
import PostForm from "./PostForm";
import CustomPagination from "../../components/CustomPagination";

const postPerPage = 10;

const Post = ({ getPost, posts, loading }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatePost, setupdatePost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  //Pagination Logic
  const remainingPost = posts.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [getPost, dispatch]);

  const deleteBtnHandler = (pId) => {
    dispatch(deletePost(pId));
  };
  const updateBtnHandler = (pId, title, body, userId) => {
    setupdatePost({ id: pId, title, body, userId });
    setIsModalVisible(true);
  };
  return (
    <>
      <div className={Style.addBtnContainer}>
        <button
          className={Style.addBtn}
          onClick={() => {
            setIsModalVisible(true);
            setupdatePost({});
          }}
        >
          Add Post
        </button>
      </div>
      {isModalVisible && (
        <PostForm
          Style={Style}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          userId={updatePost?.userId}
          postId={updatePost?.id}
          updateForm={updatePost?.id ? true : false}
          postFormInitialValue={
            updatePost?.id
              ? { body: updatePost?.body, title: updatePost?.title }
              : { body: "", title: "" }
          }
        />
      )}
      <div className={Style.postContainer}>
        {remainingPost.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}
            userId={p.userId}
            deleteHandler={deleteBtnHandler}
            updateHandler={updateBtnHandler}
          />
        ))}
      </div>
      <CustomPagination
        totalElements={posts.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    getPostReducer: { posts, loading },
  } = state;
  return { posts, loading };
};

const mapActionToProps = () => {
  return { getPost };
};

export default connect(mapStateToProps, mapActionToProps)(Post);
