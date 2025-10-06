const BASE = 'http://localhost:4000'

export async function getProducts(){
  const res = await fetch(`${BASE}/products`)
  if(!res.ok) throw new Error('Network error')
  return res.json()
}

export async function addProduct(product){
  const res = await fetch(`${BASE}/products`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(product)
  })
  if(!res.ok) throw new Error('Failed to create')
  return res.json()
}

export async function deleteProduct(id){
  const res = await fetch(`${BASE}/products/${id}`, { method: 'DELETE' })
  if(!res.ok) throw new Error('Failed to delete')
  return true
}
