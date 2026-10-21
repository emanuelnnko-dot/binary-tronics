import { useUserContext } from '@/context/AuthContext'
import React from 'react'

function Logout() {
    const {logout} = useUserContext();

    logout()
    return (
        <div className="min-h-[570px]">
            <div className=" flex justify-center pt-8">
                 <h4 className="bg-blue-100 text-blue-500 p-5 text-4xl border border-blue-300 rounded">Your have logged out</h4>
          </div>
        </div>
    )
}

export default Logout