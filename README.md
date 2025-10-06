# Product Management Panel

A simplified single-page React application for managing products using a mock backend (json-server).

## Features
- List products (Name, Price, Category)
- Add product with validation
- Delete product
- Responsive layout
- Simple CSS animations for add/delete
- Uses React Hooks and Fetch API

## How to run locally

1. Make sure you have Node.js (>= 16) and npm installed.

2. Install dependencies:
```bash
npm install
```

3. Run the mock backend and the dev server concurrently:
```bash
npm run start
```
This runs:
- json-server on http://localhost:4000 (API endpoints: GET/POST/DELETE `/products`)
- Vite dev server on http://localhost:5173

Alternatively, you can run servers separately:
```bash
npm run server   # json-server on port 4000
npm run dev      # vite dev server
```

4. Open http://localhost:5173 in your browser.

## Design decisions & assumptions
- I used `json-server` for a local mock backend to support `/products` endpoints required.
- Fetch API is used for API calls with basic error handling and loading states.
- Styling is plain CSS in `src/styles.css` to keep things simple and framework-free.
- Basic form validation: name required, price > 0, category required.
- Simple animation using CSS transitions for adding/removing items.

## Deploying
- For deployment, you can run `npm run build` and serve the `dist` folder. Note: json-server is for local development only. For a hosted API, point `src/api.js` to the hosted API base URL.
