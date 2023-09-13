import React from 'react'
import ReactDOM from 'react-dom'

/*
Heading
- Logo
- Nav items

Body
- search
- Restaurant List

Footer
- Copy right
- Social links
*/

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img 
                className='logo'
                src='https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=1480&t=st=1694236188~exp=1694236788~hmac=b82c21b9f4960ff24292d739f738c42601eadde8972a0fa25507f0a026ba8f62'
                />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    return (
        <div className='restaurantCard' style={styleCard}>
            <img 
            className='restaurantLogo'
            src='https://b.zmtcdn.com/data/pictures/chains/5/785/7fc715bc6f2648b08b3a5a3921afb013.jpg?fit=around|750:500&crop=750:500;*,*'
            />
            <h3>{props.name}</h3>
            <h4>{props.category}</h4>
            <h4>100 for one</h4>
            <h4>30 min</h4>
            <h4>3.8*</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='searchContainer'>

            </div>

            <div className='restaurantContainer'>
                <RestaurantCard
                name = "Costa Coffee"
                category = "Cafe, Coffee, Beverages, Sandwich, Fast Food, Desserts"
                />
                <RestaurantCard
                name = "KFC"
                category = "Fast food"
                />
                
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)