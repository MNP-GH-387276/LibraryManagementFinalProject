
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get('https://localhost:7190/api/Book');
            setBooks(response.data);
        };

        const fetchAuthors = async () => {
            const response = await axios.get('https://localhost:7190/api/Book');
            setAuthors(response.data);
        };

        const fetchCategories = async () => {
            const response = await axios.get('https://localhost:7190/api/Book');
            setCategories(response.data);
        };

        fetchBooks();
        fetchAuthors();
        fetchCategories();
    }, []);

    const addBook = async (e) => {
        e.preventDefault();
        const newBook = {
            title,
            description,
            publicationYear,
            authorId,
            categoryId
        };
        await axios.post('/api/books', newBook);
        setBooks([...books, newBook]);
        setTitle('');
        setDescription('');
        setPublicationYear('');
        setAuthorId('');
        setCategoryId('');
    };


  return (
    <div>
       <h1>Books</h1>
            <form onSubmit={addBook}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input
                    type="number"
                    value={publicationYear}
                    onChange={(e) => setPublicationYear(e.target.value)}
                    placeholder="Publication Year"
                />
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} required>
                    <option value="">Select Author</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button type="submit">Add Book</button>
            </form>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - {book.description} ({book.publicationYear}) - 
                        Author: {book.author.name} - Category: {book.category.name}
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default BookList
