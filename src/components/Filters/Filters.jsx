import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../../redux/catalogSlice/catalogSlice';
import { StyledButton, StyledForm, StyledSelect } from './Filters.styled';

const priceOptions = [
  { value: '30', label: '30$' },
  { value: '40', label: '40$' },
  { value: '50', label: '50$' },
  { value: '60', label: '60$' },
  { value: '70', label: '70$' },
  { value: '80', label: '80$' },
  { value: '90', label: '90$' },
  { value: '100', label: '100$' },
  { value: '110', label: '110$' },
  { value: '120', label: '120$' },
  { value: '130', label: '130$' },
  { value: '140', label: '140$' },
  { value: '150', label: '150$' },
];

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({ value: '200' });
  const [brand, setBrand] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(500000);

  const filtersCombiner = event => {
    event.preventDefault();
    dispatch(changeFilters({ brand, selectedOption, from, to }));
  };
  return (
    <StyledForm onSubmit={filtersCombiner}>
      <div>
        <label htmlFor="#brand"> Car brand</label>
        <input
          name="brand"
          type="text"
          id="brand"
          onChange={e => setBrand(e.target.value)}
          placeholder="Enter the text"
        />
      </div>
      <div>
        <label htmlFor="#select">Price/ 1 hour</label>
        <StyledSelect
          id="select"
          defaultValue={selectedOption}
          onChange={option => setSelectedOption(option)}
          options={priceOptions}
          placeholder="To $"
        />
      </div>

      <div>
        <label htmlFor="#miles">Car mileage / km</label>
        <input
          name="from"
          type="number"
          min={0}
          step="10"
          onChange={e => setFrom(Number(e.target.value))}
          placeholder="from"
          style={{
            borderRadius: '12px 2px 2px 12px',
            borderRight: '1px solid lightgray',
          }}
        />
        <input
          name="to"
          type="number"
          min={0}
          step="10"
          onChange={e => setTo(Number(e.target.value))}
          placeholder="to"
          style={{
            borderRadius: '2px 12px 12px 2px',
            borderLeft: '1px solid lightgray',
          }}
        />
      </div>

      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default Filters;
