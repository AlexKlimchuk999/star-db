import React from "react"
import ItemDetails, {Record} from '../item-details/item-details'
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diadmeter"/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanets,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);