import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../TripDetails/InfoSection';
import Hotels from '../TripDetails/Hotels';
import PlacesToVisit from '../TripDetails/PlacesToVisit';

function ViewTrip() {

    const { tripid } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripid && GetTripData();
    }, [tripid]);

    const GetTripData = async () => {
        const docRef = doc(db, 'AITrips', tripid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document:", docSnap.data());
            setTrip(docSnap.data());
        }
        else {
            console.log("No such document");
            toast("No trip found");
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>

            {/* Information Section */}
            <InfoSection trip={trip} />

            {/* Recomended Hotels */}
            <Hotels trip={trip} />

            {/* Daily  Plans*/}
            <PlacesToVisit trip={trip} />
        </div>
    )
}

export default ViewTrip