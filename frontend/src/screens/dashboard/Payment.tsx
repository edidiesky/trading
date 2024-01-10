import React, { useState } from 'react'
import styled from "styled-components";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";

import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { CreateDeposit } from '@/features/deposit/depositReducer';
import LoaderIndex from '@/components/loaders';
const Payment = () => {
    const [image, setImage] = useState('');

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { toast } = useToast()
    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const {
        deposit
    } = useAppSelector(store => store.deposit)
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const [uploading, setUploading] = useState(false);

    const [state, setState] = React.useState<{
        value: string;
        copied: boolean;
    }>({
        value: "bc1qr27rs7tplyczjverg5sfuz6kvw8x7s3ldhf69d",
        copied: false,
    });
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type?: string) => {
        // get the file
        // console.log('file')
        const fileInput = e.target as HTMLInputElement
        if (fileInput.files !== null) {
            const selectedfiles = fileInput.files[0]
            setUploading(true);
            // create formdata
            const formData = new FormData();
            formData.append("files", selectedfiles);


            try {
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/upload/single`, formData, config);


                setImage(data.urls)
            // create formdata
                setUploading(false);

            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('No files were being selected');

        }

    };
    const depsoitData = {
        ...deposit,
        user: userInfo?._id,
        proof_of_payment: image,
        status: "pending"

    }

    const HandlePayment = () => {
        dispatch(CreateDeposit(depsoitData))
    }
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            {
                uploading && <LoaderIndex/>
            }
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Fund Your Account
                    </h2>
                </div>
                <div className="trading_card flex column gap-3">
                    <div className="w-100 flex column gap-1">
                        <h4 className="fs-16 text-light text-dark">
                            You are to make payment of {" "}
                            <span className="text-extra-bold">
                                ${deposit?.amount}
                            </span> using your selected payment method.
                            Screenshot and upload the proof of payment
                        </h4>
                        <div className="flex item-center  gap-1">
                            <img style={{ width: "10rem" }} src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="" />
                            <h5 className="fs-20 text-bold">Bitcoin</h5>

                        </div>
                    </div>
                    <div className="w-100 flex column gap-1 item-start">
                        <h5 className="fs-24 text-bold">Bitcoin Address:</h5>
                        <div className="adress_wrapper w-100 flex item-start">
                            <div className="adress_input flex item-center justify-center w-100 fs-16">
                                {state?.value}
                            </div>
                            <CopyToClipboard
                                text={state.value}
                                onCopy={() => setState({ copied: true, value: state.value })}
                            >
                                <div className="adress_btn fs-20 text-grey2 flex item-center justify-center">

                                    <IoCopy />
                                </div>
                            </CopyToClipboard>
                        </div>
                        {/* <input className="input" type='number' placeholder='Enter amount to be deposited'></input> */}

                    </div>

                    <div className="w-100 py-1 flex item-start column gap-2">
                        {
                            image === '' && <div className="w-100 flex column gap-1">
                                <h4 className="fs-14 text-bold">Upload Payment proof after payment.</h4>

                                <div className="w-100 flex item-center">
                                    <label htmlFor="upload_image" className="btn btn_3 text-white fs-12 text-extra-bold">
                                        Upload Image
                                        <input
                                            type="file"
                                            id="upload_image"
                                            placeholder="Gig Image"
                                            autoComplete="off"
                                            style={{ display: "none" }}
                                            onChange={handleFileUpload}
                                            multiple
                                            className="w-100"
                                        />
                                    </label>
                                </div>
                            </div>
                        }
                        {
                            image !== '' && <div className="w-100 flex column gap-1">
                                <h4 className="fs-14 text-bold">Upload Image preview</h4>
                                <div className="w-100 image_preview flex items-center justify-center">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        }

                        <button onClick={HandlePayment} style={{ background: "green", padding: "2rem", marginTop: "4rem" }} className="btn fs-14 text-white text-bold">
                            Submit Payment
                        </button>
                    </div>
                </div>
            </div>
        </HistorytStyles>
    )
}



const HistorytStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  .image_preview{
        background-color: #e2dfdf;
        padding:4rem 2rem;
        img {
            width:90%;
        }
  }
   .adress_input{
        height:5rem;
        background-color: #e2dfdf;
    }
    .btn.btn_3 {
        padding: 1rem;
    }
    .adress_btn {
        height:5rem;
        width:6rem;
        border: 1px solid var(--dark-1);
        cursor: pointer;
    }
  .trading_wrapper {
    width:95%;
   
    .input {
        &.input_1 {
        width: 300px !important;
        @media (max-width:980px) {

            width:90%;

         }
        }
    }
    .trading_card {
        width:60%;
        margin:0 auto;
        padding:7rem 5rem;
        background-color: #fff;
        box-shadow: var(--shadow);
         /* min-width: 500px; */
         @media (max-width:980px) {
            margin:0;
            width:90%;
           padding:5rem;

         }

        .icon_trading{
         min-width: 400px;

        padding:2rem 2.5rem;
        box-shadow: var(--shadow);
        background-color: #fff;

        }
    }
  }
`
export default Payment