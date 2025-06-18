import { useRef, useState } from "react";
const Video = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

   const handlePlayPause = () => {
  // 2. Перевірка на null перед використанням
  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(isPlaying);
    }
  }
};
    
    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
  // 3. Перевірка на null перед використанням
  if (videoRef.current) {
    videoRef.current.volume = parseFloat(e.target.value);
  }
};

    return ( <>
    <video ref={videoRef} width="400" controls>
        <source  src="https://cdn.pixabay.com/video/2016/04/18/2849-163375551_large.mp4" type="video/mp4"/>
    </video>
    <button onClick={handlePlayPause} type="button">Play</button>
    <input type="range" min="0" max="1" step="0.1" defaultValue="0.5" onChange={handleVolume} />
    </> );
}
 
export default Video;