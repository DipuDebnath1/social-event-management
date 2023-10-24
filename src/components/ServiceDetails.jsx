import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const ServiceDetails = () => {
    const {id} = useParams();
    const [ServicesData,setServicesData] = useState([])
   


    useEffect(()=>{
      fetch('../service.json')
      .then(res=>res.json())
      .then(data=>setServicesData(data.filter(card=>card.id==id)))
    },[])



    return (
        <div className="w-11/12 mx-auto md:w-2/3  py-12">
             {
                    ServicesData.map(card=><div key={card.id} className="space-y-2">
                        <img className="w-full h-auto object-cover"  src={card.img} alt="" />
                        <h3 className="text-2xl font-semibold">{card.title}</h3>
                        <p className="text-lg">{card.description}</p>
                        <div className="flex justify-between">
                             <p className="flex items-center gap-2 text-xl font-semibold"><FaLocationDot></FaLocationDot> <span>{card.venue}</span></p>
                           <div >
                                <p className="flex flex-col"> 
                                    <span className="text-lg underline font-bold text-red-500">Pakeage</span>
                                    <span className="text-sm font-semibold">Basic : {card.price-1}$</span>
                                    <span className="text-sm font-semibold">Gold : {card.price+890}$</span>
                                    <span className="text-sm font-semibold">Diamond : {card.price+1900}$</span>
                                </p>
                           </div>
                        </div>
                    </div>)
                }
        </div>
    );
};

export default ServiceDetails;