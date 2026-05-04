"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
const {register,
    handleSubmit , formState: {errors} } =useForm()

const handleRegisterfucn=  async(data) => {
console.log(data,'data');
const {email, name , photo , password}=data;



const {data:res ,error} =await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});
console.log(res,error)

}





    return (
        <div className='container mx-auto min-h[80vh] flex justify-center items-center'>
            <div className='py-20 px-10 rounded-xl bg-green-800 my-50'>
 <h2 className='text-3xl font-bold mb-6 text-white'>Register your account</h2>
 <form action="" onSubmit={handleSubmit(handleRegisterfucn)} className='space-y-5'>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Name</legend>
  <input {...register("name" ,  {required: "name field required"})} type="text" className="input" placeholder="Your Name" />
  {errors.name && <p className='text-red-500 
   text-lg'>{errors.name.message}</p> }
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Email</legend>
  <input {...register("email" ,  {required: "email field required"})} type="email" className="input" placeholder="Your Email" />
  {errors.email && <p className='text-red-500 
   text-lg'>{errors.email.message}</p> }
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your photo URL</legend>
  <input {...register("photo" ,  {required: "Photo URL field required"})} type="text" className="input" placeholder="Your photo URL" />
  {errors.photo && <p className='text-red-500 
   text-lg'>{errors.photo.message}</p> }
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Your Password</legend>
  <input {...register("password" , {required: "Password field required"} )} type="Password" className="input" placeholder="Your Password"  />
  {errors.password && <p className='text-red-500 
   text-lg'> {errors.password.message} </p>}
</fieldset>
<button className="btn btn-success mx-auto  w-full">Register</button>
 </form>

 <p className='text-white  p-5'>already have an account   <Link href="/login" className='text-red-500 text-2xl ' > Login</Link> </p>

            </div>
        </div>
    );
};

export default RegisterPage;