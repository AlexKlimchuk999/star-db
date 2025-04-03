import React from "react";
import Row from "../row/row";
import { PersonDetails, PersonList } from '../sw-components';
import { useNavigate, useParams } from "react-router-dom";

const PeoplePage = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    
    return (
        <Row
            left={<PersonList onItemSelected={(itemId) => navigate(`/people/${itemId}`)} />}
            right={<PersonDetails itemId={id} />}
        />
    );
};

export default PeoplePage;