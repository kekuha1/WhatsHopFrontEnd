import { useContext } from "react";
import { Row, Col} from "reactstrap";
import BreweryContext from "../context/BreweryContext";
import { BreweryItem } from "./BreweryItem";


export function BucketListRoute() {
    const { breweries } = useContext(BreweryContext);
    console.log(breweries);
    return (
        <div className="bucketListCard">
            <Row>
                { breweries?
                breweries.map((brewery, index) => (
                <><Col lg="4" key={index}>
                    {/* <BreweryItem brewery={brewery} /> */}
                        <BreweryItem key={brewery.id} brewery={brewery} />
                    </Col></>
                )) || ""
                : <Col tag="h1">No Breweries found.</Col>
                }
            </Row>
</div>
)
}