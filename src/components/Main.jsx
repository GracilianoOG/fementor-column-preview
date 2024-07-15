import iconSedan from '../assets/images/icon-sedans.svg'
import iconSuv from '../assets/images/icon-suvs.svg'
import iconLuxury from '../assets/images/icon-luxury.svg'
import Card from './Card.jsx'
import CardWrapper from './CardWrapper.jsx'

function Main() {
  return (
    <main>
      <h1 className="sr-only">3-column preview card component</h1>
      <CardWrapper>
        <Card 
          icon={iconSedan} 
          title="Sedans" 
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
        <Card 
          icon={iconLuxury} 
          title="Luxury" 
          color="rgb(0, 66, 65)"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
    rental and arrive in style." 
        />
      </CardWrapper>
    </main>
  )
}

export default Main