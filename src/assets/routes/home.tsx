import Context from '../components/auth/auth'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <Context.Consumer>
        {(ctx) => (
          <>
            {' '}
            <h1>Головна сторінка</h1>
            <p>{ctx.name}</p>{' '}
          </>
        )}
      </Context.Consumer>
      <Link to="/login">Силка на сторінку логін</Link>
    </>
  )
}

export default Home
