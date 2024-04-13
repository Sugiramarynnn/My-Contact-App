import React from 'react'

const Homepage = () => {
  return (
    <div className="mb-24">
      <div className="flex justify-around mt-8 ">
        <h2 className='bg-slate-600'>Your Contacts</h2>
        <button className="bg-slate-600">
          <a href="/Addnewcontact">Add New Contact</a>
        </button>
      </div>
      <div>
        <a href="./Update">
          <div className="flex gap-10 mt-4">
            <p> 1. sugira</p>
            <br />
            <p>sugi@gmail.com</p>
            <br />
            <p>+250783059629</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Homepage
