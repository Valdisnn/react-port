import React from "react";
import styled from "styled-components";
import {UserKit} from "./UserKit";
import {WorksKit} from "./WorksKit";
import {UserContacts} from "./UserContacts";

const DescriptionBlock = styled.div`
    .description-block {
        margin-top: 5%; 
    }
    
`

export const Description = () => (
    <DescriptionBlock>
        <div style={{marginTop: '5%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <UserKit/>
                    </div>

                    <div className="col-sm-8">
                        <WorksKit/>
                        <UserContacts/>
                    </div>
                </div>
            </div>
        </div>
    </DescriptionBlock>
)
