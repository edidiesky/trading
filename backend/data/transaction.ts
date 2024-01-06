import bcrypt from "bcryptjs";



const transactionData = [
    // edgar
    {
        user: '659805212c813582b35e5d85',
        investment: {
            plan: 'Plan 1',
            price: "1000",
            tier: "tier 1",
            startDate: '14/01/2024',
            endDate: '14/05/2024',
            rate: '1000%',
        },
        paymentMethod:'Bitcoin',
        isPaid: false,
        paidAt: '14/01/2024',
        status: 'success',
        profit: '10000',
        proof_image:"/images/proof_2.png"
    },
    // Micheal
    {
        user: '659807232b14aa8b2aea3fa5',
        investment: {
            plan: 'Plan 1',
            price: "1000",
            tier: "tier 1",
            startDate: '14/01/2024',
            endDate: '14/05/2024',
            rate: '1000%',
        },
        paymentMethod: 'Bitcoin',
        isPaid: false,
        paidAt: '17/04/2024',
        status: 'failed',
        profit: '10000',
        proof_image:""
    },
    // 1
    {
        user: '659805212c813582b35e5d85',
        investment: {
            plan: 'Plan 1',
            price: "1000",
            tier: "tier 2",
            startDate: '14/01/2024',
            endDate: '14/05/2024',
            rate: '1000%',
        },
        paymentMethod: 'Bitcoin',
        isPaid: true,
        paidAt: '16th Janauary 2024',
        status: 'success',
        profit: '10000',
        proof_image: "/images/proof_2.png"

    },
    {
        user: '659805212c813582b35e5d85',
        investment: {
            plan: 'Plan 2',
            price: "10000",
            tier: "tier 2",
            startDate: '14/01/2024',
            endDate: '14/05/2024',
            rate: '1000%',
        },
        paymentMethod: 'Bitcoin',
        isPaid: true,
        paidAt: '17/04/2024',
        status: 'success',
        profit: '10000',
        proof_image:""
    },
    // Micheal
    {
        user: '659807232b14aa8b2aea3fa7',
        investment: {
            plan: 'Plan 3',
            price: "1000000",
            tier: "tier 1",
            startDate: '14/01/2024',
            endDate: '14/05/2024',
            rate: '1000%',
        },
        paymentMethod: 'Bitcoin',
        isPaid: false,
        paidAt: '17/04/2024',
        status: 'failed',
        profit: '10000',
        proof_image:""
    },
]


export default transactionData