import * as React from 'react'

export const ResetButton = ({reset}: {reset:() => void}) => {
  return <button type='button' className='button' onClick={reset}>Reset</button>
}
