import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthPrividers";

const CheckOut = () => {

    const { user } = useContext(AuthContext);

    const {_id, title, price ,img} = useLoaderData();


    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            customerName: name,
            email,
            date,
            title,
            img,
            service_id:_id,
            price:price
        }
        
        fetch('http://localhost:5000/checkOut',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-center my-10">Check out page name {title}</h2>
            <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-[#ff3811] border-0 btn-block" type="submit" value="Check page" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;