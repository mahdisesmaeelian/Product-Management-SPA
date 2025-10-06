// Choose base API depending on environment
// In development → localhost
// In production (Vercel/Netlify) → MockAPI
const BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://68e363f58e14f4523dad354d.mockapi.io/id"; // ⬅️ replace with your MockAPI URL

// Get all products
export async function getProducts() {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

// Add new product
export async function addProduct(product) {
  const res = await fetch(`${BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create");
  return res.json();
}

// Delete product
export async function deleteProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete");
  return true;
}
