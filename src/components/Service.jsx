import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Service = () => {
    const [ServicesData,serServicesData] = useState([])


    useEffect(()=>{
      fetch('service.json')
      .then(res=>res.json())
      .then(data=>serServicesData(data))
    },[])

    return (
        <div className="w-11/12 mx-auto md:my-10" > 
          <h2 className="text-center text-4xl font-semibold py-5" data-aos="fade-up" >Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    ServicesData.map(card=><div key={card.id} className="space-y-2" data-aos="fade-up">
                        <img className="w-full h-52 object-cover"  src={card.img} alt="" />
                        <h3 className="text-2xl font-semibold">{card.title}</h3>
                        <p className="text-lg">{card.description.slice(0,150)}...<Link to={`/service/${card.id}`} className="text-sm font-semibold">See more</Link> </p>
                        <p className="">Basic pakage : <span className="font-bold">{`${card.price}`}$</span></p>
                        <button className="btn bg-red-500 hover:bg-red-500 text-white">
                        <Link to={`/service/${card.id}`} className=" font-semibold">See Details</Link>
                        </button>

                    </div>)
                }
            </div>
          
          
        </div>
    );
};

export default Service;