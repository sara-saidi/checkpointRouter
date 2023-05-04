import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({products}) => {
  return (
    <div>
     {products.map(prod => <div>
        {prod.name}
       <br></br>
       <br></br>
      <Link to={`/Description/${prod.id}`}
      >  <button>see more</button></Link>
        <hr></hr>
        </div>)} 
    </div>
  )
}

export default ProductList
