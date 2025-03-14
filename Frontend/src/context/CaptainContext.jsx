import React, { createContext, useState } from 'react'
export const CaptainDataContext = createContext()

// "captain": {
//     "fullname": {
//       "firstname": "vijay",
//       "lastname": "Kumar"
//     },
//     "email": "vijay@gmail.com",
//     "password": "$2b$10$BYP.1YjEKRL.irCJw/crQO35H/v8PWCL6tTq7fc82pbkY5mH2kDIm",
//     "status": "inactive",
//     "vehicle": {
//       "color": "blue",
//       "plate": "Jh02eyc",
//       "capacity": 3,
//       "vehicleType": "car"
//     },

const CaptainContext = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
        password:"",
        vehicle:{
            color:"",
            plate:"",
            capacity:0,
            vehicleType:""
        },
        status:"inactive"
    })

    return (
        <div>
            <CaptainDataContext.Provider value={{ user, setUser }}>
                {children}
            </CaptainDataContext.Provider>
        </div>
    )
}

export default CaptainContext