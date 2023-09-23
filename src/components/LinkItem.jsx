import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import checkHttp from '@/utility/InputCondition'

const LinkItem = ({ itemId, link, clickToDelete, clickToEdit }) => {
  /**
   * edit state false means not now editing
   */
  const [edit, setEdit] = useState(false)
  const editInputField = useRef(null)

  const prassEnter = (e) => {
    if (e.key === 'Enter') handleEdit();
  }

  const handleEdit = () => {
    let value = editInputField.current.value;
    let remainLink = checkHttp(value);
    if (value.includes('.')) {
      clickToEdit(itemId, remainLink)
      editInputField.current.value = ''
      setEdit(prop => !prop)
    }
    return
  }

  const RenderLink = () => {
    if (edit) {
      return (
        <>
          <div className="flex-1">
            <input ref={editInputField} onKeyUp={prassEnter} className="input mr-2" type='url' placeholder={`Edit.... ${link}`} />
          </div>
          <button onClick={handleEdit} className="btn" type="button">edit</button>
        </>
      )
    } else {
      return (
        <>
          <Link to={`/linkshortener/${itemId}`} target='_blank' className='hover:underline' rel="noreferrer">{`${window.location.origin}/linkshortener/${itemId}`}</Link>
          <div className='text-gray-500 pointer-events-none select-none fade w-[335px] md:w-[450px] whitespace-nowrap overflow-hidden'>{link}</div>
        </>
      )
    }
  }
  return (
    <div className="shortlink-item">
      <div className="flex flex-col xl:flex-row gap-3">
        <RenderLink />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setEdit(prop => !prop)} className="p-1.5 rounded border border-gray-500" type="button"><BiEdit size={20} /></button>
        <button onClick={() => clickToDelete(itemId)} className="bg-red-800 text-gray-50 p-1.5 rounded border border-gray-500" type="button"><RiDeleteBin6Line size={18} /></button>
      </div>
    </div>
  )
}

LinkItem.propTypes = {
  itemId: PropTypes.string,
  link: PropTypes.string,
  clickToDelete: PropTypes.func,
  clickToEdit: PropTypes.func
}

export default LinkItem
