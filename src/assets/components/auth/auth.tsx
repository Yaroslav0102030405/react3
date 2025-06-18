import { createContext } from 'react'

interface User {
  name: string
  email: string
  avatar: string
}

// const Context = createContext<UserContext>()
const Context = createContext<User | null>(null)

export default Context
