import './App.css'
import icon from './assets/images/icon-sedans.svg'

function App() {
  return (
    <div>
      <div className='card'>
        <img src={icon} alt="" />
        <h2 className='card__title'>Sedans</h2>
        <p className='card_description'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.</p>
        <a href="#" className='card_btn'>Learn more</a>
      </div>
    </div>
  )
}

export default App
