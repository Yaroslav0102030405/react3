import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const BookId = () => {
  // useParams повертає об'єкт, де ключі - це назви параметрів маршруту.
  // Якщо ваш маршрут '/books/:bookId', то params буде { bookId: '...' }
  const params = useParams<{ bookId: string }>(); // Типізуємо useParams
  const userId = params.bookId; // Отримуємо id з параметрів

  // ВИПРАВЛЕНО: Стан для ОДНОГО об'єкта користувача (або null, якщо не знайдено / ще завантажується)
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Стан завантаження
  const [error, setError] = useState<string | null>(null); // Стан помилки

  useEffect(() => {
    // Якщо userId відсутній або не є числом (наприклад, '/books/abc'),
    // можна додати додаткову перевірку
    if (!userId) {
      setError("Невірний ID користувача.");
      setLoading(false);
      return;
    }

    const fetchUser = async () => { // Перейменував на fetchUser для ясності
      setLoading(true); // Починаємо завантаження
      setError(null);   // Скидаємо попередні помилки

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
          // Якщо користувач не знайдений (наприклад, 404 Not Found)
          if (response.status === 404) {
              throw new Error("Користувача з таким ID не знайдено.");
          }
          throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const data: UserData = await response.json(); // ВИПРАВЛЕНО: Очікуємо один об'єкт UserData
        console.log(data);
        setUser(data); // ВИПРАВЛЕНО: Правильне оновлення стану даними з API
      } catch (err) {
        console.error("Помилка при завантаженні користувача:", err);
        if (err instanceof Error) {
            setError(err.message); // Показуємо повідомлення про помилку
        } else {
            setError("Не вдалося завантажити дані користувача.");
        }
      } finally {
        setLoading(false); // Завершуємо завантаження
      }
    };

    fetchUser(); // Запускаємо завантаження даних
  }, [userId]); // Залежність: ефект перезапускається, коли userId змінюється

  // Логіка відображення
  if (loading) {
    return <div>Завантаження інформації про користувача...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Помилка: {error}</div>;
  }

  // Якщо user ще null (наприклад, після завантаження, якщо користувач не знайдений)
  if (!user) {
    return <div>Інформація про користувача не знайдена.</div>;
  }

  return (
    <>
    
      <h1>Деталі користувача {userId}</h1> {/* Використовуйте userId з useParams */}
      <Link to="/books">Повернутися до всіх книг</Link>
      <p>Ім'я: {user.name}</p>
      <p>Ім'я користувача: {user.username}</p>
      <p>Електронна пошта: {user.email}</p>
      {/* Можете додати більше деталей з user об'єкта */}
      <h3>Адреса:</h3>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>
    </>
  );
};

export default BookId;