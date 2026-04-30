import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Picture from "../../assets/Picture.png"


function Content() {
    return (
        <div className='flex flex-col items-center mx-50 gap-9'>
            <h1 className='font-extrabold text-[50px] text-center mt-16'>
                <span className='text-[#f56551]'>Discover your next adventure with AI</span> <br />
                Personalized itineraries at your fingertips</h1>
            <p className='text-xl text-gray-500'> Your personal trip planner and travel curator, creating custom itineraies tailored to your interests and budget</p>

            <Link to={'/create-trip'}>
                <Button> Get Started </Button>
            </Link>
            <img src={Picture} alt="Project Image" className='h-120 w-400 rounded-xl mb-5' />
        </div>
    )

}

export default Content