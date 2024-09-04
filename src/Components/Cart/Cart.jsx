import React, { useContext } from 'react'
import { cartcontext } from '../../Context/Cartcontext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { products, totalprice, UpdataCount, DeleteItem, ClearCart} = useContext(cartcontext)
    return <section className='py-8'>
        <div className='w-full md:w-[80%] mx-auto bg-slate-200 p-5'>

          {products?.length !=0  ? <>

            <h2 className='text-green-600 text-2xl font-mono'>TotalPrice : {totalprice}</h2>
            <button type="button" onClick={ClearCart} className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Clear Cart</button>
            <Link to="/Payment" className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Payment</Link>
            {products?.map((item, idx) => <>

                <div className='flex flex-wrap justify-center items-center border-b-2 border-green-400'>

                    <div className='w-1/6 p-5'><img src={item.product.imageCover} alt="" className='w-full' /></div>
                    <div className='w-4/6 p-5'>
                        <h2 className='mb-3 text-1xl '>{item.product.title}</h2>
                        <h2 className='mb-3 text-1xl '>{item.price} EGP</h2>
                        {/* <h2 className='mb-3 text-1xl '>{item.product.id} EGP</h2> */}
                        <button type="button" onClick={()=>DeleteItem(item.product.id)} className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Remove</button>
                    </div>
                    <div className='w-1/6 p-5'>


                        <div className='flex justify-between items-center'>
                            <button onClick={()=>UpdataCount(item.product.id,item.count+1)} type="button" className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">+</button>
                            <h2 className='mx-3'>{item.count}</h2>
                            <button onClick={()=>UpdataCount(item.product.id,item.count-1)} type="button" disabled={item.count==0 ? true:false} className={`${item.count==0? "disabled:opacity-75":""}text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800`}>-</button>
                        </div>
                    </div>

                   

                </div>

            </>)}
          
          </>:<div className='py-5 text-center text-green-600'>

            <h2 className='text-3xl font-bold'>NO DATA TO DISPLAY IT </h2>

            </div>}
        </div>
    </section>


}

export default Cart