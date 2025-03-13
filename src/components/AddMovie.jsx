import React, { useState } from 'react'

function AddMovie () {
    const [formData,setFormData]=useState({
        title:"",
        director: '',
        genre: '',
        releaseYear: '',
        synopsis: '',
        posterUrl: '',
    });
    
    const handleChange=()=>{
        setFormData((formData)=>({
             ...formData,
            [e.target.name]:e.target.value
          }))
    }

    const handleSubmit=()=>{
      alert("Submitted")
      navigate("/")
    }
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
       <form onSubmit={handleSubmit} className="border-gray-200 border bg-violet-300 shadow-md p-10 w-96 rounded-md">

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Title</h2>
              <input type="text"
              value={formData.title} 
              placeholder=' Enter your name'
              onchange={handleChange}
              required
              className=' w-full mt-1 p-2 mb-4 bg-transparent border border-gray-500 rounded-md' />
           </label>

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Director</h2>
              <input type="text"
              value={formData.director} 
              placeholder=' Enter your name'
              onchange={handleChange}
              required
              className=' w-full mt-1 p-2 mb-4  bg-transparent border border-gray-500 rounded-md' />
           </label>

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Genre</h2>
              <select 
              value={formData.title}
              onchange={handleChange}
              className=' w-full mt-1 p-2 mb-4  bg-transparent border border-gray-500 rounded-md'>

            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
            

        </select>
        </label>

          <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Release Year</h2>
              <input type="number"
              value={formData.releaseYear} 
              placeholder='Eg: 2025'
              onchange={handleChange}
              required
              className=' w-full mt-1  mb-4 p-2 bg-transparent border border-gray-500 rounded-md' />
           </label>  

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Title</h2>
            <textarea type="text"
              value={formData.synopsis} 
              placeholder=' Enter your name'
              onchange={handleChange}
              required
              className=' w-full mt-1  mb-4 p-2 bg-transparent border border-gray-500 rounded-md' >
           </textarea>  
           </label>
           

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>Release Year</h2>
              <input type="number"
              value={formData.releaseYear} 
              placeholder='Eg: 2025'
              onchange={handleChange}
              required
              className=' w-full mt-1 mb-4 p-2 bg-transparent border border-gray-500 rounded-md' />
           </label>  

           <label className='block mb-3'>
              <h2 className='text-gray-900 font-medium'>URL</h2>
              <input type="url"
              value={formData.posterUrl} 
              placeholder='Eg: 2025'
              onchange={handleChange}
              required
              className=' w-full mt-1 mb-6 p-2 bg-transparent border border-gray-500 rounded-md' />
           </label>  

           <button 
                    type="submit" 
                    className="w-full bg-violet-500 mt-2  text-white font-semibold p-2  mb-4 rounded-md hover:bg-violet-800 transition-all"
                >
                    Submit
                </button>              
       </form>
    </div>
  )
}

export default AddMovie
