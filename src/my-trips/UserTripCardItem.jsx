import { GetPlaceImage } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {

        // Sirf tab run karo jab location available ho
        if (trip?.userSelection?.location) {
            GetPlacePhoto();
        }

    }, [trip]);



    const GetPlacePhoto = async () => {

        const location =
            trip?.userSelection?.location;

        if (!location) return;

        // City extract
        const city =
            location.split(",")[0];

        const image =
            await GetPlaceImage(city);

        if (image) {
            setImageUrl(image);
        }
    };
    return (
        <Link to={'/view-trip/' + trip.id}>
            <div className=' hover:scale-105 transition-all cursor-pointer no-underline text-black!'>
                <img src={imageUrl || "/placeholder.jpg"} className=' w-70 h-70 object-cover rounded-xl' />
                <div>
                    <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
                    <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripCardItem