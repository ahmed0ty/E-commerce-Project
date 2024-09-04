
import axios from 'axios';
import React, { useContext } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { cartcontext } from '../../Context/Cartcontext';

const Categories = () => {
  const { addproductTocart } = useContext(cartcontext);

  async function getallcategories() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  const { data, isLoading, isFetching, error } = useQuery("categories", getallcategories, { enabled: true });

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
    <section className='py-8'>
      <div className='w-full md:w-[90%] m-auto'>
        <div className='flex flex-wrap justify-center items-center'>
          {data?.data.data.map((category, idx) => (
            <div key={idx} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4'>
              <div className='inner p-3 bg-slate-200'>
                <Link to={`/CategoryDetails/${category._id}`}>
                  <img src={category.image} alt="img" className='w-full h-[250px]' />
                  <h2 className='text-green-600 mt-3'>{category.name}</h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
