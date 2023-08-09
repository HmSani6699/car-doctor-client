import { FaClock, FaCreditCard, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <div className="text-center mt-28 mb-20">
                <h2 className="text-3xl text-[#ff3811] font-bold">Contact Us</h2>
                <h2 className="text-5xl font-bold">Our Contact US Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="flex mb-24">
                <div className="lg:w-2/3">
                    <h2 className="text-3xl uppercase font-bold mb-10">HOW TO REACH US</h2>
                    <div className="flex ">
                        <FaClock className="text-4xl text-gray-500"></FaClock>
                        <div className="ml-8">
                            <h3 className="text-2xl font-semibold mb-6">WORKING HOURS</h3>
                            <p className=" text-gray-500">Monday to Friday 8:00 Am - 8:00 PM Saturday 8:00 Am - 4:00 PM</p>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="flex ">
                        <FaCreditCard className="text-4xl text-gray-500"></FaCreditCard>
                        <div className="ml-8">
                            <h3 className="text-2xl font-semibold mb-6">ADDRESS INFO</h3>
                            <p className=" text-gray-500">19 Cardinal, Design Street Victoria, Australia</p>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="flex ">
                        <FaPhoneAlt className="text-4xl text-gray-500"></FaPhoneAlt>
                        <div className="ml-8">
                            <h3 className="text-2xl font-semibold mb-6">CONTACT INFO</h3>
                            <p className=" text-gray-500">+8801996359111</p>
                            <p className=" text-gray-500">+8801996359111</p>
                            <p className=" text-gray-500">+8801996359111</p>
                        </div>
                    </div>
                    <hr className="my-5" />
                </div>
                <div className=" w-full lg:mx-14">
                    <h2 className="text-3xl uppercase font-bold mb-10">SEND US EMAIL</h2>
                    <div>
                        <form >
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="YOUR NAME" name='name' className="input w-full input-bordered bg-gray-100" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="YOUR EMAIL" name='email' className="input  input-bordered bg-gray-100" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="YOUR PHONE" name='name' className="input w-full input-bordered bg-gray-100" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" name='email' className="input  input-bordered bg-gray-100" />
                                </div>
                            </div>
                            <textarea placeholder="MESSAGE" className="textarea textarea-bordered textarea-xs  w-full mt-5 bg-gray-100" rows="7" ></textarea>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#FF3811] mr-5" value="Sign up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;