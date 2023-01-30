import React from 'react'
import style from '../../styles/shared/Sidebar.module.css'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className={style.Sidebar}>
      <div className={style.sidebarLink}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/todoapp'>To-do Application</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/calculator'>Calculator</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/blog'>Blog App</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/chat'>Chat App</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/community'>Community App</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/movies'>Movie Search App</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='snake/'>Snake App</NavLink>
      </div>
      <div className={style.sidebarLink}>
        <NavLink to='/ecommerce'>Commerce App</NavLink>
      </div>
    </div>
  )
}

export default SideBar