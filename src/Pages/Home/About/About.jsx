import parson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen  lg:mt-20 lg:mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={parson} className=" rounded-lg shadow-2xl h-[440px] w-5/6" />
                    <div>
                        <img src={parts} className=" border-8 border-gray-400 rounded-lg absolute top-1/2 right-8 shadow-2xl h-[300px] w-4/6" />
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='text-2xl text-orange-500 font-bold mb-6'>About Us</h2>
                    <h1 className="text-5xl leading-normal font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn bg-[#FF3811] mr-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;