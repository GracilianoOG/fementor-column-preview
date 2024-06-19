import './App.css'
import iconSedan from './assets/images/icon-sedans.svg'
import iconSuv from './assets/images/icon-suvs.svg'
import Card from './Card.jsx'

function App() {
  return (
    <div>
      <Card 
        icon={iconSedan} 
        title="Sedan" 
        color="rgb(227, 136, 38)"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
    or on your next road trip." 
      />
      <Card 
        icon={iconSuv} 
        title="SUVs" 
        color="rgb(0, 105, 112)"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures." 
      />
    </div>
  )
}

export default App
