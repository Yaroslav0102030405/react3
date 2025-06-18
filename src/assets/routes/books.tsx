import { useState, useEffect } from 'react'
import { Link } from 'react-router'

interface Book {
  id: number
  name: string
}
const Books = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        await fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setBooks(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  }, [])

  return (
    <>
      <h1>Всі книги</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {/* <h3>{name}</h3> */}
            <Link to={`/books/${book.id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Books
