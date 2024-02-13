import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

// Start Page of Website
import StartPage from "./components/StartPage/StartPage";

// Feature: Register Seller
import Seller from "./components/Seller/Seller";
import SellerList from "./components/Seller/SellerList";
import SellerForm from "./components/Seller/SellerForm";

// Feature: Manage Properties
import Property from "./components/Property/Property";
import PropertyList from "./components/Property/PropertyList";
import SellerPropertyFrom from "./components/Seller/SellerPropertyForm";
import ConfirmListing from "./components/Seller/ConfirmListing";

// Feature: Register Buyer
import Buyer from "./components/Buyer/Buyer";
import BuyerForm from "./components/Buyer/BuyerForm";
import BuyerList from "./components/Buyer/BuyerList";

// Feature: Import Nav
import { Nav } from "./components/Nav/Nav";

//About Section
import About from "./components/About/About";


//Upload and confirm a property
import SellerPropertyForm from "./components/Seller/SellerPropertyForm";
import Person from "./components/Person/Person";
import LoginSignup from "./components/LoginSignup/LoginSignup";


import BuyerDisplay from "./components/Buyer/BuyerDisplay"





function App() {
  return (

    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<LoginSignup />} />

        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/sellaproperty" element={<SellerPropertyForm />} />
        <Route path="/sellaproperty/confirm" element={<ConfirmListing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/Buyer" element={<Buyer />} />

        <Route path="/Seller" element={<Seller />} />
        <Route path="/SellerForm" element={<SellerForm />} />

        <Route path="sellproperty" element={<SellerPropertyFrom />} />
        <Route path="sellproperty/confirm" element={<ConfirmListing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/buyerForm" element={<BuyerForm />} />
        <Route path="/buyerList" element={<BuyerList />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/sellerLiist" element={<SellerList />} />
        <Route path="/person" element={<Person />} />
      </Routes>

          <Route path="/BuyerDisplay" element={<BuyerDisplay/>} />

        </Routes>
        

    </div>
  );
}
export default App;