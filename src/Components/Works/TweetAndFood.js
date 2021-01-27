import React from "react";
import styled from "styled-components";
import tweeterImg from "../../Images/tweet.webp";
import foodImg from "../../Images/food.webp";

const TweetAndFoodBlock = styled.div`
    .portfolio-item {
      margin-bottom: 20px;
      transition: 0.2s;
    }
    
    .works-text {
      text-align: center;
      margin-bottom: 20px;
      background-size: cover
    }
    
    .portfolio-item:hover {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1.1);
    }
    
    .card {
      border-radius: 20px;
      border: 2px solid #3f2aff;
    }
    
    .card img {
      border-radius: 20px;
    }

`

export const TweetAndFood = () => (
    <TweetAndFoodBlock>
        <div className="row">

            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="https://valdisnn.github.io/ws-tw/" target="_blank">
                        <img src={tweeterImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>

            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="https://valdisnn.github.io/food/" target="_blank">
                        <img src={foodImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>
        </div>

    </TweetAndFoodBlock>
)
