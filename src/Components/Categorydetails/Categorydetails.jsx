import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { FallingLines } from 'react-loader-spinner';

function CategoryDetails() {
    const { id } = useParams(); 
    const [selectedSubcategory, setSelectedSubcategory] = useState(null); // حالة لحفظ الفئة الفرعية المحددة

    async function getCategory() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    }

    const { data, isLoading } = useQuery(`category${id}`, getCategory);

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory); // حفظ الفئة الفرعية المحددة
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

    return (
        <section className='py-8 flex flex-col justify-center items-center'>
            <div className='w-full md:w-[80%] mx-auto text-center'>
                <div className='flex flex-wrap justify-center items-center'>
                    {data?.data.data.map((subcategory, idx) => (
                        <div 
                            key={idx} 
                            className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4 cursor-pointer'
                            onClick={() => handleSubcategoryClick(subcategory)} // عند النقر على فئة فرعية
                        >
                            <div className='inner p-3 border-2 border-gray-200 hover:shadow-lg hover:shadow-green-500 transition-shadow duration-300'>
                                <h1 className='text-black-600 mt-3 fw-bold'>{subcategory.name}</h1>
                                {/* <p className='text-1xl mb-3'>{subcategory.slug}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedSubcategory && (
                    <div className='mt-8 p-4 border-t-2 border-green-500 w-full'>
                        <h2 className='text-green-600 text-2xl'>Selected Subcategory Details</h2>
                        <p className='mt-2'><strong>Name:</strong> {selectedSubcategory.name}</p>
                        <p className='mt-2'><strong>Slug:</strong> {selectedSubcategory.slug}</p>
                    
                    </div>
                )}
            </div>
        </section>
    );
}

export default CategoryDetails;
