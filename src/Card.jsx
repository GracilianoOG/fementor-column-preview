import './Card.css'

function Card({ icon, title, description, color }) {
  return (
    <div className='card' style={{backgroundColor: color}}>
      <img className='card__icon' src={icon} alt="" />
      <h2 className='card__title'>{ title }</h2>
      <p className='card__description'>{ description }</p>
      <a href="#" className='card__btn' style={{color: color}}>Learn more</a>
    </div>
  )
}

export default Card