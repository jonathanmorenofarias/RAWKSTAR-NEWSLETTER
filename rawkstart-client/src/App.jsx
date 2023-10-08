import './App.css'
import Logo from "./images/RawkstarLogo.png"
import October from "./images/october.png"
import Cat from "./images/Catclick.png"

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="flex justify-center items-center gap-[10rem]">
        <a href="https://www.nw-naturals.net/" target="_blank"><img src={Logo} alt="of Rawkstar logo" className='h-[20rem] ' /></a>
        <div className='flex flex-col text-center'>
          <h1 className='text-[4rem]'>YOUR OPINION MATTERS TO US!</h1>
          <p className='text-[2rem]'>Vote so we understand what <span className='font-bold text-[3rem]'>YOU</span> want.</p>
          
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <hr className='w-[80vw] border-black'/>
      </div>

      <div className='flex flex-col gap-[2rem] my-[2rem]'>
        <div className='flex justify-center items-center gap-[.5rem]'>
          <img src={October} alt="" className='h-[5rem]'/>
          <h1 className='text-[3rem]'>POLLS</h1>
        </div>
        <div className='flex justify-center items-center'>
          <div className='shadow-2xl'>
            <div className='flex items-center justify-center py-[1rem] w-[40rem] bg-[#D55E00] border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-lg border-black'>
              <h1 className='text-[2rem]'>HAVE YOU SEEN OUR NEW WEBSITE?</h1>
            </div>
            <form action="" className='flex flex-col justify-center items-center border-[1px] border-black gap-[2rem] py-[2rem] px-[2rem] rounded-b-lg'>
              <button className='w-[100%] px-[2rem] bg-[#D3D3D3] text-[2rem] rounded-lg hover:scale-[102%] duration-300'>YES!</button>
              <button className='w-[100%] bg-[#D3D3D3] text-[2rem] rounded-lg hover:scale-[102%] duration-300'>NO, LOOKING NOW!</button>
            </form>
          </div>  
        </div>
      </div>
      <a href="https://www.nw-naturals.net/" target="_blank"><img src={Cat} alt="" className='h-[10rem] w-auto my-[2rem]' /></a>
    </div>
  )
}

export default App
