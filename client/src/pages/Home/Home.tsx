import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { inc , dec } from "../../Redux/CounterSlice"




const Home = () => {


    
    const {counter} : any =    useSelector(   (store : any)=> {return store.CounterSlice  } )
    
    const dispatch =  useDispatch()
    
    const navigate = useNavigate()
    
    function Login(){
        localStorage.setItem("isLoggedIn" , "true")
        navigate("/dashboard")
        
    }


  

  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Our App {counter}  
      </h1>
      <div className="flex space-x-7 mb-4">

      <button className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-200 cursor-pointer" onClick={()=>dispatch(inc( 5 ))}>+</button>
      <button className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-200 cursor-pointer" onClick={()=>dispatch(dec(5))}>-</button>
      </div>
  

      <p className="text-gray-600 mb-8">
        Please log in to access your dashboard.
      </p>

      <div className="flex gap-4">
        <button onClick={Login} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200">
          Login
        </button>

       
      </div>
    </div>
  )
}

export default Home