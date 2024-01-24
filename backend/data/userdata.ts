import bcrypt from "bcryptjs";



const userdata = [
    // edgar
   
    // Admin
    {
        "username": "Adminb138j",
        "fullname": "Admin Admin",
        "email": "Admin@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        "isAdmin": true,
        "country": 'France',
        "deposit": 2000,
        "phone": '+ 123 874 3343 ',

    },
]


export default userdata