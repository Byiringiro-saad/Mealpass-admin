import * as React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";

import { AiOutlineRight } from "react-icons/ai";

import Box from "./box";

const Container = ({ restaurant }) => {
  const push = useNavigate();
  const { pathname } = useLocation();

  const goToRestaurant = () => {
    push(`${pathname}/${restaurant._id}`);
  };

  return (
    <Content>
      <div className="title">
        <p>{restaurant.businessName}</p>
        <p onClick={goToRestaurant}>
          See All <AiOutlineRight />
        </p>
      </div>
      <div className="container">
        {restaurant.dishes.length > 0 ? (
          restaurant.dishes.map((product, index) => (
            <div className="scroll" key={index}>
              <Box product={product} restaurant={restaurant._id} />
            </div>
          ))
        ) : (
          <p className="no_dishes">No dishes yet</p>
        )}
      </div>
    </Content>
  );
};

const Content = styled.div`
  height: auto;
  width: auto;

  .container {
    width: auto;
    height: 200px;
    margin: 10px 0 0 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    .no_dishes {
      text-align: center;
      text-transform: capitalize;
      font-size: small;
    }

    .scroll {
      width: auto;
      height: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .scroll::-webkit-scrollbar {
      display: none;
    }
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .title {
    width: 100%;
    height: 20px;
    margin: 15px 0 0 5px;
    padding: 0 10px 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    p:first-child {
      text-transform: capitalize;
      font-weight: 700;
    }
  }
`;

export default Container;
