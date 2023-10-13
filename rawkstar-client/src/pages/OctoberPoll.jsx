import { useState } from 'react'
import Logo from "../images/RawkstarLogo.png"
import October from "../images/october.png"
import Cat from "../images/Catclick.png"

const OctoberPoll = () => {
    const [looked, setlooked] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        fetch("/api/update/octoberpoll", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    const handleButtons = (value) => {
        if (value === "YES!") {
            setlooked(true)
        } else {
          setlooked(false)
          window.open("https://www.nw-naturals.net/", "_blank")
        }

        const option = {
          options: [value]
        }

        fetch("/api/update/octoberpoll", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(option)
        })
        setSubmitted(true)
    }

    return (
      <div className='flex flex-col items-center justify-center px-[2rem]'>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[10rem]">
          <a href="https://www.nw-naturals.net/" target="_blank"><img src={Logo} alt="of Rawkstar logo" className='md:h-[20rem] h-[80vw]' /></a>
          <div className='flex flex-col text-center'>
            <h1 className='md:text-[4rem] text-[2rem]'>YOUR OPINION MATTERS TO US!</h1>
            <p className='md:text-[2rem] text-[1rem]'>Vote so we understand what <span className='font-bold md:text-[3rem] text-[1.5rem]'>YOU</span> want.</p>
            
          </div>
      </div>

      <div className='flex items-center justify-center'>
        <hr className='w-[80vw] border-black'/>
      </div>

      <div className='flex flex-col gap-[2rem] my-[2rem]'>
        <div className='flex justify-center items-end gap-[.5rem]'>
          <img src={October} alt="" className='md:h-[5rem] h-[2.5rem]'/>
          <h1 className='md:text-[3rem] text-[1rem]'>POLLS</h1>
        </div>

        <div className={`flex justify-center items-center ${looked != null && "hidden"}`}>
          <div className='shadow-lg'>
            <div className='flex items-center justify-center py-[1rem] md:w-[40rem] w-[80vw] bg-[#D55E00] border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-lg border-black'>
              <h1 className='md:text-[2rem] text-center'>HAVE YOU SEEN OUR NEW WEBSITE?</h1>
            </div>
            <div className='flex flex-col justify-center items-center border-[1px] border-black md:gap-[2rem] gap-[1rem] py-[2rem] px-[2rem] rounded-b-lg'>
              <button value="YES!"  onClick={ () => handleButtons("YES!") } className='w-[100%] px-[2rem] bg-[#D3D3D3] md:text-[2rem] rounded-lg hover:scale-[102%] duration-300'>YES!</button>
              <button value="NO, LOOKING NOW!" onClick={ () => handleButtons("NO, LOOKING NOW!") } className='w-[100%] bg-[#D3D3D3] md:text-[2rem] rounded-lg hover:scale-[102%] duration-300'>NO, LOOKING NOW!</button>
            </div>
          </div>  
        </div>

          {
              looked != null && <form  className={`text-[1.5rem] my-[2rem] ${submitted ? "hidden": null}`}>
                <header className='text-center text-[2rem]'>SELECT ALL THAT APPLY</header>  
                <input className='larger' type="checkbox" id="isEasy" />
                <label htmlFor="isEasy">Easy to navigate</label>
                <br />
                <input className='larger' type="checkbox" id="isUseful" />
                <label htmlFor="isUseful">Useful</label>
                <br />
                <input className='larger' type="checkbox" id="isVisual" />
                <label htmlFor="isVisual">Visually Appealing</label>
                <br />
                <input className='larger' type="checkbox" id="isOther" />
                <label htmlFor="isOther">Other</label>
                <br />
                <textarea placeholder="TYPE HERE" name="" id="" cols="30" rows="4" className='border-[1px] border-black p-[.5rem]'></textarea>
                <br />
                <button className='bg-[#D3D3D3] px-[2rem] py-[.5rem] rounded-md'>SUBMIT</button>
              </form>    
          } 
      </div>
      {submitted && <h1 className='text-[2rem]'>Thank You for your Response!</h1>}
      <a href="https://www.nw-naturals.net/" target="_blank"><img src={Cat} alt="" className='md:h-[10rem] h-[5rem] w-auto my-[2rem]' /></a>
    </div>
    ) 
}

export default OctoberPoll