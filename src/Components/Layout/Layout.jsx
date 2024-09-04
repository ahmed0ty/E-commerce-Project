import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Layout = () => {
  return (
   <>
   <Navbar/>

   <Outlet/>
   <div className='p-5 text-white bg-slate-950'>
    <h2 className='text-4xl text-center'>Footer</h2>
   </div>
   </>
  )
}

export default Layout