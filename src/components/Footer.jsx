const Footer = () => {
    return (
      <footer className= "bottom-0 left-0 w-full bg-[#F6F6F6]  py-3 mt-2 mb-0">
        <h1 className="text-center text-3xl font-extrabold">Gadget Heaven</h1>
        <p className="text-center  text-sm font-bold  mt-2">Leading the way in cutting-edge technology and innovation.</p>
        <p className="border-b-2 border-solid sm:w-[700px] my-2 mx-auto"></p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[600px] text-center">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-1 ">Services</h3>
            <ul className="text-sm">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-1 ">Company</h3>
            <ul className="text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold mb-1 ">Legal</h3>
            <ul className="text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3 text-sm">
          <p>© 2023 Gadget Heaven. Leading the way in cutting-edge technology and innovation.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  