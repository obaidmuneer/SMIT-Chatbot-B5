import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Profile = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            This is Profile page {id}br
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default Profile