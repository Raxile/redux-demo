import React from "react";

const Card = ({
  id = "",
  title = "",
  body = "",
  userId = "",
  deleteHandler = () => {},
  updateHandler = () => {},
}) => {
  return (
    <div className="card mb-2" style={{ width: "18rem", height: "20rem" }}>
      <div className="card-body position-relative">
        <h5 className="card-title">
          {id} {title}
        </h5>
        <p className="card-text" style={{ height: "9rem", overflow: "hidden" }}>
          {body}
        </p>
        <div
          className="d-flex justify-content-center position-absolute"
          style={{ bottom: "20px", gap: "40px" }}
        >
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteHandler(id);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-info"
            onClick={() => updateHandler(id, title, body, userId)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
