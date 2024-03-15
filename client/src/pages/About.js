import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Local2Nation"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2" style={{textAlign: 'justify'}}>
          Welcome to Local2Nation, your ultimate destination for connecting local artisans with a global audience. 
          At Local2Nation, we're passionate about showcasing the unique craftsmanship and culture of local communities, 
          offering a curated selection of handcrafted treasures and artisanal products from around the world. 
          Whether you're searching for one-of-a-kind gifts or looking to support small businesses, Local2Nation is your go-to online marketplace. 
          Join us in celebrating diversity, creativity, and the beauty of handmade goods. Shop local, connect globally with Local2Nation today!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;