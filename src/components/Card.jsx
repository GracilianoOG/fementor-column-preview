import { useState } from 'react'
import './Card.css'

function Card({ icon, title, description, color: customColor }) {
  const [isHover, setIsHover] = useState(false)
  const BG_COLOR = 'var(--color-light-gray)'

  const btnNormal = {
    backgroundColor: BG_COLOR,
    color: customColor
  }

  const btnHover = {
    backgroundColor: 'transparent',
    color: BG_COLOR
  }

  return (
    <article className='card' style={{backgroundColor: customColor}}>
      <img className='card__icon' src={icon} alt="" />
      <h2 className='card__title'>{ title }</h2>
      <p className='card__description'>{ description }</p>
      <a 
        href="#" 
        className='card__btn' 
        style={!isHover ? {...btnNormal} : {...btnHover}}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >Learn more</a>
    </article>
  )
}

export default Card