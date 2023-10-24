import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col md:flex-row md:gap-20 my-10">
            <figure className="flex-1 " data-aos="fade-up">
                <img src={'https://i.ibb.co/2KXPv5H/210916-1480.jpg'} alt="" />
            </figure>
            <div className="flex-1 text-center" data-aos="fade-up" >
                <h1 className="text-4xl font-semibold py-5 font-bold text-red-500"> Wedding Planer </h1>
                <p className="text-lg text-justify">
                    Welcome to <span className="font-bold">Wedding Planer</span> , where we transform your vision into exceptional events. With our expertise, creativity, and meticulous attention to detail, we bring your gatherings to life, from corporate conferences to extravagant celebrations. Our dedicated team ensures every element is flawlessly orchestrated, allowing you to focus on what matters most: enjoying the moment. Let us make your next event unforgettable, tailored to your unique style and objectives. Together, we all craft memories that leave a lasting impression. Explore our services and embark on a journey to event excellence with us today
                </p>
                <div className="text-end">
                    <Link to={'/contact'} className="btn bg-red-500 hover:bg-red-600 text-white">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default About;