import { useState, useEffect } from 'react' 

function Admin() {
    const [poll, setPoll] = useState([])
    const [other, setOther] = useState([])
    useEffect(() => {
        fetch("/api/month/october")
        .then(res => res.json())
        .then(data => {
            setPoll(data.vote)
            setOther(data.other)
        })
    }, [])

    const dataPoll = poll.map(x => {
        return (
            <div>
                <h1 className='text-[2rem]'>{x.option}</h1>
                <h1 className='text-[1.5rem]'>{x.amount}</h1>
            </div>
        )
    })

    const otherPoll = other.map(x => {
        return (
            
                <div className='flex items-center p-[2rem] shadow-custom'>
                    <h1 className='text-[1.5rem] break-all'>{x}</h1>
                </div>
        )
    })

    return (
        <div className='px-[3rem] py-[3rem]'>
            {dataPoll}
            <h1 className='text-[2rem] mb-[2rem]'>Other Comments</h1>
            
            <div className='flex flex-col gap-[1rem]'>
                {otherPoll}
            </div>
        </div>
    )
}

export default Admin