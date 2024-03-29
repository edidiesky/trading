import bcrypt from "bcryptjs";



const transactionData = [
    // edgar
    {
        user: '65b1496596849d00b2eb37dc',
        investment: {
            plan: 'Plan 1',
            price: "67200",
            tier: "tier 1",
            startDate: '24/01/2024',
            endDate: '12/05/2024',
            rate: '1000%',
        },
        paymentMethod:'Trust Wallet',
        isPaid: true,
        plan: 'Plan 1',

        paidAt: '24/01/2024',
        status: 'success',
        profit: '10000',
        proof_image:"/images/proof_2.png"
    },
]


export default transactionData