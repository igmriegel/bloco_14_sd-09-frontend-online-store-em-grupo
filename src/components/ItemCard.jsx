import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddToCart from './AddToCart';

class ItemCard extends Component {
  render() {
    const { title, thumbnail, price, result } = this.props;
    return (
      <section data-testid="product" className="item-card">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <div>{price}</div>
        <AddToCart testId="product-add-to-cart" itemCart={ result } />
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/item-details', state: { result } } }
        >
          Detalhes
        </Link>
      </section>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  result: PropTypes.shape().isRequired,
};

export default ItemCard;
