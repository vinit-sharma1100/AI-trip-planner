import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { GetPlaceImage } from '@/service/GlobalApi.jsx';

function Hotels({ trip }) {

    const hotels =
        trip.tripData?.travel_plan?.hotel_options
        || trip.tripData?.hotel_options
        || [];

    const [hotelImages, setHotelImages] = useState({});

    useEffect(() => {

        if (hotels.length > 0) {
            GetHotelPhotos();
        }

    }, [trip]);



    const GetHotelPhotos = async () => {

        let imagesObj = {};

        for (let hotel of hotels) {

            const name =
                hotel?.hotel_name
                || hotel?.name;

            if (name) {

                const image =
                    await GetPlaceImage(name);

                if (image) {
                    imagesObj[name] = image;
                }

            }

        }

        setHotelImages(imagesObj);

    };



    return (
        <div>

            <h2 className='font-bold text-xl mt-5'>
                Hotel Recommendation
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>

                {hotels.map((hotel, index) => (

                    <Link
                        key={index}
                        to={
                            'https://www.google.com/maps/search/?api=1&query='
                            +
                            (hotel?.hotel_name || hotel?.name)
                            + ","
                            +
                            (
                                hotel?.address
                                || hotel?.hotel_address
                                || hotel?.location
                                || trip?.userSelection?.location
                            )
                        }

                        target='_blank'
                        className='no-underline text-black!'
                    >

                        <div className='border rounded-xl p-2 hover:scale-103 transition-all cursor-pointer hover:shadow-md'>

                            <img
                                src={
                                    hotelImages[
                                    hotel?.hotel_name
                                    || hotel?.name
                                    ]
                                    ||
                                    hotel?.hotel_image_url
                                    ||
                                    "/placeholder.jpg"
                                }

                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/placeholder.jpg";
                                }}

                                className='rounded-xl h-45 w-full object-cover'
                            />

                            <div className='my-2 flex flex-col gap-2'>

                                {/* Hotel Name */}
                                <h2 className='font-medium'>

                                    {
                                        hotel?.hotel_name
                                        || hotel?.name
                                    }

                                </h2>



                                {/* 📍 Location */}
                                {
                                    (
                                        hotel?.address
                                        || hotel?.hotel_address
                                        || hotel?.location
                                    ) && (

                                        <h2 className='text-xs text-gray-500'>

                                            📍{
                                                hotel?.address
                                                || hotel?.hotel_address
                                                || hotel?.location
                                            }

                                        </h2>

                                    )
                                }



                                {/* 💲 Price */}
                                <h2 className='text-sm'>

                                    💲 {
                                        hotel?.price_per_night
                                        || hotel?.price
                                        || hotel?.cost_per_night
                                        || hotel?.budget
                                        || "Price info coming soon"
                                    }

                                </h2>



                                {/* ⭐ Rating */}
                                <h2 className='text-sm'>

                                    ⭐ {
                                        hotel?.rating
                                        || hotel?.stars
                                        || hotel?.hotel_rating
                                        || hotel?.review_score
                                        || "Not rated yet"
                                    }

                                </h2>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

        </div>
    )
}

export default Hotels