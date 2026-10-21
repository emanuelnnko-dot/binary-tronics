import { useUserContext } from '@/context/AuthContext'
import React from 'react'

function Logout() {
    const {logout} = useUserContext();

    logout()
    return (
        <div>You have Logged out</div>
    )
}

export default Logout