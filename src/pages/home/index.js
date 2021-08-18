import React,{useEffect} from 'react'
import {connect,useSelector} from 'react-redux'
import Card from '../../component/card'
import Header from '../../component/header'
import Sidebar from '../../component/sidebar'
import {getProductBySold,getProductByCreatedAt} from '../../redux/action'

const Home = ({sold,createdAt}) => {
    const productSold = useSelector(state => state.data.productSold);
    const productCreatedAt = useSelector(state => state.data.productCreatedAt);
    useEffect(() => {
        sold("sold")
      },[])
    return (
        <div>
            <Header />
            <Sidebar />
            <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <div class="container">
                <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-3 g-3">
              { productSold.map((data,i) => {
                  return(<Card title={data.name} key={i} item={data} url="product" />);
              })}
                </div>
              </div>
            </div>
          </main>
          {/* <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <div class="container">
                  <h1>
                        New Arivals
                  </h1>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              {productCreatedAt.map((data,i) => {
                  return(<Card title={data.name} item={data} url="product" />);
              })}
                </div>
              </div>
            </div>
          </main> */}
        </div>
    )
}

const mapDispatchToProp = {
  sold : getProductBySold,
 createdAt: getProductByCreatedAt
}

export default connect(null,mapDispatchToProp) (Home)
