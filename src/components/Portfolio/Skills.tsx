import React from 'react'
import FadeInSection from '../FadeInSection'
import SkillSection from './SkillSection'
import SkillsList from './SkillsList'
import { FaReact, FaSass, FaBootstrap } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiRedux, SiTailwindcss } from 'react-icons/si'
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'

const Skills = () => {
  return (
    <FadeInSection>
        <div className='skills-container'>
            <SkillSection title='Front End'>
                <SkillsList>
                    <div className='skill-item js'>
                        <SiJavascript size={70} fill='#f7df1e'/>
                        <div className='skill-item-text'>JavaScript</div>
                    </div>
                    <div className='skill-item js'>
                        <SiTypescript size={70} fill='#3178C6'/>
                        <div className='skill-item-text'>TypeScript</div>
                    </div>
                    <div className='skill-item'>
                        <FaReact size={70} fill='#61DBFB' />
                        <div className='skill-item-text'>React</div>
                    </div>
                    <div className='skill-item js'>
                        <SiRedux size={70} fill='#764abc'/>
                        <div className='skill-item-text'>Redux</div>
                    </div>
                    <div className='skill-item js'>
                        <SiTailwindcss size={70} fill='#38BDF8'/>
                        <div className='skill-item-text'>Tailwind</div>
                    </div>
                    <div className='skill-item js'>
                        <FaSass size={70} fill='#c69'/>
                        <div className='skill-item-text'>Sass</div>
                    </div>
                    <div className='skill-item js'>
                        <FaBootstrap size={70} fill='#563d7c'/>
                        <div className='skill-item-text'>Bootstrap</div>
                    </div>
                    <div className='skill-item'>
                        <IoLogoHtml5 size={70} fill='#E44D26'/>
                        <div className='skill-item-text'>HTML5</div>
                    </div>
                    <div className='skill-item'>
                        <IoLogoCss3 size={70} fill='#264de4'/>
                        <div className='skill-item-text'>CSS3</div>
                    </div>
                </SkillsList>
            </SkillSection>
            <SkillSection title='Tools' />
            <SkillSection title='Back End' />
        </div>
    </FadeInSection>
  )
}

export default Skills