import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom';
import UserTripCardItem from './userTripCardItem';

function MyTrips() {

    const navigation = useNavigate();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, [])
    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigation('/');
            return;
        }

        setUserTrips([]);
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        // ✅ Sare docs ko ek array me lo
        const trips = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log(trips);

        // ✅ Ek hi baar set karo
        setUserTrips(trips);
    }
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 mb-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='grid grid-cols-2 mt-5 md:grid-cols-3 gap-5'>
                {userTrips?.length > 0 ? userTrips.map((trip, index) => (
                    <UserTripCardItem trip={trip} key={index} />
                )) :
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-55 w-full bg-slate-200 animate-pulse rounded-xl'>
                        </div>
                    )

                    )}
            </div>
        </div>
    )
}

export default MyTrips