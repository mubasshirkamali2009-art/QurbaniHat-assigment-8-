"use client"
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {


const handleLoginfucn= (e) => {
   e.preventDefault();
   const email = e.target.email.value ;
   const password = e.target.password.value ;
   console.log(email,password)
}





    return (
        <div className='container mx-auto min-h[80vh] flex justify-center items-center'>
            <div className='py-20 px-10 rounded-xl bg-green-800 my-50'>
 <h2 className='text-3xl font-bold mb-6 text-white'>Login your account</h2>
 <form action="" onSubmit={handleLoginfucn} className='space-y-5'>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Email</legend>
  <input name='email' type="email" className="input" placeholder="Your Email" />
  
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Password</legend>
  <input name='password' type="Password" className="input" placeholder="Your Password" />
  
</fieldset>
<button className="btn btn-success mx-auto  w-full">Login</button>
 </form>

 <p className='text-white  p-5'>Dont have an account? <Link href="/register" className='text-red-500 text-2xl ' > Register</Link> </p>

            </div>
        </div>
    );
};

export default LoginPage;