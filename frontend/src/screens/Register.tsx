import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { styled } from 'styled-components';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt, FaKey } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { registerUser } from "@/features/auth/authReducer";
import LoaderIndex from "@/components/loaders";


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
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [fullname, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const {
        alertText,
        showAlert,
        alertType,
        registerisSuccess,
        registerisLoading
    } = useAppSelector(store => store.auth)

    const dispatch = useAppDispatch()

    const { toast } = useToast()

    const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(registerUser({ email, password, phone, username, fullname }))
    }

    useEffect(() => {
        if (registerisSuccess) {
            toast({
                variant: "success",
                title: "Success",
                description: 'Registration Succesfully, Welcome to OptiTrade Dynamics!',
            })
            const timeout = setTimeout(() => {
                navigate('/login')
            }, 3000);

            return () => clearTimeout(timeout)
        }
    }, [registerisSuccess])
    return (
        <HomeStyles className='flex column'>
            {
                registerisLoading && <LoaderIndex />
            }
            <div className="login_wrapper">
                <div className="auto flex item-center justify-center">
                    <div className="login_form_wrapper flex column gap-4">
                        <form onSubmit={(e) => handleRegisterUser(e)} className="login_form_wrapper_content  w-100 flex column item-start gap-4">
                            <div className="flex w-100 column gap-2">
                                <div className="flex column gap-2">
                                    <h4 className="fs-30 py-1 w-100 text-center text-bold text-dark">
                                        Welcome to OptiTrade Dynamics!
                                        <span className="block mt-3 fs-16 text-light">Please enter your details to create an account with us!</span>

                                    </h4>
                                </div>

                                <div className="w-100 mt-8 flex column gap-2">
                                    <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                        <span>Username</span>
                                        <div className="input flex item-center gap-1">
                                            <IoPerson fontSize={'15px'} className="text-grey" />
                                            <input className="w-100 text-light fs-16" required={true} value={username} placeholder="Your Name"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} >
                                            </input>
                                        </div>
                                    </label>
                                    <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                        <span>Fullname</span>
                                        <div className="input flex item-center gap-1">
                                            <IoPerson fontSize={'15px'} className="text-grey" />
                                            <input className="w-100 text-light fs-16" required={true}
                                                value={fullname}
                                                placeholder="Enter Your Full Name"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} >
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
                                                value={email}
                                                type="email"
                                                placeholder="name@example.com"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} >
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
                                                value={phone}
                                                type="text"
                                                placeholder="Enter Your Phone Number"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} >
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
                                                value={password}
                                                type="password"
                                                placeholder="Enter Your Password"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} >
                                            </input>
                                        </div>


                                    </label>
                                    {/* <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
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


                                </label> */}
                                </div>
                            </div>
                            <button
                                type="submit"

                                className="w-100 text-center gap-2 btn fs-16 text-bold">
                                Register
                            </button>

                        </form>
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
  background-color: var(--grey-3);
  .login_wrapper{
    /* width:100% */
    .login_form_wrapper {
       margin: 10rem auto;
      display: flex;
      width: 46%;
      align-items: center;
     
      flex-direction: column;
      .login_form_wrapper_content{
      background: #fff;
      box-shadow:var(--shadow);
       border-radius: 10px;
        padding:5.5rem;
      }
      .auth_bottom{
    padding-top: 1.5rem;
  }
      @media (max-width: 980px) {
        width: 95%;
      padding: 7rem 2rem;
       .login_form_wrapper_content{
      background: #fff;
      box-shadow:var(--shadow);
       border-radius: 10px;
        padding:5.5rem 3rem;
      }
      }
      }

       @media (max-width: 580px) {
        width: 95%;
      padding: 7rem 0;
         .login_form_wrapper_content{
      background: #fff;
      box-shadow:var(--shadow);
       border-radius: 10px;
        padding:5.5rem 2rem;
      }
      }
    }
  
  .btn:disabled {
      cursor: not-allowed;
      opacity: .6;

    }
`
export default Register