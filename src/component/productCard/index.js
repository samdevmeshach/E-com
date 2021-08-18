import React from "react";
import {withRouter} from 'react-router-dom'
import API from "../../config";
const ProductCard = ({ title, url, item,history }) => {

  const productPage = () => {
    history.push(`/product/${item._id}`);
}
  return (
    <>
    <div class="col col-lg-6 Card">
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
                Add to Cart
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-md-6 Card">
      <h2>{item.description}</h2>
    </div>
    </>
  );
};

export default withRouter(ProductCard);
