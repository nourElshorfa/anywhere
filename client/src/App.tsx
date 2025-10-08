
import './App.css'
import { createBrowserRouter  , RouterProvider} from 'react-router-dom'
import Layout from './components/layout.tsx'
import Home from '../src/pages/Home/Home.tsx'
import Dashboard from '../src/pages/Dashboard/Dashboard.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import requireAuth from "./HOC/requireAuth";



function App() {

const ProtectedDashboard = requireAuth(Dashboard);


const router = createBrowserRouter([
  {path : "/" , element : <Layout/> , children : [
    {path: "/home" , element : <Home/> , } , 
    {path: "/dashboard" , element : <ProtectedDashboard/> , } ,
    {path: "/*" , element : <NotFound/>}
    
  ]} , 
])

  return <RouterProvider router={router}>
  
  </RouterProvider>
   
}

export default App
