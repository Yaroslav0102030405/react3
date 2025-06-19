import { NavLink } from 'react-router'
import routes from '../../routes/routes'
const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to={routes.home}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Домашня сторінка
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.about}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Про нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.books}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Багато книг
          </NavLink>
          <li>
          <NavLink
            to={routes.login}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Сторінка логін
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.register}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Сторінка регістрації
          </NavLink>
        </li>
        </li>
      </ul>
    </>
  )
}

export default Navigation
