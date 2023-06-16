import React from "react";

const Card = ({ id, title, body, deleteHandler }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {id} {title}
        </h5>
        <p className="card-text">{body}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteHandler(id);
            }}
          >
            Delete
          </button>
          <button className="btn btn-info">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
