import React, { useState, useEffect } from "react";
import { read,} from "../../api/apiCore";
import Header from '../../component/header'
import Sidebar from '../../component/sidebar'
import ProductCard from "../../component/productCard";
import {connect,useSelector} from 'react-redux'
import { relatedProduct } from "../../redux/action";
import Card from "../../component/card";
const Product = ({match,getRelatedProduct}) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const relatedProd = useSelector(state => state.data.relatedProduc) 
  const loadProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  useEffect(() => {
    const productId = match.params.productId;
    loadProduct(productId);
    getRelatedProduct(productId)
  }, [match]);

  return (
    <div>
        <Header />
        <Sidebar />
      <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              <ProductCard title={product.name} item={product} url="product" />
            </div>
          </div>
        </div>
      </main>
      <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div class="container">
            <h3>Related Products</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              {relatedProd.map((data,i) => {
                  return(
                    <Card title={data.name} key={i} item={data} url="product"/>
                  )
              }) }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


const mapDispatchToprop = {
  getRelatedProduct : relatedProduct
}

export default connect(null,mapDispatchToprop) (Product);
