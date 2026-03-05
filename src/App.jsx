import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import ContactUs from './components/ContactUs'

function App() {

  const routerObj = createBrowserRouter([
    {
      path : "",
      element:<RootLayout/>,
      children:[
        {
          path : "",
          element:<Home/>
        },
        {
          path : "product",
          element:<Product/>
        },
        {
          path : "products",
          element:<ProductsList/>
        },
        {
          path : "contactus",
          element:<ContactUs/>
        }
      ]
    },
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App