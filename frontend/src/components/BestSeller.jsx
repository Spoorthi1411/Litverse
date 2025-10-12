import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {

     const{products} = useContext(ShopContext)
     const [bestSeller , setBestseller] = useState([]);

     useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestseller(bestProduct.slice(0,5))
     },[])


  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
         <Title text1={'BESt'} text2 ={'SELLERS'}/>
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
         lorem ipsum
         </p>
        </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                  <ProductItem key = {index} id ={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
          </div>
    </div>
  )
}

export default BestSeller