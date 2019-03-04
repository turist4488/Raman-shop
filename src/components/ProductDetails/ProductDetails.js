import React, { Component } from 'react';
import Loader from '../Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.scss';
import ProductSpecs from '../ProductSpecs';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

const imagesURL =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

class ProductDetails extends Component {
  state = {
    bigImg: '',
  };

  componentDidMount() {
    const productID = this.props.match.params.id;
    this.props.dispatch(actions.getProductDetails(productID));
  }

  //image gallery handler
  handleImgClick = img => {
    this.setState({
      bigImg: img,
    });
  };

  render() {
    const { productDetails, dataLoading, fetchError } = this.props;
    const { bigImg } = this.state;

    if (!productDetails || dataLoading) {
      return <Loader />;
    }

    if (fetchError) {
      return <div>{fetchError}</div>;
    }

    const productImages = productDetails.images.map(item => imagesURL + item);

    return (
      <div className="product__details container-fluid">
        <div className="d-flex mt-3">
          <div className="col-sm-4 align-self-start product__big-img mr-4">
            <img
              className="p-3 d-block w-100 h-auto"
              src={bigImg ? bigImg : productImages[0]}
              alt="product"
            />
          </div>
          <div className="col-sm-8 flex-shrink-1 product__description">
            <h1 className="product__details-title">{productDetails.name}</h1>
            <p className="product__details-text">
              {productDetails.description}
            </p>
            <ul className="product__thumbs row p-0">
              {productImages.map((item, i) => {
                return (
                  <li
                    key={productDetails.id + (i + 1)}
                    className={
                      bigImg === item
                        ? 'product__thumbs-item product__thumbs-item--active col-sm-2 p-2 m-2 list-unstyled'
                        : 'product__thumbs-item col-sm-2 p-2 m-2 list-unstyled'
                    }
                    onClick={() => this.handleImgClick(item)}
                  >
                    <img
                      className="d-block w-100 h-auto"
                      src={item}
                      alt="product"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="product__specs row py-4">
          <div className="container-fluid d-flex flex-wrap">
            <ProductSpecs
              title="Availability and Networks"
              specArrName="Availability"
              value={productDetails.availability}
            />
            <ProductSpecs title="Battery" value={productDetails.battery} />
            <ProductSpecs
              title="Storage and Memory"
              value={productDetails.storage}
            />
            <ProductSpecs
              title="Connectivity"
              value={productDetails.connectivity}
            />
            <ProductSpecs title="Android" value={productDetails.android} />
            <ProductSpecs
              title="Size and Weight"
              value={productDetails.sizeAndWeight}
            />
            <ProductSpecs title="Display" value={productDetails.display} />
            <ProductSpecs title="Hardware" value={productDetails.hardware} />
            <ProductSpecs title="Camera" value={productDetails.camera} />
            <ProductSpecs
              title="Additional Features"
              value={productDetails.additionalFeatures}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { productDetails, dataLoading, fetchError } = state;

  return {
    productDetails,
    dataLoading,
    fetchError,
  };
};

export default connect(mapStateToProps)(ProductDetails);
