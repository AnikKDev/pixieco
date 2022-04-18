import React from 'react';
import './MyWorks.css';
const MyWorks = () => {
    return (
        <div className='mt-5' id='my-works'>
            <div className='ms-md-5 ps-3'>
                <h1 className=''>My Works</h1>
                <hr className='w-50' />
            </div>
            <div className="container">
                <div className="row gx-0 mt-5 ">
                    <div className='col-md-4 '>
                        <div className='d-flex  flex-column align-items-center'>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1613156639447-6dc4978950f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1429292394373-ddbcc6bb7468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1609272300331-a288ba4411b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="" /></div>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center'>
                        <div className='d-flex  flex-column align-items-center'>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1582255334378-4e9bc9505664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1626695821532-417aba4aa9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=589&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1644046267530-a4332e5f9f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /></div>
                            <div style={{ marginTop: "7rem" }} className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1635248914131-294baf451a0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=538&q=80" alt="" /></div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center'>
                        <div className='d-flex flex-column align-items-center'>
                            <div className="w-75 my-3 image-container"><img style={{ height: "460px" }} className="img-fluid" src="https://images.unsplash.com/photo-1613830226403-c441572139ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1610611342266-bcc131ecc78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80" alt="" /></div>
                            <div className="w-75 my-3 image-container"><img className="img-fluid" src="https://images.unsplash.com/photo-1619506764515-7a438121fa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;