import { useState, useEffect } from 'react';
import StuffedToysItem from './StuffedToysItem';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import './StuffedToys.css';

const StuffedItem = () => {
  const [stuffed, setstuffed] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/1`);
    setstuffed(res.data);
  }, []);
  console.log(stuffed);

  return (
    <div className="container">
      <section className="S-Title">
        <div>
          <h3>-絨毛抱枕-</h3>
        </div>
      </section>
      <div className="d-flex justify-content-between">
        <div class="buttons">
          <button className="button1">絨毛抱枕</button>
          <button className="button1">療癒擺飾</button>
          <button className="button1">手指紓壓</button>
        </div>
        <div>
          <input
            className="btn-search-area "
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button class="btn-search">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex-wrapper1">
        {stuffed.map((stuffeditem) => {
          return (
            <Link to={`/ProductDetails/${stuffeditem.id}`}>
              <StuffedToysItem
                key={stuffeditem.id}
                image={PUBLIC_URL + stuffeditem.image}
                name={stuffeditem.name}
                price={stuffeditem.price}
              />
            </Link>
          );
        })}
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StuffedItem;