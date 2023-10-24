
const Vennus = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-4xl font-semibold text-center  py-10" data-aos="fade-up" data-aos-duration="700">Our Venues </h1>
            <div className="grid md:grid-cols-2 gap-10">
                <div  data-aos="zoom-in" data-aos-duration="400">
                  <figure>  <img className="h-72 w-full" src={'https://i.ibb.co/RSFtsmG/The-Grand-Ballroom-at-The-Hilton-on-Park-Lane-venue-hire-900x630.jpg'} alt="" /></figure>
                    <h2 className="text-2xl font-semibold py-5 ">The-Grand-Ballroom</h2>
                </div>
                <div  data-aos="zoom-in" data-aos-duration="400">
                 <figure>   <img className="h-72 w-full" src={'https://i.ibb.co/kQTCTP8/images.jpg'} alt="" /></figure>
                    <h2 className="text-2xl font-semibold py-5 ">Beach Adventure </h2>
                </div >
                <div data-aos="zoom-in" data-aos-duration="400">
                   <figure> <img className="h-72 w-full" src={'https://i.ibb.co/92m1bZ5/the-garden-venue.jpg'} alt="" /></figure>
                    <h2 className="text-2xl font-semibold py-5 ">Green Garden Vanue </h2>
                </div>
                <div  data-aos="zoom-in" data-aos-duration="400">
                  <figure>  <img className="h-72 w-full" src={'https://i.ibb.co/R0KTnJm/wedding-dinner-on-the-beach-hilton-marco-island-beach-resort-spa-rgb-s.jpg'} alt="" /></figure>
                    <h2 className="text-2xl font-semibold py-5 ">Beach Vanue </h2>
                </div>



            </div>
        </div>
    );
};

export default Vennus;