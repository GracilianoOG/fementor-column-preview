import { useState } from 'react'
import './Card.css'

function Card({ icon, title, description, color }) {
  const [isHover, setIsHover] = useState(false)

  const btnNormal = {
    backgroundColor: 'rgb(242, 242, 242)',
    color: color
  }

  const btnHover = {
    backgroundColor: 'transparent',
    color: 'rgb(242, 242, 242)'
  }

  return (
    <article className='card' style={{backgroundColor: color}}>
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