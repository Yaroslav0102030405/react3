import Counter from "../components/counter/counter";
import { useState, useEffect } from "react";
import Video from "../components/video/video";
interface User {
  id: number;
  name: string;
}


const About = () => {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
const fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        
            const result = await response.json()
        setData(result)
        } catch(error) {
            console.log(error)
        } finally {setLoading(false)}
    }

    fetchData()
    }, [])

    if(loading) {
        return <h1>Загрузка...</h1>
    }

    return ( <>
    <h1>Про нас</h1>
    <Counter />
<ul>
    {data.map((d) => (<li key={d.id}>
    <p>{d.name}</p>
</li>))}
    </ul>
    <Video />
    </> );
}
 
export default About;

// <video tabindex="-1" role="application" id="vjs_video_3_html5_api" poster="https://cdn.pixabay.com/video/2016/04/18/2849-163375551_tiny.jpg" class="vjs-tech" loop="" muted="muted" autoplay="" 
// src="https://cdn.pixabay.com/video/2016/04/18/2849-163375551_large.mp4"></video>