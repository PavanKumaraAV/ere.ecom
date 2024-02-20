import React, { useEffect } from 'react'

export default function AdminProducts() {

        useEffect(()=>{
            
        },[])


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center m-5">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Cricket ball</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$10</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                            </ul>
                            <button type="button" className="w-50 btn btn-lg btn-outline-primary m-1">Update</button>
                            <button type="button" className="w-50 btn btn-lg btn-outline-primary m-1">Delete</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
