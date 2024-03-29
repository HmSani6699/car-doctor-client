import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])


    // fetch('https:/car-doctor-server-hmsani6699.vercel.app/services')
    fetch('https://car-doctor-server-hmsani6699.vercel.app/services')
    // fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    return (
        <div className="mt-20">
            <div className="text-center p-2 ">
                <h2 className="text-3xl text-[#ff3811] font-bold">Service</h2>
                <h2 className="text-5xl font-bold my-5">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 mb-14 p-3 md:p-4 lg:p-4">
                {
                    services?.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;