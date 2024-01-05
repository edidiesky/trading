type InputData = {
    id: number;
    name: string;
    type: string;
    text: string;
    required: boolean;
    placeholder?: string;
};


export const inputData: InputData[] = [
    {
        id: 1,
        name: "email",
        placeholder: "example@site.com",
        type: "email",
        text: "Email",
        required: true,
    },
    {
        id: 2,
        name: "password",
        placeholder: "Minimum 8 Characters",
        type: "password",
        text: "password",
        required: true,
    },
];


export const inputData2: InputData[] = [
    {
        id: 4,
        name: "name",
        type: "name",
        text: "Full Name",
        required: true,
    },
    {
        id: 1,
        name: "email",
        placeholder: "example@site.com",
        type: "email",
        text: "Email",
        required: true,
    },
    {
        id: 2,
        name: "password",
        placeholder: "Minimum 8 Characters",
        type: "password",
        text: "password",
        required: true,
    },
];
