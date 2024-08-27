# Dependencias

- Router Dom: ```npm install react-router-dom```

# Router Dom

1. ```import { createBrowserRouter, RouterProvider } from 'react-router-dom'```
2. Criar uma varável que tenha o ```createBrowserRouter([{}])```
3. Criar a rota dos elementos pais, exemplo: ```path: '/', element: <App/>, elementError: <Error/>```
4. Criar a rota dos elementos filhos: ```children: []```
   - Criando rotas: ```{path: '/', element: <Home/> }```
5. Criar o RouterProvider com o props da variável que criamos!
