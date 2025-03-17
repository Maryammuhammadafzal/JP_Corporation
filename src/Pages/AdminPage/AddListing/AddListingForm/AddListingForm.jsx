import React from 'react'

const AddListingForm = () => {
  return (
    <div className="w-full flex flex-col mx-auto rounded-md ">
          <div className="flex justify-between items-center p-6 mb-4">
            <h1 className="text-3xl font-bold">Add Details</h1>
          </div>
    <div className="form border w-full h-auto p-3 rounded-md flex gap-5" >
      <form action="" className='p-6 text-sm text-gray-600 w-full h-auto'>
      <div className="w-full">
      <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
      </div>
      <div className="w-full flex justify-between flex-wrap my-3">
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
        <div className="w-[370px] my-3">
        <label htmlFor="title" className='w-full' >
               <p>Listing Title <sup className='text-orange-700'>*</sup></p> <input type="text" id='title' className='mt-2 w-full border rounded-md p-2'/>
        </label>
        </div>
       
        
      </div>

      <div className="w-full">
      <label htmlFor="title" className='w-full' >
               <p>Description </p> <textarea id='description' className='mt-2 w-full h-[250px] border rounded-md p-2'/>
        </label>
     
      </div>
      </form>
    </div>

    <div className="flex justify-between items-center p-6 mb-4">
            <h1 className="text-3xl font-bold">Feature Image</h1>
          </div>

          <div className="imageInpput border text-sm rounded-md w-full h-auto p-15 ">
                <label htmlFor="image">
                Upload Featured Images
                <input type="file" id="image" className="w-full h-[40px] border rounded-md"/>
                </label>
          </div>
          <div className="flex justify-between items-center p-6 mb-4">
            <h1 className="text-3xl font-bold">Feature Image</h1>
          </div>
        </div>
  )
}

export default AddListingForm
