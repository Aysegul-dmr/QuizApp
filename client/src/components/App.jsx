import '../styles/App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom" 
import Main from './Main'
import Quiz from './Quiz'
import Result from './Result'
import { CheckUserExist } from '../helper/helper'
import AllResults from './AllResults'
CheckUserExist

const router= createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/quiz",
    element: <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path:"/result",
    element:<CheckUserExist><Result/></CheckUserExist>
  },
  {
    path:"/all-results",
    element:<AllResults/>
  }
  
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
