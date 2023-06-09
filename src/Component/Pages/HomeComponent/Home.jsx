import useTitle from "../../../hooks/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import OurBlog from "./OurBlog";
import ShopCategory from "./ShopCategory";


const Home = () => {
    useTitle("home")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <AboutUs></AboutUs>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;