import React, { useState } from 'react'

interface SkillSectionProps {
    title: string
    children?: JSX.Element | JSX.Element[]
}

const SkillSection = ({title, children}: SkillSectionProps) => {

    const [open, setOpen] = useState(false);
  return (
    <>
        <div className={`skill-section ${title.toLowerCase().split(' ').join('')}`} onClick={() => setOpen(!open)}>
            {title}
        </div>
        {open && children}
    </>
  )
}

export default SkillSection