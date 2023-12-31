import contactImg from "../assets/images/contact-img.svg";

const Contact = () => {
  return (
    <section id="contact" className="py-28 scroll-m-5">
      <div className="container mx-auto">
        <h2 className="dark:text-white text-center text-4xl font-bold mb-10 underline decoration-amber-400 decoration-4 underline-offset-4">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex-1 flex items-center justify-center">
            <img className="w-1/2" src={contactImg} alt="contact" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <form
              action="https://formspree.io/f/xeqwqbad"
              method="POST"
              className=" flex flex-col gap-5 w-4/5"
            >
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                className="p-2 pl-5 rounded-xl border-2 border-amber-400 outline-0 "
              />
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email"
                className="p-2 pl-5 rounded-xl border-2 border-amber-400 outline-0 "
              />
              <input
                type="number"
                name="number"
                placeholder="Enter your mobile number"
                className="p-2 pl-5 rounded-xl border-2 border-amber-400 outline-0 "
              />
              <textarea
                id=""
                cols="30"
                rows="5"
                name="message"
                placeholder="Type your message..."
                className="p-2 pl-5 rounded-xl border-2 border-amber-400 outline-0 "
              ></textarea>
              <button className="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
