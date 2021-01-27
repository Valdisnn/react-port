import React from "react";
import styled from "styled-components";
import telegramImg from "../Images/telegram.webp";
import vkImg from "../Images/vk.webp";
import twitterImg from "../Images/twitter-icon.webp";
import emailImg from "../Images/email.webp";
import phoneImg from "../Images/phone-call.webp";

const UserContactsBlock = styled.div`
    .jumbotron{
      border-radius: 30px;
    }
    
    .icons-link{
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-bottom: 20px;
      transition: 1s;
    }
    
    .user-contact-img {
      max-width: 70px;
      max-height: 70px;
    }

`

export const UserContacts = () => (
    <UserContactsBlock>
        <div className="jumbotron">
            <h1 className="display-4">Moje kontakty</h1>
            <p className="lead">Kontaktujte mě jedním z následujících způsobů :</p>
            <hr className="my-4"/>
            <div className="container">
                <div className="row">
                    <a href="https://t.me/Valdisnn" className="col-sm icons-link" target="_blank">
                        <img style={{maxWidth: '70px', maxHeight: '70px'}} src={telegramImg} alt="telegram"/>
                    </a>
                    <a href="https://vk.com/juravloff" className="col-sm icons-link" target="_blank">
                        <img style={{maxWidth: '70px', maxHeight: '70px'}} src={vkImg} alt="tel"/>
                    </a>
                    <a href="https://twitter.com/Vladiknn052" className="col-sm icons-link" target="_blank">
                        <img style={{maxWidth: '70px', maxHeight: '70px'}} src={twitterImg} alt="tel"/>
                    </a>
                    <a href="mailto:valdisnn19@yandex.ru" className="col-sm icons-link" target="_blank">
                        <img style={{maxWidth: '70px', maxHeight: '70px'}} src={emailImg} alt="email"/>
                    </a>
                    <a href="tel:+79108800910" className="col-sm icons-link" target="_blank">
                        <img style={{maxWidth: '70px', maxHeight: '70px'}} src={phoneImg} alt="tel"/>
                    </a>
                </div>
            </div>
        </div>
    </UserContactsBlock>
)
