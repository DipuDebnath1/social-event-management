import { AiFillStar } from "react-icons/ai";


const Review = () => {
    return (
        <div className="w-11/12 mx-auto my-10 text-lg">
            <h2 className="text-center text-4xl font-semibold pt-5 pb-10"  data-aos="zoom-out-top">Previous client Feedback</h2>
          
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="text-center space-y-2"  data-aos="fade-up"  >
                        <img className="w-32 h-32 mx-auto object-cover rounded-full" src={'https://i.ibb.co/7N5bh1r/1632307185375.jpg'} alt="" />
                        <h2 className="text-xl font-semibold">Ayman Sadiq</h2>
                        <div className="flex justify-center">
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                        </div>
                      
                        <p>Wedding at Grand Ballroom: Magical! Stunning decor, impeccable service. A day filled with love, laughter, and cherished memories.</p>                       
                    </div>
                    <div className="text-center space-y-2" data-aos="fade-up"  >
                        <img className="w-32 h-32 mx-auto object-cover rounded-full" src={'https://i.ibb.co/tCp6Hsn/images.jpg'} alt="" />
                        <h2 className="text-xl font-semibold">Mr. Johon Stoke</h2>
                       
                           <div className="flex justify-center">
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                        </div>
                        <p>
                            Beach Wedding Adventure: Breathtaking. Sunset vows, beachside reception—unforgettable romantic escape.
                        </p>
                    </div>
                    <div className="text-center space-y-2" data-aos="fade-up" >
                        <img className="w-32 h-32 mx-auto object-cover rounded-full" src={'https://i.ibb.co/TLNKqt4/images.jpg'} alt="" />
                        <h2 className="text-xl font-semibold">Mr. Debnath</h2>
                       
                           <div className="flex justify-center">
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                        </div>

                        <p>
                            30th Birthday Bash: Surprises, joy, and love at Starlight Ballroom—a perfect tribute to life is adventures.
                        </p>

                    </div>
                    <div className="text-center space-y-2"  data-aos="fade-up" >
                        <img className="w-32 h-32 mx-auto object-cover rounded-full" src={'https://i.ibb.co/3Tm67Zz/images.jpg'} alt="" />
                        <h2 className="text-xl font-semibold">Ms. Beauty</h2>
                      
                           <div className="flex justify-center">
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                            <AiFillStar className="text-red-500"></AiFillStar>
                        </div>
                        
                        <p>
                            Kid is Magical Birthday: Enchanting day at Enchanted Garden Place. Magic, joy, and unforgettable memories.
                        </p>
                    </div>


                </div>
           
        </div>
    );
};

export default Review;