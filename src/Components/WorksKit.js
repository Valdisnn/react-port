import React from "react";
import styled from "styled-components";
import {SpacexAndRelax} from "./Works/SpacexAndRelax";
import {FitAndDistance} from "./Works/FitAndDistance";
import {NetAndCar} from "./Works/NetAndCar";
import {TweetAndFood} from "./Works/TweetAndFood";
import {ElAndBio} from "./Works/ElAndBio";
import {AwitoAndCalc} from "./Works/AwitoAndCalc";
import {ItunesAndCinema} from "./Works/ItunesAndCinema";
import {ThreeAndNewcity} from "./Works/ThreeAndNewcity";
import {HeyuAndWebcalc} from "./Works/HeyuAndWebcalc";

const WorksKitBlock = styled.div`
    .jumbotron {
      border-radius: 30px;
    }
    
    .works-text {
      text-align: center;
      margin-bottom: 20px;
      background-size: cover
    }
`

export const WorksKit = () => (
    <WorksKitBlock>
        <div className="jumbotron">
            <h1 className="text-uppercase works-text">Moje práce</h1>
            <div className="container">
                <SpacexAndRelax/>
                <FitAndDistance/>
                <NetAndCar/>
                <TweetAndFood/>
                <ElAndBio/>
                <AwitoAndCalc/>
                <ItunesAndCinema/>
                <ThreeAndNewcity/>
                <HeyuAndWebcalc/>
            </div>
        </div>

    </WorksKitBlock>
)
