import React from "react";
import styled from "styled-components";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../../../utils/formatNumberWithCommas";
interface SearchBarItemProps {
  id: number;
  name: string;
  like: number;
  ingredients: string[];
}

const SearchBarResultItem: React.FC<SearchBarItemProps> = ({
  id,
  name,
  like,
  ingredients,
}) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`/recipe?id=${id}&page=1`);
  };
  return (
    <SearchBarItemWrapper
      className='hover:bg-[#cdc8c0] hover:cursor-pointer'
      onClick={navigateToPage}>
      <div className='search-bar-item-header'>
        <div className='search-bar-item-name'>{name}</div>
        <div className='search-bar-item-like'>
          <FaStar fill={"#ffbb00"} />
          {formatNumberWithCommas(like)}
        </div>
      </div>
      <div className='search-bar-item-ingredients'>{`재료 : ${ingredients}`}</div>
    </SearchBarItemWrapper>
  );
};

const SearchBarItemWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    .search-bar-item-header{
        display: flex;
        align-items: center;
        .search-bar-item-name{
            margin-right: 10px;
            font-size: large;
            font-weight: 700;
        }
        .search-bar-item-like{
            font-size: small;
            display: flex;
        }
    }
    .search-bar-item-ingredients{
        margin-left: 2px;
    }
`;

export default SearchBarResultItem;
