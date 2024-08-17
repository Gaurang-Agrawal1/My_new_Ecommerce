import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus m-5">
        <h1 className="bg-dark p-2 mt-5 text-white text-center"> CONTACT US </h1>
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 m-5">
          <p> Privacy policy 1</p>
          <p> Privacy policy 2</p>
          <p> Privacy policy 3</p>
          <p> Privacy policy 4</p>
          <p> Privacy policy 5</p>
          <p> Privacy policy 6</p>
          <p> Privacy policy 7</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
