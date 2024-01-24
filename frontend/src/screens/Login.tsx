import React, { useState, useEffect } from "react";
import { styled } from 'styled-components';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { FaPhoneAlt, FaKey } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import LoaderIndex from "@/components/loaders";
import { loginUser } from "@/features/auth/authReducer";

type InputData = {
    id: number;
    name: string;
    type: string;
    text: string;
    required: boolean;
    placeholder?: string;
};

const Register: React.FC = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const {
        loginisLoading,
        loginisSuccess,
        alertText,
        showAlert,
        alertType,
    } = useAppSelector(store => store.auth)

    const dispatch = useAppDispatch()

    const { toast } = useToast()

    useEffect(() => {
        if (loginisSuccess) {
            toast({
                variant: "success",
                title: "Success",
                description: 'Login Succesfully, Welcome to OptiTrade Dynamics!',
            })
            const timeout = setTimeout(() => {
                navigate('/account/dashboard')
            }, 3000);

            return () => clearTimeout(timeout)
        }
    }, [loginisSuccess])

    const handleLoginUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }

    return (
        <HomeStyles className='flex column '>
            {
                loginisLoading && <LoaderIndex />
            }
            <div className="wrapper w-full grid">
                <div className="sticky h-100 hidden md:block top-0">
                    <img src="https://www.indonez.com/html-demo/wave/img/in-signin-image.jpg" alt="" className='w-100 h-100' />

                </div>
                <div className="login_wrapper">
                    <div className="w-100 auto flex item-center justify-center">
                        <div className="login_form_wrapper flex column">
                            <div className="w-100 flex column login_form_wrapper_content item-start gap-4">
                                <div className="flex w-100 column item-center justify-center gap-2">
                                    <div className="flex column gap-2">

                                        <h4 className="fs-30 py-1 w-100 text-center text-bold text-dark">
                                            Welcome Back!
                                            <span className="block fs-18 text-light">Please enter your details to login</span>

                                        </h4>
                                    </div>

                                    {/*  */}
                                </div>
                                <form onSubmit={(e) => handleLoginUser(e)} className="flex w-100 column gap-4">
                                    <div className="w-100 flex column gap-2">

                                        {/* email */}
                                        <label htmlFor="" className="fs-14 flex column gap-1 text-bold text-grey2">
                                            <span>Email Address</span>
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
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-100 text-center gap-2 btn fs-16 text-bold">
                                        Login
                                    </button>
                                </form>

                            </div>
                            <div className="auth_bottom w-100 flex item-center justify-center">
                                <span style={{ gap: "4px" }} className="fs-16 text-light flex gap-2 item-center justify-center text-dark">
                                    Dont have an account?
                                    <Link style={{ textDecoration: "underline" }} to={'/register'}
                                        className="text-blue fs-14 font-bold">Register</Link>
                                </span>
                            </div>
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
  height:100vh;
  overflow: hidden;
  background-color:#fff;
  .wrapper {
    grid-template-columns: 1fr 40%;
    height:100%;
     @media (max-width:1080px) {
         grid-template-columns: 1fr 50%;


      }
     @media (max-width:780px) {
         grid-template-columns: 1fr;


      }
  }
  .login_wrapper{
    height:100%;
    overflow: auto;

    .login_form_wrapper {
      display: flex;
      width: 450px;
      align-items: center;
     
      flex-direction: column;
      @media (max-width:780px) {
      width: 85%;

      }
      .login_form_wrapper_content{
        padding:5.5rem;
      }
     
      }
      }

  
  .btn:disabled {
      cursor: not-allowed;
      opacity: .6;

    }
`


export default Register