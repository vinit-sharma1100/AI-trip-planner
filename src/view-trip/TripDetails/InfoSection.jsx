import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { GetPlaceImage } from '@/service/GlobalApi.jsx';

function InfoSection({ trip }) {

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
        <div>

            {/* Image */}
            <img
                src={imageUrl || "/placeholder.jpg"}
                className="w-full h-85 object-cover rounded-xl"
            />
            <div className='flex justify-between items-center'>

                <div className='my-5 flex flex-col gap-2'>

                    <h2 className='font-bold text-2xl'>
                        {trip?.userSelection?.location}
                    </h2>

                    <div className='flex gap-5'>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>
                            📅 {trip?.userSelection?.noOfDays} Day
                        </h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>
                            💰 {trip?.userSelection?.budget} Budget
                        </h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>
                            🥂 No. Of Travelers:
                            {trip?.userSelection?.travelers} People
                        </h2>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default InfoSection;