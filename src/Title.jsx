import './App.css'
import PropTypes from 'prop-types'

function Title({ text }) {
  return (
    <div className='title'>
      <h2>{text}</h2>
      <div className='menu-underline'></div>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
