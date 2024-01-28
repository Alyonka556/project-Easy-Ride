import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from '../redux/operations';
import { selectAdverts, selectLoadMore } from '../redux/selector';

import Adverts from '../components/Adverts/Adverts';
import { StyledList } from '../components/Adverts/Adverts.styled';
import LoadMore from '../components/LoadMore/LoadMore';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { changeFilters, changeSelectFilter } from '../redux/slice';
import Select, { components } from 'react-select';
import { StyledButton, StyledForm, selectStyle } from './Pages.styled';

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const isLoadMore = useSelector(selectLoadMore);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const [makeFilter, setMakeFilter] = useState('');
  const [rentalPriceFilter, setRentalPriceFilter] = useState(null);
  const [fromMileageFilter, setFromMileageFilter] = useState(null);
  const [toMileageFilter, setToMileageFilter] = useState(null);

  const getSelectValue = selectedOp => {
    dispatch(changeSelectFilter(selectedOp?.value));
  };

  const uniqueOptions = [...new Set(adverts?.map(item => item?.make))];
  const arrOfOptions = uniqueOptions.sort();

  const uniquePrices = [...new Set(adverts?.map(item => item?.rentalPrice))];
  const arrOfPrices = uniquePrices.sort((a, b) => a - b);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoIosArrowUp
            size={18}
            label="Arrow up"
            color={'var(--black-filter)'}
          />
        ) : (
          <IoIosArrowDown
            size={18}
            label="Arrow down"
            color={'var(--black-filter)'}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  const filterSearch = event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const makeValue = formData.get('make');
    const rentalPriceValue = formData.get('rentalPrice');
    const fromMileageValue = formData.get('from');
    const toMileageValue = formData.get('to');

    setMakeFilter(makeValue || '');
    setRentalPriceFilter(Number(rentalPriceValue));
    setFromMileageFilter(Number(fromMileageValue));
    setToMileageFilter(Number(toMileageValue));

    dispatch(
      changeFilters({
        makeValue,
        rentalPriceValue,
        fromMileageValue,
        toMileageValue,
      })
    );
  };

  const filteredGallery = adverts
    .filter(advert => (makeFilter ? advert.make === makeFilter : true))
    .filter(advert =>
      rentalPriceFilter ? advert.rentalPrice === rentalPriceFilter : true
    )
    .filter(advert =>
      fromMileageFilter ? advert.mileage >= fromMileageFilter : true
    )
    .filter(item => (toMileageFilter ? item.mileage <= toMileageFilter : true));

  useEffect(() => {
    dispatch(getAdvertsThunk(page));
  }, [dispatch, page]);

  const onLoadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <>
        <StyledForm onSubmit={filterSearch}>
          <div>
            <label htmlFor="make">Car brand</label>
            <Select
              name="make"
              options={arrOfOptions.map(make => ({
                value: make,
                label: make,
              }))}
              placeholder="Enter the text"
              styles={selectStyle}
              onChange={getSelectValue}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </div>

          <div>
            <label htmlFor="rentalPrice">Price/ 1 hour</label>
            <Select
              options={arrOfPrices.map(price => ({
                value: price,
                label: price,
              }))}
              placeholder="To $"
              name="rentalPrice"
              styles={selectStyle}
              onChange={getSelectValue}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </div>

          <>
            <label>Сar mileage / km</label>

            <input
              type="number"
              placeholder="From"
              name="from"
              min={0}
              step="10"
              style={{
                borderRadius: '12px 2px 2px 12px',
                borderRight: '1px solid lightgray',
              }}
            />
            <input
              type="number"
              placeholder="To"
              name="to"
              min={0}
              step="10"
              style={{
                borderRadius: '2px 12px 12px 2px',
                borderLeft: '1px solid lightgray',
              }}
            />

            <StyledButton type="submit">Search</StyledButton>
          </>
        </StyledForm>
      </>
      {filteredGallery?.length === 0 && (
        <p>We have no cars matching your filter request</p>
      )}
      <StyledList>
        {filteredGallery?.map((advert, index) => (
          <Adverts advert={advert} key={index} />
        ))}
      </StyledList>
      {isLoadMore && <LoadMore clickLoadMore={onLoadMoreBtnClick} />}
    </>
  );
};

export default Catalog;
