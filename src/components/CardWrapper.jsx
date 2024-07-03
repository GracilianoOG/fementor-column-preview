import './CardWrapper.css'

function CardWrapper({ children }) {
  return (
    <div className='card-wrapper'>
      <div className='card-wrapper__content'>
        {children}
      </div>
    </div>
  )
}

export default CardWrapper
