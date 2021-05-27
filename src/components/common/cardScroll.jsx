import React, { useEffect, useState } from 'react';
import { getServices } from '../../services/getService';
import { getCategories } from '../../services/categoryService';
import CardScrollUnit from './cardScrollUnit';

const CardScroll = ({ name, slug, which, category }) => {
  const [useService, setService] = useState([]);
  const [useCategories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategories();
      setCategories(data);
    }
    fetchCategories();
    async function fetchServices() {
      const { data } = await getServices(category);
      setService(data);
    }
    fetchServices();
  }, [category]);

  let data;

  if (which === 'useCategories') data = useCategories;
  else data = useService;

  return (
    <div className="mt-6">
      <h3 className={name ? 'p-4 text-gray-700 font-bold text-md uppercase select-none sm:-ml-4' : 'hidden'}>{name}</h3>
      <div className="overflow-x-auto">
        <div className="-ml-4 inline-flex sm:flex sm:flex-wrap sm:flex-grow">
          {data
            .sort(function (a, b) {
              return a.weight - b.weight;
            })
            .map((cat) => {
              if (cat.featured) {
                return <CardScrollUnit name={cat.i18n} slug={slug} image={cat.image} key={cat._id} />;
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default CardScroll;
