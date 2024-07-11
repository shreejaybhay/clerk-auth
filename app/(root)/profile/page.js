import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
            <div>Profile</div>
            <div>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}

export default Profile