import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'

import s from './Header.module.scss'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
          <Link className={s.link} to="/">
            <div className={s.title}>Keeper</div>
          </Link>
          <Link to="/trash" className={s.link}>
            <DeleteIcon />
          </Link>
        </div>
      </div>
      <div className={s.shadowHeader} />
    </>
  )
}

export default Header
