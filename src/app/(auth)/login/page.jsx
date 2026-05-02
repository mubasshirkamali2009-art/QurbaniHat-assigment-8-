"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
const {register,
    handleSubmit , formState: {errors} } =useForm()

const handleLoginfucn= (data) => {
console.log(data,'data');
}


console.log(errors,"errors")


    return (
        <div className='container mx-auto min-h[80vh] flex justify-center items-center'>
            <div className='py-20 px-10 rounded-xl bg-green-800 my-50'>
 <h2 className='text-3xl font-bold mb-6 text-white'>Login your account</h2>
 <form action="" onSubmit={handleSubmit(handleLoginfucn)} className='space-y-5'>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Email</legend>
  <input {...register("email" ,  {required: "email field requard"})} type="email" className="input" placeholder="Your Email" />
  {errors.email && <p className='text-red-500 
   text-lg'>{errors.email.message}</p> }
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Password</legend>
  <input {...register("password" , {required: "Password field requard"} )} type="Password" className="input" placeholder="Your Password"  />
  {errors.password && <p className='text-red-500 
   text-lg'> {errors.password.message} </p>}
</fieldset>
<button className="btn btn-success mx-auto  w-full">Login</button>
 </form>

 <p className='text-white  p-5'>Dont have an account? <Link href="/register" className='text-red-500 text-2xl ' > Register</Link> </p>

            </div>
        </div>
    );
};

export default LoginPage;