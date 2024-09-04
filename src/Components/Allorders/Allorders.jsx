import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { FallingLines } from 'react-loader-spinner'

const Allorders = () => {

   const {id} = jwtDecode(localStorage.getItem("tkn"))

   const [load,setload] = useState(false)
   const [allorder,setallorder] = useState(null)

  async function getallorder()
   {
    setload(true)
    try {
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
        console.log(data);
        setallorder(data)
        setload(false)
        
        
    } catch (error) {

        console.log(error);
        setload(false)
        
        
    }


   }

   useEffect(()=>{
    getallorder()
   },[])

   if(load)
    {
      return    <div className='h-screen flex flex-wrap justify-center items-center bg-green-400'>
      <FallingLines
        color="#fff"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
    }


  return <section className='py-10'>
    <div className='w-full md:w-[80%] mx-auto'>

        <div>

            {
                allorder? allorder.map((order,idx)=><div key={idx}>

                    <div className='p-5 mb-3 bg-slate-200'>
                        <div className='flex flex-wrap justify-center items-center'>
                          {order.cartItems?.map(function(item,idx){return <div key={idx} className='w-1/6'>

                          <img src={item.product.imageCover} className='w-full' alt="" />

                          </div>})}
                        </div>
                        <h2>total order price {order.totalOrderPrice} EGP</h2>
                        <h2>payment method type {order.paymentMethodType} </h2>
                    </div>
                </div>):""
            }
        </div>

    </div>
  </section>
    
  
}



export default Allorders