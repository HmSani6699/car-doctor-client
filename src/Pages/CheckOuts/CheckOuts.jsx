import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthPrividers";
import CheckOutRow from "./CheckOutRow";
import { useNavigate } from "react-router-dom";

const CheckOuts = () => {
    const { user } = useContext(AuthContext);
    const [checkOuts, setCheckOut] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/checkOut?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) { setCheckOut(data) }
                else {
                    navigate('/')
                }
                console.log(data);

            })
    }, [user.email,navigate])

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/checkOut/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const remaning = checkOuts.filter(check => check._id !== _id);
                // console.log(remaning);
                setCheckOut(remaning)
            })
    }

    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-16">All check out {checkOuts.length}</h2>

            <div className="overflow-x-auto w-full mb-32">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            checkOuts.map(checkOut => <CheckOutRow
                                key={checkOut._id}
                                checkOut={checkOut}
                                handleDelete={handleDelete}
                            ></CheckOutRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOuts;