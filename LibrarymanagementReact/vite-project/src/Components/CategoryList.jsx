
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://localhost:7190/api/Category');
            setCategories(response.data);
        };
        fetchCategories();
    }, []);

    const addCategory = async (e) => {
        e.preventDefault();
        const newCategory = { name, description };
        await axios.post('https://localhost:7190/api/Category', newCategory);
        setCategories([...categories, newCategory]);
        setName('');
        setDescription('');
    };
  return (
    <div>
        <h1>Categories</h1>
            <form onSubmit={addCategory}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Category Name"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Add Category</button>
            </form>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
    </div>
  )
}

export default CategoryList
