import { createContext } from "react"

interface UserContext {
    name: string,
    email: string,
    avatar: string
}

const Context = createContext<UserContext>()

export default Context