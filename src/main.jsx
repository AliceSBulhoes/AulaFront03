import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importando os elementos com rotas
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Klein from './routes/Klein.jsx'

// importando o style global
import { GlobalStyle } from './css/GlobalStyle.jsx'

// Criando a variável para criar as rotas
const router = createBrowserRouter([{
  // Rotas Pais
  path: '/',
  element: <App/>,
  errorElement: <Error/>,

  // Rotas Filhos
  children: [
    {path: '/', element: <Home/>},
    {path: '/the-fool', element: <Klein/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uma props que recebe a função que recebe router */}
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
