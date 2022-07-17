import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom';

interface MediumProps {
  type: string;
}


const Medium: FC<MediumProps> = ({type}) => {
  let navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/reviews/${type}`)
  }

  return (
    <div className={`medium ${type} grid-item`} onClick={handleClick} >
      <h2>
      {type.toUpperCase()}
      </h2>
    </div>
  )
}

export default Medium