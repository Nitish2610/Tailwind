// import pic from './assets/pw.jpg';
// function App() {
//   return (
//     <div className="bg-slate-900 place-content-center min-h-screen grid p-8">
//       <h1 className="text-yellow-500 text-4xl m-6">Test</h1>
//       <div>
//           <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow flex items-center space-x-4'>
//             <div>
//              <img className='h-12 w-12'
//               src={pic}
//               alt='Image not found'
//               />
//           </div>
//           <div>
//             <div className='text-2xl font-medium'>
//               Tailwind Css
//               <p className='text-slate-500 text-base'>tutorial for css</p>
//             </div>
//           </div>
//           </div>
//       </div>

//        <button className='bg-sky-400 text-center mt-2 text-white text-base p-2 rounded-xl
//        hover:bg-white hover:text-black'>Buy Now</button>

//        <div className='text-center my-4'>
//         <p className='text-white md:text-green-500 sm:text-red-500'>hello how are you</p>
//        </div>

//        <div className='mt-3'>
//          <div className='max-w-sm mx-auto rounded-xl bg-white  overflow-hidden md:max-w-2xl'>
//             <div className='md:flex'>
//             <div>
//               <img className='h-48 w-full object-cover md:h-full md:w-48' src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' srcset=''/>
//             </div>
//             <div className='p-8'>
//               <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>An awesome card</div>
//               <a className='block mt-1 text-lg font-medium hover:text-blue-600' href='#'>Tailwind Css is amazing once you understand its power</a>
//               <p className='mt-2 text-slate-500'>By following these steps, you can <span className='bg-yellow-500 p-[2px]'>leverage</span> the utility-first approach of Tailwind CSS along with the
//                 comprehensive.</p>
//             </div>
//             </div>
//          </div>
//        </div>

//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* navbar goes here */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About US</li>
          <li className="mx-[10px] cursor-pointer">Contact US</li>
        </ul>
        <div
          className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded 
       font-bold cursor-pointer"
        >
          Login/Signup
        </div>

        <div class="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* navbar ends here */}

      {/* image section starts here */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
        <img
          className="w-full  md:hidden"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </header>
      {/* image section ends here */}

      {/* our student section */}
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-700 font-extrabold text-2xl md:text-4xl text-center">
            "Pure Hardwork,No Shortcuts!"
          </p>
          <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44 rounded-full"
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=626&ext=jpg&ga=GA1.1.1749252352.1714626897&semt=ais_user"
              alt=""
            />
            <p className="text-3xl font-bold text-white">600+</p>
            <p className="text-3xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44 rounded-full"
              src="https://cdn.vectorstock.com/i/500p/94/43/smiling-graduate-student-flat-icon-vector-2739443.avif"
              alt=""
            />
            <p className="text-3xl font-bold text-white">70000+</p>
            <p className="text-3xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44 rounded-full"
              src="https://cdn-icons-png.freepik.com/256/13971/13971917.png?ga=GA1.1.1749252352.1714626897&semt=ais_hybrid"
              alt=""
            />
            <p className="text-3xl font-bold text-white">10000+</p>
            <p className="text-3xl font-bold text-gray-500">
              Successfull Transactions
            </p>
          </div>
        </div>
      </div>
      {/* Our students section ends here */}

      {/* Our products section */}
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-700 font-extrabold text-2xl md:text-4xl text-center">
            "Our Products"
          </p>
          <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <div className='w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/4727/4727496.png" alt="" />
            <p className='text-2xl font-bold text-white'>PW Skills Lab</p>
            <p className='text-md font-bold text-gray-500'>Super Change Your Project Development with Our Robust Lab.</p>
          </div>

          <div className='w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/3688/3688609.png" alt="" />
            <p className='text-2xl font-bold text-white'>PW Skills Lab</p>
            <p className='text-md font-bold text-gray-500'>Super Change Your Project Development with Our Robust Lab.</p>
          </div>

          <div className='w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/744/744922.png" alt="" />
            <p className='text-2xl font-bold text-white'>PW Skills Lab</p>
            <p className='text-md font-bold text-gray-500'>Super Change Your Project Development with Our Robust Lab.</p>
          </div>

          <div className='w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/7011/7011353.png" alt="" />
            <p className='text-2xl font-bold text-white'>PW Skills Lab</p>
            <p className='text-md font-bold text-gray-500'>Super Change Your Project Development with Our Robust Lab.</p>
          </div>

        </div>
      </div>
       {/* Our Product section ends here */}

       {/* Our footer starts here */}
       <footer className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row 
       flex-wrap justify-between md:px-12'>
           <div>
            <img className='w-30 h-16' src='https://cdn-icons-png.flaticon.com/128/3775/3775431.png' alt=''/>
            <p className='my-4'>Email us:support@pwskills.com</p>
            <img className='w-30 h-14' src='https://cdn-icons-png.flaticon.com/128/4727/4727496.png' alt=''/>
           </div>
           <div>
            <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
             <div>
               <p>About Us</p>
               <p>FAQs</p>
               <p>Privacy Policy</p>
             </div>
           </div>

           <div>
            <h2 className='font-bold text-xl mt-4'>Products</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
             <div>
               <p>PW Skills Lab</p>
               <p>Job Portal</p>
               <p>Experience Portal</p>
               <p>Become an affliate</p>
               <p>Hall of fame</p>
             </div>
           </div>


           <div>
            <h2 className='font-bold text-xl mt-4'>Links</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
             <div>
               <p>Discord Channel</p>
               <p>PW Youtube</p>
               <p>Careers</p>
             </div>
           </div>

       </footer>
        {/* Our footer ends here */}
    </div>
  );
}

export default App;
