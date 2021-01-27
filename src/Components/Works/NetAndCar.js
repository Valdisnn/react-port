import React from "react";
import styled from "styled-components";
import netclicksImg from "../../Images/netclicks.webp";
import citycarImg from "../../Images/car.webp";

const NetAndCarBlock = styled.div`
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

export const NetAndCar = () => (
    <NetAndCarBlock>
        <div className="row">

            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="https://valdisnn.github.io/films/" target="_blank">
                        <img src={netclicksImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>

            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="http://citycarnn.ru/" target="_blank">
                        <img src={citycarImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>
        </div>

    </NetAndCarBlock>
)
