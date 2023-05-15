import { FaArrowRight } from 'react-icons/fa';


const ServicesCard = ({ service }) => {

    const { title, price, img } = service;

    // console.log(title,price);
    return (
        <div className="card w-full bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={img}   alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="card-actions flex items-center justify-center text-orange-500">
                    <p className="font-bold ">Price : {price}</p>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;