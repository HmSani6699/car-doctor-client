import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthPrividers';

const Register = () => {

    const {cretUser} = useContext(AuthContext)


    const handleFormSubmit=event=>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        cretUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center w-1/2 mr-14">
                <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-full">
                <h2 className=' text-3xl font-bold text-center mt-10'>Sign up</h2>
                <div className="p-8 ">
                    <form onSubmit={handleFormSubmit}>
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

export default Register;