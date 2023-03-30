import Brewery from '../model/Brewery';
import { Row, Card, CardBody, Col, CardSubtitle, CardText, CardTitle, CardLink } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetBreweryById } from '../services/breweryservices';


export function BreweryDetail() {
    const {id} = useParams<{id:string}>();

  const [detailsRoute, setDetailsRoute] = useState<Brewery | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      const response = await GetBreweryById(id ?? "");
      setDetailsRoute(response.data)
    
    }
    fetchEvent()
  }, [id]);

  const formattedPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
}
  
return (
     <div className="DetailsRoute">
      {detailsRoute !==null ? (
        <Row>
          <Col lg="12">
                <Card>
                <CardBody>
                  <CardTitle tag="h5">{detailsRoute?.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Type: {detailsRoute?.brewery_type}
                  </CardSubtitle>
                  <CardLink href={detailsRoute?.website_url ?? ''} target="_blank">
                  Brewery Site
                  </CardLink>
                  <CardText><p><b>Phone:</b>{formattedPhoneNumber(detailsRoute?.phone || '')}</p></CardText>
                  </CardBody>
                  <p><b>Address: </b>{detailsRoute?.street} </p>
                  <p><b>City: </b>{detailsRoute?.city}</p>
                  <p><b>State: </b>{detailsRoute?.state}</p>
                  <p><b>Postal Code: </b>{detailsRoute?.postal_code}</p>
              </Card>
              </Col>
              </Row>
      ):(
        <h1>loading...</h1>
      )
      }
    </div>
  )
}