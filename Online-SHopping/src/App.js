import { useState } from 'react';
import './App.css';
import products from './db/data'; // Database
import Card from './components/Card';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './Navigations/Nav';
import SignUp from './pages/SignUp';
import LogInPage from './pages/LogInPage';
import Cart from './Cart/Cart';
import Confirm from './confirm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleCategoryChange = (categoryId) => {
    console.log('handleCategoryChange triggered with categoryId:', categoryId);
    setSelectedCategory(categoryId);
  }
  const handleClick = (value) => {
    console.log('handleClick triggered with value:', value);
    setSelectedCategory(value);
  };


  const filtereditems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const result = filteredData(products, selectedCategory, query);

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filtereditems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/Products' element={<Shop handleChange={handleCategoryChange} handleClick={handleClick} query={query} result={result} handleInputChange={handleInputChange} />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={< LogInPage />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/confirm' element={<Confirm />} />
      </Routes>
    </>
  );
}

export default App;
