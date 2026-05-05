"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGooglePlus } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
const LoginPage = () => {
const {register,
    handleSubmit , formState: {errors} } =useForm()

const handleLoginfucn= async (data) => {
console.log(data,'data');

const { data:res , error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password , // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res , error);
if(error){
 toast.error(error.message)
}
if(res){
  toast.success('Login Successfull')}

}
const handleGoogleLogin= async()=>{
  await authClient.singin.social({
    provider: "google",
  });
}

console.log(errors,"errors")


    return (
        <div className='container mx-auto min-h[80vh] flex flex-col justify-center items-center'>
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
   <div className='bg-base-300 px-6 sm:px-10 md:px-16 lg:px-30 space-y-6 py-10 items-center rounded-2xl mb-50 w-full sm:w-auto'>
  <h1 className='text-black mx-auto text-center text-2xl sm:text-3xl md:text-4xl'>Login with</h1>
  <div className='flex justify-center'>
    <button onClick={handleGoogleLogin} className='flex justify-center items-center gap-3 sm:gap-5 text-lg sm:text-xl md:text-2xl bg-blue-300 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl w-full sm:w-auto'>
      <FaGooglePlus /> Continue with Google
    </button>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default LoginPage;