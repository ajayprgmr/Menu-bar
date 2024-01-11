import PropTypes from 'prop-types'
import './App.css'

function Categories({ categories, filterItems }) {
  return (
    <div className='categories'>
      {categories.map((category) => {
        return (
          <div className='category' key={category}>
            <button className='btn' onClick={() => filterItems(category)}>
              {category}
            </button>
          </div>
        )
      })}
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
}

export default Categories
