import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { setItemData } from '../../utility/MgLocalStore'
import { useEffect } from 'react';

const Home = () => {
  /**
   * theme state true means dark mode and false means light mode
   */
  const [theme, setTheme] = useState(false);
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
  return (
    <div className={`${theme ? 'dark' : 'light'}`}>
      <div className='main-bg'>
        <div className="container w-3/4 mx-auto p-3">
          <div className="container-box px-4 py-3 relative">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <input className="input w-full" type="url" placeholder="Enter url...." />
              </div>
              <button className="btn" type="button">add</button>
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