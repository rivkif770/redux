'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { increment, decrement ,reset} from '@/store/counterSlice';
// import  styles  from '@/app/components/comp1.css';

const comp1 = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default comp1;
