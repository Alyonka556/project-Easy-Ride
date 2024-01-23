import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from '../redux/operations';
import { selectAdverts, selectLoadMore } from '../redux/selector';

import Adverts from '../components/Adverts/Adverts';
import { StyledList } from '../components/Adverts/Adverts.styled';
import LoadMore from '../components/LoadMore/LoadMore';

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const isLoadMore = useSelector(selectLoadMore);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAdvertsThunk(page));
  }, [dispatch, page]);

  const onLoadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <StyledList>
        {adverts?.map((advert, index) => (
          <Adverts advert={advert} key={index} />
        ))}
      </StyledList>
      {isLoadMore && <LoadMore clickLoadMore={onLoadMoreBtnClick} />}
    </>
  );
};

export default Catalog;
