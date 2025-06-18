import Context from '../auth/auth'

const UserMenu = () => {
  return (
    <>
      <Context.Consumer>
        {(ctx) => (
          <div>
            <img width="50" src={ctx.avatar} alt={ctx.name} />
            <h3>{ctx.name}</h3>
            <p>{ctx.email}</p>
          </div>
        )}
      </Context.Consumer>
    </>
  )
}

export default UserMenu
