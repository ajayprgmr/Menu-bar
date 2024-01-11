import { categories, items } from './data.js'
import '../src/App.css'
import Title from './Title.jsx'
import Categories from './Categories.jsx'
import Menu from './Menu.jsx'
import { useState } from 'react'
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items)
    }
    const newItems = items.filter((item) => { 
      item.category === category
    })
    setMenuItems(newItems)
  }
  return (
    <main>
      <Title text='Our Menu' />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuItems={menuItems} />
    </main>
  )
}

export default App
