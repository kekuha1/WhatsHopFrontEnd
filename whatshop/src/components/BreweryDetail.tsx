import { Row, Card, CardBody, Col, CardSubtitle, CardText, CardTitle, CardLink, CardImg } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetBreweryById } from '../services/breweryservices';
import { GetBreweryImage } from '../services/imagesservice';

export function BreweryDetail() {
  const {id} = useParams<{id:string}>();

  const [detailsRoute, setDetailsRoute] = useState<any | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchDetails();
    }
  }, [id]);

  useEffect(() => {
    if (detailsRoute && detailsRoute.latitude && detailsRoute.longitude) {
      fetchImage();
    }
  }, [detailsRoute]);

  async function fetchDetails() {
    try {
      const response = await GetBreweryById(id ?? "");
      setDetailsRoute(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchImage() {
    try {
      const imageResponse = await GetBreweryImage(detailsRoute?.latitude.toString(), detailsRoute?.longitude.toString());
      if (imageResponse && typeof imageResponse === "object" && "url" in imageResponse) {
        setImageUrl(imageResponse.url);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      {detailsRoute !== null ? (
        <Row>
          <Col lg="12">
            <Card className='mapCard'>
              {imageUrl !== null && (
                <CardImg
                  top
                  width="100%"
                  style={{ maxWidth: "400px", height: "auto" }}
                  src={imageUrl}
                  alt="Brewery image"
                />
              )}
              <CardBody>
                <CardTitle tag="h5">{detailsRoute?.name}</CardTitle>
                <CardSubtitle className="brewDetailType" tag="h6">
                  Type: {detailsRoute?.brewery_type}
                </CardSubtitle>
                <CardLink href={detailsRoute?.website_url ?? ""} target="_blank">
                  Brewery Site
                </CardLink>
                <CardText>
                  <p>
                    <b>Phone:</b>
                    {formattedPhoneNumber(detailsRoute?.phone || "")}
                  </p>
                </CardText>
                <p>
                  <b>Address: </b>
                  {detailsRoute?.street}{" "}
                </p>
                <p>
                  <b>City: </b>
                  {detailsRoute?.city}
                </p>
                <p>
                  <b>State: </b>
                  {detailsRoute?.state}
                </p>
                <p>
                  <b>Postal Code: </b>
                  {detailsRoute?.postal_code}
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )}
