import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.scss';
import ProductSpecs from '../ProductSpecs';

const baseURL =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones';
const imagesURL =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

class ProductDetails extends Component {
  state = {
    data: null,
    error: '',
    bigImg: '',
  };
  componentDidMount() {
    const productID = this.props.match.params.id;
    const dataURL = `${baseURL}/${productID}.json`;

    fetch(dataURL)
      .then(response => {
        if (response.status === 404) throw new Error('Failed to load data!');
        return response.json();
      })
      .then(product =>
        this.setState({
          data: product,
          bigImg: imagesURL + product.images[0],
        })
      )
      .catch(error => this.setState({ error: error.message }));
  }

  //image gallery handler
  handleImgClick = img => {
    this.setState({
      bigImg: img,
    });
  };

  render() {
    const { data, bigImg, error } = this.state;

    if (error) {
      return <h1 style={{ color: 'red' }}>{error}</h1>;
    }
    if (!data) {
      return <div>Loading of data</div>;
    }

    const productImages = data.images.map(item => imagesURL + item);

    return (
      <div className="product__details container-fluid">
        <div className="d-flex mt-3">
          <div className="col-sm-4 align-self-start product__big-img mr-4">
            <img
              className="p-3 d-block w-100 h-auto"
              src={bigImg}
              alt="product"
            />
          </div>
          <div className="col-sm-8 flex-shrink-1 product__description">
            <h1 className="product__details-title">{data.name}</h1>
            <p className="product__details-text">{data.description}</p>
            <ul className="product__thumbs row p-0">
              {productImages.map((item, i) => {
                return (
                  <li
                    key={data.id + (i + 1)}
                    className={
                      bigImg === item
                        ? 'product__thumbs-item product__thumbs-item--active col-sm-2 p-2 m-2 list-unstyled'
                        : 'product__thumbs-item col-sm-2 p-2 m-2 list-unstyled'
                    }
                    onClick={() => this.handleImgClick(item)}
                  >
                    <img className="d-block w-100 h-auto" src={item} alt="product" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="product__specs row py-4">
          <div className="container-fluid d-flex">
            <ProductSpecs
              title="Availability and Networks"
              specArrName="Availability"
              value={data.availability}
            />
            <ProductSpecs title="Battery" value={data.battery} />
            <ProductSpecs title="Storage and Memory" value={data.storage} />
            <ProductSpecs title="Connectivity" value={data.connectivity} />
            <ProductSpecs title="Android" value={data.android} />
            <ProductSpecs title="Size and Weight" value={data.sizeAndWeight} />
            <ProductSpecs title="Display" value={data.display} />
            <ProductSpecs title="Hardware" value={data.hardware} />
            <ProductSpecs title="Camera" value={data.camera} />
            <ProductSpecs
              title="Additional Features"
              value={data.additionalFeatures}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
