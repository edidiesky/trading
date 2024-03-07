import bcrypt from "bcryptjs";



const userdata = [
    // Admin
    {
        "username": "AbassAdmin",
        "fullname": "Abass Admin",
        "email": "Abass12@gmail.com",
        password: bcrypt.hashSync("eadb!334nf", 10),
        "isAdmin": true,
        "country": 'France',
        "deposit": 2000,
        "phone": '+ 123 874 3343 ',

    },
]


export default userdata