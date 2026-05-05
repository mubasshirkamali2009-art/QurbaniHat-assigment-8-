"use client"


import { toast ,ToastContainer } from 'react-toastify';
const BookingForm = () => {
  const resetHandle =(e)=>{
    e.preventDefault()
     toast("Booking Successful!")
    const form = e.target;
form.reset()
   

  }
    return (
        <div>
           
  <div className="bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-6">
    <p className="text-[10px] tracking-[3px] uppercase text-amber-500/70 font-semibold mb-5">
      Booking Details
    </p>
    <div className="space-y-4">
      <form onSubmit={resetHandle} className="space-y-4" action="">
        <input required className="border-2 border-amber-500 rounded-2xl text-black bg-amber-50 px-3 py-1"  type="text" name="" id="" placeholder="your Name" />
        <input required type="email" name="" id=" " placeholder="Your email" className="border-2 border-amber-500 rounded-2xl text-black bg-amber-50 px-3 py-1" />
        <input required type="phone" name="" id="" placeholder="Your phone number " className="border-2 border-amber-500 rounded-2xl text-black bg-amber-50 px-3 py-1" />
        <input required type="address" name="" id="" placeholder="Your address" className="border-2 border-amber-500 rounded-2xl text-black bg-amber-50 px-3 py-1" />
         <button   className="w-full mt-5 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061409] hover:shadow-[0_8px_30px_rgba(200,160,58,0.35)] hover:-translate-y-0.5 active:scale-95">
      Confirm Booking
    </button>
      </form>
     
    </div>
   
  </div>
<ToastContainer/>
        </div>
    );
};

export default BookingForm;