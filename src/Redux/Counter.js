import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './BookReducer'

const Counter=()=>
{
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <p>{count}</p> 
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      )
}
export default Counter