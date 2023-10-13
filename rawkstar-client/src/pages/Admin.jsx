import { useState, useEffect } from 'react' 

function Admin() {
    const [poll, setPoll] = useState([])

    useEffect(() => {
        fetch("/api/month/october")
        .then(res => res.json())
        .then(data => setPoll(data))
    }, [])

    const dataPoll = poll.map(x => {
        return (
            <div className='px-[3rem] py-[3rem]'>
                <h1 className='text-[2rem]'>{x.option}</h1>
                <h1 className='text-[2rem]'>{x.amount}</h1>
            </div>
        )
    })

    return (
        <div>
            {dataPoll}
        </div>
    )
}

export default Admin