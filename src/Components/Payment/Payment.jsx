import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { cartcontext } from '../../Context/Cartcontext'

const Payment = () => {

    const [city, setcity] = useState("")
    const [phone, setphone] = useState("")
    const [details, setdetails] = useState("")

  const {cartId,setnumofitems,settotalprice,setproducts} = useContext(cartcontext)

   async function CashPayment()
    {
        const x = {
            shippingAdress:{
               details,
               phone,
               city,

            }
        }

        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,x,{headers:{token:localStorage.getItem("tkn")}})

            setnumofitems(0)
            setproducts([])
            settotalprice(0)

            toast.success(data.status)
            
        } catch (error) {
            toast.error("error cash payment")
            
        }
    }

    async function OnlinePayment() {

        const x = {
            shippingAdress:{
               details,
               phone,
               city,

            }
        }

        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,x,{headers:{token:localStorage.getItem("tkn")}})

            window.open(data.session.url)

            toast.success(data.status)
            
        } catch (error) {
            toast.error("error cash payment")
            
        }
        
    }
  return <section className='py-10'>
    <h2 className='text-center text-3xl font-semibold text-green-600'>Payment{" "}</h2>

    <div className='w-full md:w-[70%] mx-auto'>
        <div>

        <div className="relative z-0 w-full mb-5 group mb-6">
            <input type="text" name="City" id="City" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e)=>setcity(e.target.value)} />
            <label htmlFor="City" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your City</label>
          </div>


        <div className="relative z-0 w-full mb-5 group mb-6">
            <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e)=>setphone(e.target.value)} />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone</label>
          </div>

          <div className="relative z-0 w-full mb-5 group mb-6">
            <input type="text" name="Details" id="Details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "onChange={(e)=>setdetails(e.target.value)} />
            <label htmlFor="Details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Details</label>
          </div>

          <button type='button' onClick={CashPayment} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Cash Payment
          </button>

          <button type='button' onClick={OnlinePayment} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Online Payment
          </button>
        </div>
    </div>
  </section>

}

export default Payment