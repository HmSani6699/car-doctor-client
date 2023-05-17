import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    const { title } = useLoaderData();


    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-center my-10">Check out page name {title}</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Check page" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;