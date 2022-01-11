import React from 'react'
import FeatureCard from '../../components/FeatureCard'
import './Features.css'

const Features = () => {
    return (
        <div className='feature-section'>
            <FeatureCard heading="Order Food Online" image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" />
            <FeatureCard heading="Go Out For a Meal" image="https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=" />
            <FeatureCard heading="Nightlife and Clubs" image="https://www.thespiritsbusiness.com/content/uploads/2017/04/nightclub.jpg" />
        </div>
    )
}

export default Features