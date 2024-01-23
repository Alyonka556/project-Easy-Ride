import React from 'react';
import { LoadMoreBtn } from './LoadMore.styled';

const LoadMore = ({ clickLoadMore }) => {
  return <LoadMoreBtn onClick={clickLoadMore}>Load more</LoadMoreBtn>;
};

export default LoadMore;
