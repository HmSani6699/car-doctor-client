import parson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen lg:mt-20 lg:mb-20 bg-base-200">
            <div className="p-3 flex flex-col-reverse lg:flex-row ">
                <div className='lg:w-1/2 relative w-full'>
                    <img src={parson} className=" rounded-lg shadow-2xl h-[400px] lg:w-5/6" />
                    <div>
                        <img src={parts} className=" border-8 border-white rounded-lg absolute top-1/2 right-8 shadow-2xl h-[280px] w-4/6" />
                    </div>
                </div>
                <div className='lg:w-1/2 lg:m-20 lg:mt-0 mt-10 text-center lg:text-left'>
                    <h2 className='text-2xl text-[#FF3811] font-bold mb-6'>About Us</h2>
                    <h1 className="text-4xl lg:text-5xl font-bold ">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn bg-[#FF3811] border-0 mr-5 mb-14 lg:mb-0 ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;