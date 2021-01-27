import React from "react";
import styled from "styled-components";
import {UserKitModal} from "./UserKitModal";

export const UserKitBlock = styled.div`
    .jumbotron {
      border-radius: 30px;
    }
    
    .sticky-block {
      position: sticky !important;
      position: -webkit-sticky !important;
      top: 5%;
    }
    
    .lead button {
      width: 100%;
    }
    
    .btn-primary {
      background-color: #3f2aff;
      border-color: #3f2aff;
      transition: 0.5s;
      outline: none !important;
    }
    
    .btn-primary:hover {
      background-color: #ffffff;
      border-color: #3f2aff;
      color: black;
      outline: none !important;
    }
    
    .btn-primary:active {
      background-color: #ffffff;
      border-color: #3f2aff;
      color: black;
      outline: none !important;
    }
    
    @media (max-width: 768px) {
      .user-hello-text {
        font-size: 30px;
      }
    }
    
    @media (max-width: 540px) {
      .user-hello-text {
        font-size: 3.5rem;
      }
    }
    
    
    @media (max-width: 280px) {
      .user-hello-text {
        font-size: 2.5rem;
      }
    }
    
    @media (width: 667px) {
      .user-hello-text {
        font-size: 1.1rem;
      }
    
      .user-second-text{
        font-size: 10px;
      }
    
      .user-third-text{
        font-size: 10px;
      }
    }
`

export const UserKit = () => (
    <UserKitBlock>
        <div className="jumbotron sticky-block">
            <h1 className="display-4 user-hello-text">Vítejte na mých stránkách !</h1>
            <p className="lead user-second-text">Zde se se mnou můžete setkat, vidět příklady práce a také mě kontaktovat,
                pokud chcete
                spolupracovat</p>
            <hr className="my-4"/>
            <p className="user-third-text">Kliknutím na tlačítko níže zobrazíte mé dovednosti a najdete mě na
                Telegram</p>
            <p className="lead">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Přechod
                </button>
            </p>
        </div>
        <UserKitModal/>
    </UserKitBlock>
)
