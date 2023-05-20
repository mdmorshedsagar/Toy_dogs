import { useState,useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubtoyCards from './SubtoyCards';
import AOS from 'aos';
const ShopCategory = () => {
  const [tabs, setTabs] = useState([]);
  const [category, setCategory] = useState("Teddy");
  
  useEffect(() => {
    AOS.init();
    fetch(`http://localhost:5000/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setTabs(result);
      });
  }, [category]);
 
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };
 
 
    return (
        <div className='my-[40px]'>
          <h1 className='text-center text-5xl font-bold py-8'>Shop by CAtegorys</h1>
           
  <Tabs>
    <TabList classname="py-8 ">
      <Tab  onClick={() => handleCategoryClick("Teddy")} >Tedy bear</Tab>
      <Tab onClick={() => handleCategoryClick("Horse")}>Horse</Tab>
      <Tab onClick={() => handleCategoryClick("Cat")}>Cat</Tab>
    </TabList>

    <TabPanel>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
     {
      tabs.map(tab => <SubtoyCards key={tab._id} tab={tab}></SubtoyCards> )
     }
     </div>
    
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
     {
      tabs.map(tab => <SubtoyCards key={tab._id} tab={tab}></SubtoyCards> )
     }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
     {
      tabs.map(tab => <SubtoyCards key={tab._id} tab={tab}></SubtoyCards> )
     }
     </div>
    </TabPanel>
    
  </Tabs>

        </div>
    );
};

export default ShopCategory;