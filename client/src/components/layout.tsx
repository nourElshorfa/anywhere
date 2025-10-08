
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const Layout = () => {


  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem("isLoggedIn") === "true"){
      navigate("/dashboard")
    }
  }, [])

  return   <>
  
      <Outlet/>
  
  </>
}

export default Layout;
