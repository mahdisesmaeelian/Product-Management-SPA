import React, { useState } from 'react'

export default function ProductCard({product, onDelete}){
  const [removing, setRemoving] = useState(false)

  const handleDelete = async () => {
    setRemoving(true)
    await onDelete(product.id)
    // no need to setRemoving(false) as component likely unmounts
  }

  return (
    <div className={`card ${removing ? 'removing' : ''}`}>
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="category">{product.category}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  )
}
