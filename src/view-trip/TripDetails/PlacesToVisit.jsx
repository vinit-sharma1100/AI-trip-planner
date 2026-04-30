import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {

    // Support both structures
    let itinerary =
        trip.tripData?.travel_plan?.itinerary
        || trip.tripData?.itinerary
        || [];

    // Agar object ho to array me convert
    if (!Array.isArray(itinerary) && typeof itinerary === "object") {
        itinerary = Object.values(itinerary);
    }

    return (
        <div>

            <h2 className='font-bold text-lg mt-5'>
                Places to Visit
            </h2>

            <div>

                {Array.isArray(itinerary) && itinerary.map((item, index) => (

                    <div key={index} className='mt-5'>

                        <h2 className='font-medium text-lg'>
                            Day {item.day || index + 1}
                        </h2>

                        <div className='grid md:grid-cols-2 gap-5'>

                            {(item.places || item.activities || item.schedule || item.plan || []).map((place, i) => (

                                <div key={i}>

                                    <h2 className='font-medium text-sm text-orange-600'>
                                        Time to Visit: {place.best_time_to_visit || place.time_to_visit || place.travel_time || place.best_time_to_visit_this_place || "Best time varies"}
                                    </h2>
                                    <PlaceCardItem place={place} />

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default PlacesToVisit