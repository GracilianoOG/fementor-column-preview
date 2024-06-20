import './CardWrapper.css'

function CardWrapper({ children }) {
  return (
    <div className='card-wrapper'>
      {children}
    </div>
  )
}

export default CardWrapper
