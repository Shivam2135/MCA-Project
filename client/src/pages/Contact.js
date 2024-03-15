import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2" style={{textAlign: 'justify'}}>
          Got a question, feedback, or just want to say hello? 
          We're here to help! Reach out to us at Local2Nation for any inquiries, assistance, or collaboration opportunities. 
          Our dedicated team is committed to providing you with exceptional service and ensuring your experience with us is seamless. 
          Whether you prefer email, phone, or social media, we're always ready to lend an ear and assist you in any way we can. 
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        
      </div>
    </Layout>
  );
};

export default Contact;