const Footer = () => {
    return (
      <footer className= "bottom-0 left-0 w-full bg-gray-800 text-white py-10 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul>
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>© 2023 Gadget Heaven. Leading the way in cutting-edge technology and innovation.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  