import React from "react";
import styled from "styled-components";
import spaceImg from "../../Images/spacex.webp";
import relaxImg from "../../Images/relax.webp";

const SpacexAndRelaxBlock = styled.div`
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

export const SpacexAndRelax = () => (
    <SpacexAndRelaxBlock>

        <div className="row">
            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="https://github.com/Valdisnn/space-x" target="_blank">
                        <img src={spaceImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>

            <div className="col-sm portfolio-item">
                <div className="card bg-dark text-white">
                    <a href="https://valdisnn.github.io/relax-live/" target="_blank">
                        <img src={relaxImg} className="card-img" alt="Jeden z projektů"/>
                    </a>
                </div>
            </div>
        </div>

    </SpacexAndRelaxBlock>
)
