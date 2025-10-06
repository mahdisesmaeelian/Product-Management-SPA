import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products, onDelete}){
  if(products.length === 0) return <div className="info">No products found.</div>
  return (
    <div className="grid">
      {products.map(p=>(
        <ProductCard key={p.id} product={p} onDelete={onDelete}/>
      ))}
    </div>
  )
}
