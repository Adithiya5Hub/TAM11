import React from 'react'


const Footer = () => {
  return (
    <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
      
      <footer className=" flex flex-col space-y-10 justify-center m-10">



<div className="flex justify-center space-x-5">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tamv112024@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png" className='h-7 w-7 hover:scale-125' />
    </a>
    <a href="https://www.instagram.com/smec.tam?igsh=MXdyMHNubnV5dWNnMg==" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" className='h-7 w-7 hover:scale-125' />
    </a>
    <a href="https://forms.gle/AahAmRswoEduns928" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/2991/2991110.png" className='h-7 w-7 hover:scale-125' />
    </a>
    <br />
    <div className='flex flex-col gap-12 text-white justify-between '>
    <a href="/TermsAndConditions">Terms and Conditions</a>
    </div>
    
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2025 TAM Ltd. All rights reservered.</p>
</footer>
    </div>
  )
}

export default Footer
