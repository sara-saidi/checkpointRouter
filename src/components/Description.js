import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({products}) => {
    const params=useParams()
 
    const prod=products.find(e=>e.id==params.id)
    console.log(prod)
  return (
    <div>
  {prod.descreption}
    </div>
  )
}

export default Description
