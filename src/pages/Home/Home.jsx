import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { setItemData } from '@/utility/MgLocalStore';
import checkHttp from '@/utility/InputCondition';
import useInputState from '@/hooks/useInputState'

const Home = () => {
  /**
   * theme state true means dark mode and false means light mode
   */
  const [theme, setTheme] = useState(false);
  /**
   * add all inputed links here @allLinks
   */
  const [allLinks, setAllLinks] = useState([]);
  /**
   * handle input field state
   */
  const inputField = useInputState('')

  useEffect(() => {
    const prevTheme = localStorage.getItem('siteTheme') === 'dark' ? true : false;
    setTheme(prevTheme)
  }, []);
  const handleTheme = () => {
    setTheme(prop => !prop)
    if (!theme) {
      setItemData('siteTheme', 'dark')
    } else {
      setItemData('siteTheme', 'light')
    }
  }
  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddClick()
    }
  }
  const handleAddClick = () => {
    let value = inputField.value;
    let remainLink = checkHttp(value);
    if (value.includes('.')) {
      console.log(remainLink);
    }
    return
  }
  return (
    <div className={`${theme ? 'dark' : 'light'}`}>
      <div className='main-bg'>
        <div className="container w-3/4 mx-auto p-3">
          <div className="container-box px-4 py-3 relative">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <input value={inputField.value} onChange={(e) => inputField.onChange(e.target.value)} onKeyUp={pressEnter} className="input w-full" type="url" placeholder="Enter url...." />
              </div>
              <button onClick={handleAddClick} className="btn" type="button">add</button>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10">
              <button onClick={handleTheme} className='icon-btn' type="button">
                {theme ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
          <div className="container-box mt-4 px-4 py-3">
            <h1 className="text-3xl font-semibold">All links here:</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home