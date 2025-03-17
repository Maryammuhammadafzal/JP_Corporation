import React from 'react'
import Button from '../Button/Button'

const ContactForm = () => {
  return (
    <div className='w-auto bg-gray-200 h-[450px] max-[450px]:h-[500px] rounded-2xl shadow-xs justify-center flex'>
        <form action="" className='flex w-[80%]  max-[1000px]:w-[90%] gap-3 flex-col justify-center items-center'>
<div className="inputs max-[900px]:flex-col w-full gap-1 max-[900px]:gap-2 flex h-auto">
        <input type="text" placeholder="Name" className="w-[32%] max-[1000px]:w-[33%] max-[900px]:w-full rounded-lg border-gray-200 border shadow-xs h-12 p-3 bg-white outline-0 active:border-0 active:outline-0 focus:border-0 focus:outline-0 "/>
        <input type="email" placeholder="Email" className="w-[32%] max-[1000px]:w-[33%] max-[900px]:w-full rounded-lg border-gray-200 border shadow-xs h-12 p-3 bg-white outline-0 active:border-0 active:outline-0 focus:border-0 focus:outline-0 "/>
        <input type="number" placeholder="Number" className="w-[32%] max-[1000px]:w-[33%] max-[900px]:w-full rounded-lg border-gray-200 border shadow-xs h-12 p-3 bg-white outline-0 active:border-0 active:outline-0 focus:border-0 focus:outline-0 "/>
</div>
<div className="message w-full">
        <textarea name="message" id="message" placeholder='Message' className='w-full h-[170px] rounded-lg border-gray-200 border shadow-xs  p-3 bg-white outline-0 active:border-0 active:outline-0 focus:border-0 focus:outline-0'></textarea>
</div>
<div className='flex w-full max-[450px]:flex-col max-[450px]:gap-5 items-center'>
<div className="check w-[80%] gap-3 text-md max-[950px]:text-sm max-[360px]:text-xs max-[450px]:w-full flex">
        <input type="checkbox" name="check" id="check" className='border-gray-100  border rounded-lg' />
        I accept the privacy policy
</div>
<div className="button w-[200px] max-[450px]:w-full flex justify-end">
<Button text="Send"/>
</div>
</div>
        </form>
      
    </div>
  )
}

export default ContactForm
