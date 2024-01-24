import bcrypt from "bcryptjs";



const userdata = [
    // edgar
   
    // Admin
    {
        "username": "RilwanOgbon",
        "fullname": "Rilwan Sodik",
        "email": "roilwanaSodiks@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        "isAdmin": true,
        "country": 'France',
        "deposit": 2000,
        "phone": '+ 123 874 3343 ',

    },
]


export default userdata