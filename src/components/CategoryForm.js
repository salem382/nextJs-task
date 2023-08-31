"use client";

import React, { useState, useEffect } from 'react';

const CategoryForm = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [selectedParent, setSelectedParent] = useState('');
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // Fetch parent categories from API
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => {
        setParentCategories([...data.categoriesData.data.categories])
      });
  }, []);

  const handleParentChange = async (event) => {
    const parentId = event.target.value;
    setSelectedParent(parentId);
    if (parentId) {
      const selectedParent = parentCategories.find(category => category.id == parentId);
      console.log(selectedParent)
      setSubCategories(selectedParent.children || []);
    } else {
      setSubCategories([]);
    }
  };

  return (
    <div>
      <label htmlFor="selectedCategory">Select Parent Category:</label>
      <select id='selectedCategory' value={selectedParent} onChange={handleParentChange}>
        <option value="">Select</option>
        {parentCategories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      <br />

      {subCategories.length > 0 ? (
        <div>
          <label htmlFor='sub_category'>Select Sub-Category:</label>
          <select id='sub_category'>
            {subCategories.map(subCategory => (
              <option key={subCategory.id} value={subCategory.id}>{subCategory.name}</option>
            ))}
          </select>
        </div>
      ):<span>No Sub Category</span>}
    </div>
  );
};

export default CategoryForm;
