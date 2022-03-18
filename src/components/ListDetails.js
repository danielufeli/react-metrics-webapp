import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListDetailItem from './ListDetailItem';

const ListDetails = () => {
  const countries = useSelector((state) => state.countries);
  const { name } = useParams();

  return (
    <>
      {
        countries.map((country) => (
          country.name === name
            ? (
              <ListDetailItem
                country={country}
                key={country.id}
              />
            )
            : ''
        ))
      }
    </>
  );
};

export default ListDetails;
