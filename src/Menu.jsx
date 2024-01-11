import PropTypes from 'prop-types'
import './App.css'
import MenuItems from './MenuItems'

function Menu({ menuItems }) {
  return (
    <div className='menu-section-container'>
      {menuItems.map((menuItem) => {
        return <MenuItems key={menuItem.id} {...menuItem} />
      })}
    </div>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Menu
