import React from 'react'

interface SkillsListProps {
    children: JSX.Element | JSX.Element[]
}

const SkillsList = ({children}: SkillsListProps) => {
  return (
    <div className='skills-list'>
        {children}
    </div>
  )
}

export default SkillsList