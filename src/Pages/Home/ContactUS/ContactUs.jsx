import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
           <div className="text-center mt-28 mb-20">
                <h2 className="text-3xl text-[#ff3811] font-bold">Contact Us</h2>
                <h2 className="text-5xl font-bold">Our Contact US Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="">

            </div>
            <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-full">
                <h2 className=' text-3xl font-bold text-center mt-10'>Sign up</h2>
                <div className="p-8 ">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#FF3811] mr-5" value="Sign up" />
                        </div>
                    </form>
                    <p className='text-center mt-6 mb-6'>Or Sign In with</p>

                    <div className='flex items-center justify-center gap-5 mb-6'>
                        <button><FaFacebookF></FaFacebookF></button>
                        <button><FaGoogle></FaGoogle></button>
                    </div>
                    <p className='text-center mb-10'>Have an account? <Link className='text-orange-500' to='/login'>Sign In</Link></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;