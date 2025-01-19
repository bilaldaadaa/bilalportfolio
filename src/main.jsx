import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Page/Root.jsx'
import SallaStore from './Page/SallaStore.jsx'
import Flora from './Page/Flora.jsx'
import MainPage from './Page/MainPage.jsx'

const root = createBrowserRouter([{
  path: '/bilalportfolio/',
  element: <Root />,
  children: [{
    path: '',
    element: <MainPage />
  }, {
    path: "sallastore",
    element: <SallaStore />
  },
  {
    path: "flora",
    element: <Flora />
  }
  ]

}])




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={root} />

  </StrictMode>,
)
