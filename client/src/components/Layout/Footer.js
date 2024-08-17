import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <div className="footer">
    //   <h1 className="text-center">A website by Gopal + Gaurang + Krishna (All right resrverd) </h1>
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    // </div>
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h3>Shop On our Website</h3>
        <p>DownLoad Our App for Android and ios mobile phone</p>
        <div className="applogo">
          <img src="https://github.com/Gaurang1602/Books-Recommendation-Store/blob/main/play-store.png?raw=true" />
          <img src="https://github.com/Gaurang1602/Books-Recommendation-Store/blob/main/app-store.png?raw=true" />
        </div>
      </div>
      <div className="footer-col-2">    
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-AF1wPkEBx7arnaborTtiDb8THyG9cNFCA&usqp=CAU" alt srcSet />
        <p>Our purpose Is To Sustainably Make the pleasure and 
          Benefits of our Products to the Many.</p>
      </div>
      <div className="footer-col-3">
        <h3>Useful Links</h3>
        <ul >
          <li>Coupons</li>
          <li>Bolg Post</li>
          <li>Return Policy</li>
          <li>Join Affiliate</li>
          <li><Link to="/about" className="text-white no-underline hover:text-gray-300">About</Link></li>
          <li><Link to="/policy" className="text-white no-underline hover:text-gray-300">Privacy Policy</Link></li>
          <li><Link to="/contact" className="text-white no-underline hover:text-gray-300" >Contact</Link></li>
        </ul>
      </div>
      <div className="footer-col-4">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagran</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="Copyright">Copyright 2024 - © Shopping-Cart</p>
  </div>
</div>

  );
};

export default Footer;
