import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ac9ctjn",
        "template_cnrcrvj",
        form.current,
        "LtFPszaepLXoWwmhR"
      )

      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message Sent Successfully");
  };

  return (
    <div className="h-screen bg-gray-800">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center font-bold pb-8 text-4xl md:text-5xl lg:text-6xl">
            Contact Me
          </h1>
          <form
            className="flex flex-col items-center"
            ref={form}
            onSubmit={sendEmail}>
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  name="to_name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                  required/>
                <input
                  id="email"
                  name="to_email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                  required/>
              </div>
              {/* <input
            id="subject"
            name='subject'
            type="text"
            placeholder="Subject"
            className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
          /> */}
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue={""}
                required/>
            </div>
            <button
              type="submit"
              value="Send"
              className="border-2 text-md mt-5 rounded-md border-none py-2 px-4 bg-green-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
