import React from 'react';
import "./Book.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },

  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },
  {
    id: 4,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },

  {
    id: 5,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },

  {
    id: 6,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "⭐⭐⭐⭐",
    type: "Paperback",
    cost: "₹ 269.00"
  },
];

const Book = (props) => {

  const {img, title, author, rating, type, cost} = props
  return (
    <article className="book">
      <img style={{marginLeft:"15%"}} src={img} alt="" />
      <h3>{title}</h3>
      <h5>{">"+author}</h5>
      <h5>{rating}</h5> 
      <h5>{type}</h5> 
      <h3 style={{color:"red"}}>{cost}</h3>
    </article>
  );
};

export default function BookList() {
  return (
    <div className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </div>
  );
};

