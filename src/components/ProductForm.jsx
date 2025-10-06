import React, { useState } from 'react'

const CATEGORIES = ['Electronics','Books','Clothing']

export default function ProductForm({onAdd}){
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if(!name.trim()) e.name = 'Name is required'
    const p = parseFloat(price)
    if(Number.isNaN(p) || p <= 0) e.price = 'Price must be > 0'
    if(!category) e.category = 'Category required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if(!validate()) return
    setSubmitting(true)
    try{
      await onAdd({name: name.trim(), price: parseFloat(price), category})
      setName(''); setPrice(''); setCategory(CATEGORIES[0])
    }catch(err){
      console.error(err)
    }finally{
      setSubmitting(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <label>
        Name
        <input value={name} onChange={e=>setName(e.target.value)} />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </label>

      <label>
        Price
        <input value={price} onChange={e=>setPrice(e.target.value)} />
        {errors.price && <small className="field-error">{errors.price}</small>}
      </label>

      <label>
        Category
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          {CATEGORIES.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <small className="field-error">{errors.category}</small>}
      </label>

      <button className="btn" disabled={submitting}>{submitting ? 'Adding...' : 'Add Product'}</button>
    </form>
  )
}
