import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg';




const Login = () => {

    const handleFormSubmit=event=>{
        event.preventDefault()
        console.log(event);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 mr-14">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-full">
                    <h2 className=' text-3xl font-bold text-center mt-10'>Login</h2>
                    <div className="p-8 ">
                        <form onClick={handleFormSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#FF3811] mr-5" value="Sign in" />
                            </div>
                        </form>
                        <p className='text-center mt-6 mb-6'>Or Sign In with</p>

                        <div className='flex items-center justify-center gap-5 mb-6'>
                            <button><FaFacebookF></FaFacebookF></button>
                            <button><FaGoogle></FaGoogle></button>
                        </div>
                        <p className='text-center mb-10'>Have an account? Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;