import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurBlog from "./OurBlog";
import ShopCategory from "./ShopCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopCategory></ShopCategory>
            <AboutUs></AboutUs>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;