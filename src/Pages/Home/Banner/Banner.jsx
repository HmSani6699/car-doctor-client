import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full rounded-xl">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="text-white rounded-xl absolute h-full flex items-center right-5 top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='w-[430px] pl-10 space-y-5'>
                        <h2 className='text-6xl font-bold  '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn bg-opacity-0 border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-[#ffffff]">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4"><FaArrowLeft/></a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-xl">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="text-white rounded-xl absolute h-full flex items-center right-5 top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='w-[430px] pl-10 space-y-5'>
                        <h2 className='text-6xl font-bold  '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn bg-opacity-0 border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-[#ffffff]">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4"><FaArrowLeft/></a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="text-white rounded-xl absolute h-full flex items-center right-5 top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='w-[430px] pl-10 space-y-5'>
                        <h2 className='text-6xl font-bold  '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn bg-opacity-0 border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-[#ffffff]">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4"><FaArrowLeft/></a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="text-white rounded-xl absolute h-full flex items-center right-5 top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='w-[430px] pl-10 space-y-5'>
                        <h2 className='text-6xl font-bold  '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn bg-opacity-0 border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-[#ffffff]">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4"><FaArrowLeft/></a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]"><FaArrowRight /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;