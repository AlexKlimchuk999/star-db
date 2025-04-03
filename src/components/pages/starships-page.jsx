import React from "react";
import { StarshipList } from '../sw-components';
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
    const navigate = useNavigate(); // Вместо history.push()

    return (
        <StarshipList onItemSelected={(itemId) => navigate(itemId)}/>
    )
}

export default StarshipsPage;