import logo from "../../assets/logo.webp"
import { FaGooglePlus ,FaFacebook,FaTwitter,FaGithub} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#906F5C] text-white">
  <div>
   <img src={logo} className="w-[180px]" alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
    <div className="flex gap-4 text-xl font-bold">
   <FaGooglePlus/>
   <FaFacebook/>
   <FaTwitter/>
   <FaGithub/>
    </div>
  </div> 
  <div>
    <span className="footer-title text-xl ">Help & Information</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Privacy Policy</a> 
    <a className="link link-hover">Terms & Conditions</a> 
    <a className="link link-hover">Products Return</a>
    <a className="link link-hover">Wholesale Policy</a>
  </div> 
  <div>
    <span className="footer-title text-xl">About us</span> 
    <a className="link link-hover">Pagination </a> 
    <a className="link link-hover">Terms & Conditions</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Accessories </a>
    <a className="link link-hover">Home Page </a>
  </div> 
  <div>
    <span className="footer-title">Categories</span> 
    <a className="link link-hover">Menu items</a> 
    <a className="link link-hover">Help Center</a> 
    <a className="link link-hover">Address Store</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">HomePage</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;