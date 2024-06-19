import './App.css'
import iconSedan from './assets/images/icon-sedans.svg'
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
    </div>
  )
}

export default App
