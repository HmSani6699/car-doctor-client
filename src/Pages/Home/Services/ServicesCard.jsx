import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServicesCard = ({ service }) => {

    const {_id, title, price, img } = service;

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
                    <Link to={`/checkOut/${_id}`}><button><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;