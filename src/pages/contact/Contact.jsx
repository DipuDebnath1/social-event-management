import toast, { Toaster } from "react-hot-toast";


const Contact = () => {

const handleContactForm = (e) =>{
        e.preventDefault()
        toast.success(`Message send `)
        e.target.name.value= ''
        e.target.email.value= ''
        e.target.message.value= ''
        e.target.venues.value= ''
        e.target.date.value= ''
}
 
    return (
        <div  data-aos="zoom-out-top" data-aos-duration="700">
              <Toaster
              position="top-center"
              reverseOrder={false}
            />
           <div className="md:w-10/12 lg:w-7/12 my-4 rounded-xl mx-auto p-3 bg-blue-100">
            <h2 className="text-4xl text-center font-semibold pt-3">Contact</h2>
           <form className="card-body" onSubmit={handleContactForm}> 
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Select Venues & Date</span>
                </label>
                <div className="flex flex-col gap-5 md:flex-row justify-between">
                    <select name="venues" className="select select-bordered w-full max-w-xs" required>
                        <option >Select Venues</option>
                        <option>The-Grand-Ballroom</option>
                        <option>Sunset Beach Resort</option>
                        <option>Beach Adventure</option>
                        <option>Green Garden Venues</option>
                        <option>Serenity Gardens</option>
                        <option>Beach Venues</option>
                       
                    </select>
                  
                    <input type="date" name="date" id="" className="p-3 rounded-lg" />
                </div>

                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Purpase</span>
                </label>
                <textarea placeholder="Type message hare..." name="message" className="textarea textarea-bordered" id="" cols="20" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
                </div>
            
      </form>
           </div>
        </div>
    );
};

export default Contact;