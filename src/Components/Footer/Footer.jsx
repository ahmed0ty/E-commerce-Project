import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Footer() {











    return (
        <>

            <footer className="bg-white rounded-lg shadow dark:bg-gray-900  w-full fixed bottom-0 h-[10%]">

                <div className="w-full container mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{ color: "#166534", }} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <span className=" me-4 md:me-6">About</span>
                            </li>
                            <li>
                                <span className=" me-4 md:me-6">Privacy Policy</span>
                            </li>
                            <li>
                                <span className=" me-4 md:me-6">Licensing</span>
                            </li>
                            <li>
                                <span className="">Contact</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer
