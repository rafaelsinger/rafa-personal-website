import React, {FC} from 'react'

interface Medium {
  type: string;
}

const handleClick = (): void => {
  // build redirect w/ react router
}

const Medium: FC<Medium> = ({type}) => {
  return (
    <div className={`medium ${type} grid-item`} onClick={handleClick} >
      <h2>
      {type.toUpperCase()}
      </h2>
    </div>
  )
}

export default Medium