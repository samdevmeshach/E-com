import React from "react";
import "./style.scss";
import API from "../../config";
const Card = ({ title, url, item }) => {
  return (
    <div class="col Card">
      <div class="card shadow-md">
        <img
          src={`${API}/${url}/photo/${item._id}`}
          className="card-img-top"
          alt="..."
        />
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {item.description}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Add to Cart
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
