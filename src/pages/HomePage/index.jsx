import React from "react";
import Category from "../../components/CategoryList";
import Footer from "../../components/CategoryList/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Category />
      </div>
      <Footer/>
    </>
  );
};
export default HomePage;
