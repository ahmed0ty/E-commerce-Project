import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { cartcontext } from '../../Context/Cartcontext';

const Brands = () => {
  const { addproductTocart } = useContext(cartcontext);
  const [loadingBrandId, setLoadingBrandId] = useState(null); // لإدارة حالة التحميل الفردية
  const [selectedBrand, setSelectedBrand] = useState(null); // لإدارة الـ brand الذي سيتم عرضه

  async function getAllBrands() {
    try {
      const response = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch brands');
    }
  }

  const { data, isLoading, error } = useQuery("brands", getAllBrands, { enabled: true });

  const handleBrandClick = async (brandId) => {
    setLoadingBrandId(brandId); // تحديد الـ brand الذي يتم تحميل بياناته
    try {
      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`);
      setSelectedBrand(response.data.data); // حفظ بيانات الـ brand المحدد
    } catch (error) {
      toast.error('Failed to load brand details');
    } finally {
      setLoadingBrandId(null); // إنهاء حالة التحميل
    }
  };

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

  if (error) {
    return <div className="text-red-500 text-center">Failed to load brands: {error.message}</div>;
  }

  return (
    <section className='py-8'>
      <div className='w-full md:w-[90%] m-auto'>
        <div className='flex flex-wrap justify-center items-center'>
          {data?.data.map((brand, idx) => (
            <div
            key={idx}
            className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 cursor-pointer'
            onClick={() => handleBrandClick(brand._id)}
          >
            <div className='inner p-3 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-green-600 transition-shadow duration-500'>
              <img src={brand.image} alt={brand.name} className='w-full h-[250px]' />
              <h2 className='mt-3 text-center'>{brand.name}</h2>
              {/* عرض مؤشر التحميل في حال تم النقر على الـ brand */}
              {loadingBrandId === brand._id && (
                <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                  <FallingLines
                    color="#fff"
                    width="50"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                  />
                </div>
              )}
            </div>
          </div>
          ))}
        </div>
      </div>

      {selectedBrand && (
        <div className='fixed top-0 left-0 w-[50%] -translate-x-1/2 left-1/2  p-4 bg-white shadow-lg border-b border-green-600 z-50'>
          <h2 className='text-green-600 text-xl'>Brand Details</h2>
          <div className='flex items-center justify-between '>

            <div>
              <p className='mt-2'><strong>Name:</strong> {selectedBrand.name}</p>
              <p className='mt-2'> {selectedBrand.slug}</p>
            </div>
            <img src={selectedBrand.image} alt={selectedBrand.name} className='w-24 h-24 mr-4' />
          </div>
          <button
            className='mt-4 px-4 py-2 bg-green-600 text-white rounded'
            onClick={() => setSelectedBrand(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default Brands;
