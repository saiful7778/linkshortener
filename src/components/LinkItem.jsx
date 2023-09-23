import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkItem = ({ itemId, link, clickToDelete, clickToEdit }) => {
  /**
   * edit state false means not now editing
   */
  const [edit, setEdit] = useState(false)
  const RenderLink = () => {
    if (edit) {
      return (
        <div className='flex gap-2'>
          <div className="flex-1">
            <input className="input mr-2" type='url' placeholder={`Edit.... ${link}`} />
          </div>
          <button className="btn" type="button">edit</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={`/linkshortener/${itemId}`} target='_blank' className='mr-3 hover:underline' rel="noreferrer">{`${window.location.origin}/linkshortener/${itemId}`}</Link>
          <span className='text-gray-500 pointer-events-none select-none'>{link}</span>
        </div>
      )
    }
  }
  return (
    <div className="shortlink-item">
      <RenderLink />
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