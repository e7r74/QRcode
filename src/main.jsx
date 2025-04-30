import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { QrCodeGenerator } from './components/Generator/QrCodeGenerator'
import { QrCodeScanner } from './components/Scan/QrCodeScanner'
import { Navigation } from './components/Navigation/Navigation'
import { Layout } from './Layout'
// import { Layout } from './Layout'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigation />,
//   },
//   {
//     path: '/generate',
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: '/scan',
//     element: <QrCodeScanner />,
//   },
// ])
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
