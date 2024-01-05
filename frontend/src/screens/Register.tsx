import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { styled } from 'styled-components';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt, FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";

type InputData = {
    id: number;
    name: string;
    type: string;
    text: string;
    required: boolean;
    placeholder?: string;
};

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { toast } = useToast()

    return (
        <HomeStyles className='flex column'>
            <div className="login_wrapper">
                <div className="w-90 auto flex item-center justify-center">
                    <div className="login_form_wrapper flex column item-start gap-4">
                        <div className="flex w-100 column gap-2">
                            <div className="flex column gap-2">
                                <img style={{ width: "120px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" className="auto" />

                                <h4 className="fs-30 py-1 w-100 text-center text-bold text-dark">
                                    Create an Account
                                </h4>
                            </div>

                            <div className="w-100 flex column gap-2">
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Username</span>
                                    <div className="input flex item-center gap-1">
                                        <IoPerson fontSize={'15px'} className="text-grey" />
                                        <input className="w-100 text-light fs-16" required={true} value={name} placeholder="Your Name"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>
                                </label>
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Fullname</span>
                                    <div className="input flex item-center gap-1">
                                        <IoPerson fontSize={'15px'} className="text-grey" />
                                        <input className="w-100 text-light fs-16" required={true} value={name}
                                            placeholder="Enter Your Full Name"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>


                                </label>
                                {/* email */}
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Email</span>
                                    <div className="input flex item-center gap-1">
                                        <MdOutlineMailOutline fontSize={'18px'} className="text-grey" />
                                        <input
                                            className="w-100 text-light fs-16"
                                            required={true}
                                            value={name}
                                            type="email"
                                            placeholder="name@example.com"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>


                                </label>
                                {/* phone */}
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Phone Number</span>
                                    <div className="input flex item-center gap-1">
                                        <FaPhoneAlt fontSize={'18px'} className="text-grey" />
                                        <input
                                            className="w-100 text-light fs-16"
                                            required={true}
                                            value={name}
                                            type="text"
                                            placeholder="Enter Your Phone Number"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>


                                </label>
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Password</span>
                                    <div className="input flex item-center gap-1">
                                        <FaKey fontSize={'18px'} className="text-grey" />
                                        <input
                                            className="w-100 text-light fs-16"
                                            required={true}
                                            value={name}
                                            type="password"
                                            placeholder="Enter Your Password"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>


                                </label>
                                <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                    <span>Confirm Password</span>
                                    <div className="input flex item-center gap-1">
                                        <FaKey fontSize={'18px'} className="text-grey" />
                                        <input
                                            className="w-100 text-light fs-16"
                                            required={true}
                                            value={name}
                                            type="password"
                                            placeholder="Confirm Your Password"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} >
                                        </input>
                                    </div>


                                </label>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                toast({
                                    variant: "destructive",
                                    title: "Scheduled: Catch up",
                                    description: "Friday, February 10, 2023 at 5:57 PM",
                                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                                })
                            }}
                            className="w-100 text-center gap-2 btn btn-2 fs-16 text-bold">
                            Register
                        </button>
                        <div className="auth_bottom w-100 flex item-center justify-center">
                            <span style={{ gap: "4px" }} className="fs-16 text-light flex item-center justify-center text-grey">
                                Don't have an account?
                                <Link style={{ textDecoration: "underline" }} to={'/login'}
                                    className="text-blue fs-14 text-extra-bold">Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyles>
    )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
  min-height:100vh;
  background-color: #E4F4FF;
  .login_wrapper{
    /* width:100% */
    .login_form_wrapper {
       margin: 10rem auto;
      display: flex;
      width: 46%;
      align-items: center;
      padding: 7rem 5.5rem;
      flex-direction: column;
      background: #fff;
      box-shadow:var(--shadow);
      .auth_bottom{
    padding-top: 1rem;
    border-top:1px solid rgba(0,0,0,.1);
  }
      @media (max-width: 780px) {
        width: 75%;
      }
      @media (max-width: 580px) {
        width: 90%;
      }
    }
  }
`

export default Register