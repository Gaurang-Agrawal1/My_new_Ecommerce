import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-7">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-3">
            <h1>We Cap-Commerce</h1>
           allows users to browse and purchase a wide range of products online, offering features like product search, filtering by category and price, secure online payments, and personalized user accounts for a seamless shopping experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
