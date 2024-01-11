import PropTypes from 'prop-types'
import './App.css'
function MenuItems({ item_name, image, description, price }) {
  return (
    <div className='item'>
      <img src={image} alt={item_name} className='item-image' />
      <h4 className='item-name'>{item_name}</h4>
      <p className='item-des'>{description}</p>
      <h5 className='item-price'>{`Price: $${price}`}</h5>
    </div>
  )
}

MenuItems.propTypes = {
  item_name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default MenuItems
