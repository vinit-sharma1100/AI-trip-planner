import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { GetPlaceImage } from '@/service/GlobalApi.jsx';

function PlaceCardItem({ place, trip }) {

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {

        if (place?.place_name && !imageUrl) {
            GetPlacePhoto();
        }

    }, [place]);



    const GetPlacePhoto = async () => {

        const placeName =
            place?.place_name;

        const location =
            trip?.userSelection?.location;

        if (!placeName) return;

        // ⭐ Dynamic query (Correct fix)
        const image =
            await GetPlaceImage(
                `${placeName} ${location}`
            );

        if (image) {
            setImageUrl(image);
        }

    };



    return (

        <Link
            to={'https://www.google.com/maps/search/?api=1&query=' + place?.place_name}
            target='_blank'
            className='no-underline text-black!'
        >

            <div className='border rounded-xl p-3 mt-2 flex gap-3 hover:scale-105 transition-all cursor-pointer hover:shadow-md'>

                <img
                    src={imageUrl || "/placeholder.jpg"}
                    className='w-32 h-32 rounded-xl object-cover'
                />

                <div>

                    <h2 className='font-bold text-lg'>
                        {place.place_name}
                    </h2>

                    <p className='text-sm text-gray-400'>
                        {place.place_details || place.description || place.overview || place.details}
                    </p>

                    <h2 className='mt-2'>
                        🕙 {place.time_to_visit || place.duration_of_stay || place.best_time_to_visit || place.travel_time || place.suggested_duration || place.suggested_time_duration || place.time_travel_duration || place.time_to_spend || "Enjoy based on time availability"}
                    </h2>

                </div>

            </div>

        </Link>
    )
}

export default PlaceCardItem