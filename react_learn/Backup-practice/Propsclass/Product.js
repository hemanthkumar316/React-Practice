import React from 'react'
import Cart from './Cart'
class Product extends React.Component{
    Product_name="DELL Laptop"
    Product_image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6HE0mO3OAv83SJyC2goek-6GIJdG9mZR2RN3G6zzIBB1TPBazU5AIZ61Y62bX5ZalBzY7wsI&usqp=CAc"
    price='450000'
    colour=['Gold','Black','Silver']
    render(){
        return(
            <div>
                <h1>Product Component</h1>
                <hr/>
                <Cart name={this.Product_name}
                img={this.Product_image}
                price={this.price}
                colour={this.colour}
                />
            </div>
        )
    }
}
export default Product