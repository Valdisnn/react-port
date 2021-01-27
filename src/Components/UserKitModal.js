import React from "react";
import styled from "styled-components";

export const UserKitModalBlock = styled.div`
    .modal-footer button {
      width: 100%;
    }
    
    
    .modal-footer a {
      width: 100%;
    }
    
    .media img {
      max-width: 100px;
      max-height: 100px;
    }
    
    .modal-content {
      border-radius: 30px;
      border: none;
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
    
    .btn-secondary {
      background-color: #ffffff;
      border-color: #3f2aff;
      transition: 0.5s;
      color: black;
      outline: none !important;
    }
    
    .btn-secondary:hover {
      background-color: #3f2aff;
      border-color: #3f2aff;
      color: white;
      outline: none !important;
    }
    
    .btn-secondary:active {
      background-color: #3f2aff;
      border-color: #3f2aff;
      color: white;
      outline: none !important;
    }
    
    span {
      transition: 0.5s;
    }
    
    .modal-img {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2%;
    }
    
    
    .media-body {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    
    .skills-on{
      text-align: left;
    }
    
    .skills-off{
      text-align: left;
    }
    
    .point-color {
      font-size: 30px;
      color: #3f2aff;
    }
`

export const UserKitModal = () => (
    <UserKitModalBlock>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Dovednosti</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="media">

                            <div className="container">
                                <div className="row">
                                    <div className="media-body">
                                        <div className="col-sm">
                                            <h5 className="mt-0 skills-on"><span className="point-color">•</span> Mé
                                                schopnosti :</h5>

                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">HTML5, CSS3, SCSS</li>
                                                <li className="list-group-item">JS ES6+, TypeScript</li>
                                                <li className="list-group-item">Angular 9+</li>
                                                <li className="list-group-item">NodeJS, ExpressJS</li>
                                            </ul>

                                        </div>
                                        <div className="col-sm">
                                            <h5 className="mt-0 skills-off"><span className="point-color">•</span> V
                                                procesu studia :</h5>

                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">LESS, SASS</li>
                                                <li className="list-group-item">React + Redux</li>
                                                <li className="list-group-item">PHP, Laravel</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Zavřít</button>
                        <a className="btn btn-primary" href="https://t.me/Valdisnn" target="_blank">Můj Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    </UserKitModalBlock>
)
