import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'
import clsx from 'clsx'

const Navigation = () => {

    const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.activeLink);
};

  return (
      <>
          <nav className={s.nav}>
              <ul className={s.list}>
                  <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/">Home</NavLink>
                </li>
                  <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
                </li>
              </ul>
        </nav>
    </>
  )
}

export default Navigation