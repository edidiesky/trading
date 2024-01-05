import bcrypt from "bcryptjs";



const userdata = [
    // edgar
    {
        "username": "DamainMicheal",
        "fullname": "Damain Micheal",
        "email": "DamainMicheal103@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        "isAdmin": false,
        "country": 'Germany',
        "deposit": 2000,
        "phone": '+ 123 874 3343 ',
    },
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

    {
        "username": "Korobo2833",
        "fullname": "Micheal Felix",
        "email": "Korobo2833@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        "isAdmin": false,
        "country": 'Togo',
        "deposit": 0,
        "phone": '+ 123 874 3343 ',

    },
]


export default userdata