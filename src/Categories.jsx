import PropTypes from 'prop-types'
import './App.css'
import { useState } from 'react'

function Categories({ categories, filterItems }) {
  const [activeBtn, setActiveBtn] = useState('All')

  const handleButtonClick = (category) => {
    setActiveBtn(category)
    filterItems(category)
  }

  return (
    <div className='categories'>
      {categories.map((category) => (
        <div className='category' key={category}>
          <button
            className={activeBtn === category ? 'btn-active' : 'btn'}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
}

export default Categories
