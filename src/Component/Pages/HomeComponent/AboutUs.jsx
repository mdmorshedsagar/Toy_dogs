import aboutPic from "../../../assets/aboutUs.jpg"

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center pt-[42px]">
            <div className="lg:pl-8">

<p className="text-xl py-5">ABOUT US</p>
<h1 className="text-6xl font-bold">Our company <br/>
We love pets</h1>
<p className="text-lg pt-6">Having a pet in the house has many physical and psychological <br/> benefits –  a combination that improves overall health and <br/>leads to a beautiful life.</p>
    </div>
            <div>
<img src={aboutPic}  />
            </div>
        </div>
    );
};

export default AboutUs;