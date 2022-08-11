import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';


interface SkillSectionProps {
    title: string
    children?: JSX.Element | JSX.Element[]
}

const SkillSection = ({title, children}: SkillSectionProps) => {

    // ${open ? '' : 'closed'} 

    const [open, setOpen] = useState(false);
  return (
    <>
        <div>
            <div className={`skill-section ${open ? '' : 'closed'} ${title.toLowerCase().split(' ').join('')}`} onClick={() => setOpen(!open)}>
                {title}
            </div>
            {children}
        </div>
    </>
  )
}

export default SkillSection