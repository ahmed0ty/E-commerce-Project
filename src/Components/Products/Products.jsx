import axios from 'axios';
import React, { useContext } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import Homeslider from '../Homeslider/Homeslider';
import Categoryslider from '../Categoryslider/Categoryslider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { cartcontext } from '../../Context/Cartcontext';

const Products = () => {
  const { addproductTocart } = useContext(cartcontext);

  async function getallproducts() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { data, isLoading } = useQuery("products", getallproducts, { enabled: true });

  async function addproduct(id) {
    const data = await addproductTocart(id);
    if (data) {
      toast.success(data.message);
    } else {
      toast.error("error");
    }
  }

  if (isLoading) {
    return (
      <div className='h-screen flex flex-wrap justify-center items-center bg-green-400'>
        <FallingLines
          color="#fff"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }

  return (
    <>
      {/* تم إخفاء زر "Get Products" عن طريق إزالة الكود الذي يعرض الزر */}
      
      <section className='py-8'>
        <div className='w-full md:w-[90%] m-auto'>
          <Homeslider />
          <Categoryslider />
          <div className='flex flex-wrap justify-center items-center'>
            {data?.data.data.map((product, idx) => (
              <div key={idx} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4'>
                <div className='inner p-3 bg-slate-200'>
                  <Link to={`Productdetails/${product.id}`}>
                    <img src={product.imageCover} alt="img" className='w-full' />
                    <h2 className='text-green-600 mt-3'>{product.category.name}</h2>
                    <h2 className=' mt-3'>{product.title.split(" ").slice(0, 2).join(" ")}</h2>
                    <div className='flex flex-wrap justify-between items-center mt-3'>
                      <div>
                        <h4>{product.price} EGP</h4>
                      </div>
                      <div>
                        <h4><i className='fa-solid fa-star text-yellow-400 mr-2'></i>{product.ratingsAverage}</h4>
                      </div>
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => addproduct(product.id)}
                    className="w-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
