import React, { useEffect, useState } from 'react'
import { getProducts, addProduct, deleteProduct } from './api'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

export default function App(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try{
      const data = await getProducts()
      setProducts(data)
    }catch(e){
      setError('Failed to load products.')
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{ fetchProducts() },[])

  const handleAdd = async (product) => {
    try{
      const created = await addProduct(product)
      setProducts(prev => [...prev, created])
    }catch(e){
      alert('Failed to add product')
    }
  }

  const handleDelete = async (id) => {
    if(!confirm('Are you sure you want to delete this product?')) return
    try{
      await deleteProduct(id)
      setProducts(prev => prev.filter(p => p.id !== id))
    }catch(e){
      alert('Failed to delete product')
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Product Management Panel</h1>
      </header>

      <main>
        <section className="left">
          <ProductForm onAdd={handleAdd} />
        </section>
        <section className="right">
          {loading && <div className="info">Loading products...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && !error && (
            <ProductList products={products} onDelete={handleDelete} />
          )}
        </section>
      </main>

      <footer>
        <small>Local mock API: json-server @ http://localhost:4000</small>
      </footer>
    </div>
  )
}
