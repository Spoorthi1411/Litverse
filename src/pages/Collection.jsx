import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext'
const Collection = () => {

    const { products } = useContext(ShopContext);
    const [showFilter,setShowFilter] = useState(false);
    const [filterProducts,setfilterProducts]

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        
        // filter options
        <div className='min-w-60'>
            <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
            </p>

            // category Filter 
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Romance'}/> Romance
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Fantasy'}/> Fantasy
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Mystery'}/> Mystery
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Science Fiction'}/> Science Fiction
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Horror'}/> Horror
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Manga'}/> Manga
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Comedy'}/> Comedy
                    </p>
                </div>
            </div>
            // subcategory filter
            <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Price'}/> Price
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Languages'}/> Languages
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Format'}/> Format
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-3' type="checkbox" value={'Delivery Day'}/> Delivery Day
                    </p>
                </div>
            </div>
        </div>
        // Right side
        <div className='flex-1'>

            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1 = {'ALL'} text2 = {'COLLECTIONS'} />
                //  Product sort
                <select className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relavent">Sort by: Relavent</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>

            // Map products 
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                
            </div>

        </div>
    </div>
  )
}

export default Collection