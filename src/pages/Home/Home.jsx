import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { v4 as uuid } from 'uuid';
import { setItemData, addItemData, getItemData, removeItemData } from '@/utility/MgLocalStore';
import checkHttp from '@/utility/InputCondition';
import useInputState from '@/hooks/useInputState'
import LinkItem from '@/components/LinkItem';

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
    const prevTheme = getItemData('siteTheme') === 'dark' ? true : false;
    setTheme(prevTheme);
    setAllLinks(getItemData('allshortlinks'))

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
      const itemObj = { id: uuid().slice(0, 8), value: remainLink };
      setAllLinks([...allLinks, itemObj])
      addItemData('allshortlinks', itemObj)
      inputField.onChange('')
    }
    return
  }
  /**
   * item event functions
   */
  const clickToDelete = (itemId) => {
    const remain = removeItemData('allshortlinks', itemId)
    setAllLinks(remain);
  }
  const clickToEdit = (itemId, itemValue) => {
    const editedLink = allLinks.filter((ele) => ele.id !== itemId ? ele : ele.value = itemValue);
    setAllLinks(editedLink)
    setItemData('allshortlinks', editedLink)
  }
  const renderAllLinks = allLinks.map((ele) => <LinkItem key={ele.id} itemId={ele.id} link={ele.value} clickToDelete={clickToDelete} clickToEdit={clickToEdit} />)
  return (
    <div className={`${theme ? 'dark' : 'light'}`}>
      <div className='main-bg'>
        <div className="container md:w-3/4 mx-auto p-3">
          <div className="container-box px-4 py-3 relative">
            <div className="flex flex-col md:flex-row items-start gap-3">
              <div className="flex-1 w-full">
                <input value={inputField.value} onChange={(e) => inputField.onChange(e.target.value)} onKeyUp={pressEnter} className="input w-full" type="url" placeholder="Enter url...." />
              </div>
              <button onClick={handleAddClick} className="btn" type="button">add</button>
            </div>
            <div className="absolute right-4 md:-right-12 top-16 md:top-1/2 md:-translate-y-1/2 z-10">
              <button onClick={handleTheme} className='icon-btn' type="button">
                {theme ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
          <div className="container-box mt-4 px-4 py-3">
            <h1 className="text-3xl font-semibold">All links here:</h1>
            <div className="p-2 space-y-3">
              {renderAllLinks}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home