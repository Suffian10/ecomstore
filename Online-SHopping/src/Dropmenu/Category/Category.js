// Category.js
import React from 'react';
import './Category.css';
import Input from '../../components/Input';

export default function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={() => handleChange('')} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleChange} value="Shoes" title="Shoes" name="test" />
        <Input handleChange={handleChange} value="TV" title="TV" name="test" />
        <Input handleChange={handleChange} value="Smart Phones" title="Smart Phones" name="test" />
        <Input handleChange={handleChange} value="Watches" title="Watches" name="test" />
        <Input handleChange={handleChange} value="Speaker" title="Speaker" name="test" />
      </div>
    </div>
  );
}
