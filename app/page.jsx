"use client";
import { useState } from "react";
import Navigation from "@/app/Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "@/db/data"; //my little database
import Card from "./components/Card";

export default function Home() {
  const [selectedcategoty, setSelectedcategoty] = useState(null);
  const [query, setQuery] = useState("");

  //input filterf

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //radio buttons filter
  const handleChange = (e) => {
    setSelectedcategoty(e.target.value);
  };

  // recommended buttons filter
  const handleClick = (e) => {
    setSelectedcategoty(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filtered = products;

    //input
    if (query) {
      filtered = filteredProducts;
    }
    //selected Filter
    if (selected) {
      filtered = filtered.filter(
        ({ category, title, company, color, newPrice }) =>
          category === selected ||
          title === selected ||
          company === selected ||
          color === selected ||
          newPrice === selected
      );
    }
    return filtered.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  };

  const result = filteredData(products, selectedcategoty, query);
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}  />
      <Recommended handleClick={handleClick}  />
      <Products result={result}   />
    </>
  );
}
