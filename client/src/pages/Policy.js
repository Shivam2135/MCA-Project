import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.png"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p style={{textAlign: 'justify'}}>
          At Local2Nation, we prioritize your privacy. 
          Our Privacy Policy outlines how we collect, use, and protect your personal information to ensure transparency and compliance with data protection laws. 
          Rest assured, we're committed to safeguarding your data and maintaining your trust. 
          For more details, please review our Privacy Policy.
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;