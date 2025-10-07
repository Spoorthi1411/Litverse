import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='h-[60vh] w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Litverse, your one-stop online bookstore!</p>
            <p>We started Litverse with a simple idea: to make discovering and buying books easier, faster, and more enjoyable for everyone. Whether you’re a casual reader, a student, or a lifelong bookworm, Litverse is here to connect you with stories that inspire, educate, and entertain.</p>
            <p>Our mission is to bring the joy of reading to people everywhere by offering a wide selection of books across genres, simple navigation, and an effortless shopping experience. At Litverse, you’ll find everything from timeless classics to the latest bestsellers, all just a click away.</p>
            <p>Join us in building a universe of stories. Welcome to Litverse—where every book opens a new world.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
    </div>
  )
}

export default About
