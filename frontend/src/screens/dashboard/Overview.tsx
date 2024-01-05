import React, { useState } from 'react'
const Overview = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div style={{ minHeight: "100vh" }} className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 text-dark">
                        Overview
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey">
                        Once you publish your course, you can grow your student audience and make an impact with the support of Udemy's marketplace promotions and also through your own marketing efforts. Together, we’ll help the right students discover your course.
                    </span>
                </div>
            </div>
        </div>
    )
}



export default Overview