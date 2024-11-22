import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, thruthy, handleMenu } from './Store';

const TestingStore = () => {
  // Use the Redux `useDispatch` hook to get the dispatch function
  const dispatch = useDispatch();
  
  // Access the current state value using the `useSelector` hook
  const counter = useSelector((state) => state.counter.value);
  const ballState = useSelector((state) => state.counter.ball);
  const menuToggle = useSelector((state) => state.counter.menuToggle);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Counter:  {ballState ? 'True' : 'False'}</h1>
      <h1>menu:  {menuToggle ? 'True' : 'False'}</h1>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(thruthy())}>truth</button>
      <button onClick={() => dispatch(handleMenu())}>menu</button>
    </div>
  );
};

export default TestingStore;
