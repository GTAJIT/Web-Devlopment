import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMAN</h1>
        <hr/>
        <div className="populer-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular