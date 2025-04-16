import './Components.css'
import search_icon from './search_icon.png'
import mic from './mic.png'
import { useState } from 'react'

const SearchSection = () => {
  const [inputBoxValue , setInputBoxValue] = useState(" ")
  let inputValue = document.getElementById('search-box')
  async function searchNews(e){
    e.preventDefault();
    let val = inputValue.value.replace(" ", "+")
    setInputBoxValue(val.toLowerCase())
    console.log(inputBoxValue)

    

  }
  return (
    <div className='search-container'>
      <div className="search-section">
        <form>
        <input type="text" placeholder="Search" id='search-box'/>
        <button><img src={search_icon} alt="search" onClick={searchNews}/></button>
      <button className='mic'><img src={mic} alt="microphone" /></button>
      </form>
      </div>
    </div>
  )
}

export default SearchSection
