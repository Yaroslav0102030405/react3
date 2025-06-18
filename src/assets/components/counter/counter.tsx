// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement} from "../state/counterSlice";
import { incrementAmout, decrementAmout } from "../state/counterSlice";
import { useAppSelector, useAppDispatch } from "./../state/hooks"
import { useState } from "react";
const Counter = () => {
    const [amout, setAmout] = useState<string>(0)
    // const count = useSelector((state) => state.counter.count)
    //  const dispatch = useDispatch()
  const count = useAppSelector((state) => state.counter.count);

    // Використовуємо типізований useAppDispatch
    const dispatch = useAppDispatch();

    const handleChangeIncrement = () => {
dispatch(incrementAmout(parseInt(amout)))
    }

    const handleChanDecrement = () => {
dispatch(decrementAmout(parseInt(amout)))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmout(e.target.value)
    }
    
    return (  <>
    <h2>Счетчик {count}</h2>
    <input type="number" value={amout} onChange={handleChange} />
    {/* <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button> */}
    <button onClick={handleChangeIncrement}>+</button>
    <button onClick={handleChanDecrement}>-</button>
    </>);
}
 
export default Counter;