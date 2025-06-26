import React, { useState, useEffect } from 'react';
import {FaArrowCircleUp} from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import "./Index.css";

function inComparator(product1, product2){
  if(product1.price > product2.price){
    return 1;
  }else{
    return -1;
  }
}
function decComparator(product1, product2){
  if(product1.price < product2.price){
    return 1;
  }else{
    return -1;
  }
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortDir, setSortDir] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrentCategory] = useState('All Categories');

  useEffect(() => {
    (async function () {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFiltered(
      products.filter((product) =>
        product.title.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, products]);

  /* arrenging the products */
  let filterSortedArr = [...filtered];
  if(sortDir != 0){
    //inc element 
    if(sortDir == 1){
      filterSortedArr = filterSortedArr.sort(inComparator);
    }else{
      filterSortedArr = filterSortedArr.sort(decComparator);
    }
  }

  //fetch thecategories->api->dynameic
  useEffect(()=>{
    (async function(){
      const response= await fetch('https://fakestoreapi.com/products/categories');
      const categoriesData = await response.json();
      console.log(categoriesData);
      setCategories(categoriesData);
    })();
  }, []);


  let filterSortedGroupByArr = filterSortedArr;
  if(currCategory != 'All Categories'){
    filterSortedGroupByArr = filterSortedGroupByArr.filter((product) => {
      return product.category == currCategory;
    })
  }

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
            <input
                className="search_input"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="icons_container">
                <FaArrowCircleUp style={{color: "white", fontSize: "large"}} onClick={() => {setSortDir(1)}} />
                <FaArrowCircleDown style={{color: "white", fontSize: "large"}} onClick={() => {setSortDir(-1)}} />
            </div>
        </div>
        <div className="categories_wrapper">
          <button className="category_option" onClick={() => {setCurrentCategory('All Categories');}} >All Categories</button>
          {categories.map((category) => {
            return <button className="category_option" onClick={() => {setCurrentCategory(category);}}>{category}</button>;
          })}
        </div>
      </header>
      
      <main className="product_wrapper">
        {filterSortedGroupByArr.length > 0 ? (
          filterSortedGroupByArr.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} className="product_image" />
              <div className="product_meta">
                <h2 className="product_title">{product.title}</h2>
                <p className="price">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </main>
    </>
  );
}

export default Home;