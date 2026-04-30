import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function Header() {

    const user = JSON.parse(localStorage.getItem('user'));
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        console.log(user)
    }, [])

    const login = useGoogleLogin({
        onSuccess: (tokenInfo) => {
            GetUserProfile(tokenInfo);
        },
        onError: (error) => console.log(error)
    })

    const GetUserProfile = async (tokenInfo) => {

        try {
            const response = await fetch(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: {
                        Authorization: `Bearer ${tokenInfo.access_token}`,
                        Accept: "application/json"
                    },
                }
            );

            const data = await response.json();
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            setOpenDialog(false);
            window.location.reload();
        } catch (error) {
            console.log("Fetch Error:", error);
        }
    };

    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-5'>
            <img src="/Project logo.png" alt="logo" className='h-25 w-70' />
            <div>
                {user ?
                    <div className='flex items-center gap-3'>

                        <a href="/create-trip" className="no-underline">
                            <Button className='rounded-full'>Create Trip</Button>
                        </a>

                        <a href="/my-trips">
                            <Button className='rounded-full'>My Trip</Button>
                        </a>

                        <Popover>
                            <PopoverTrigger asChild>
                                <img src={user?.picture} className='h-10 w-10 rounded-full' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <h2>Name: {user?.name}</h2>
                                <h2>{user?.email}</h2>
                                <h2 className="cursor-pointer" onClick={() => {
                                    googleLogout();
                                    localStorage.clear();
                                    window.location.reload();
                                }}><button className='text-white mt-2'>Logout</button></h2>
                            </PopoverContent>
                        </Popover>
                    </div> :
                    <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
                }
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img src="/logo.svg" />
                            <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
                            <p>Sign in to the app with Google Authentication</p>
                            <button onClick={login} className='w-full mt-5 text-white flex gap-4 items-center justify-center'> <FcGoogle className='h-5 w-5' />Sign In With Google</button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Header