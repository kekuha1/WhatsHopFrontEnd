import { Row, Card, CardBody, Col, CardSubtitle, CardText, CardTitle, CardLink, CardImg } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetBreweryById } from '../services/breweryservices';
import { GetBreweryImage } from '../services/imagesservice';
import { fetchGooglePlacesRequest } from '../services/googleplacesservice';
import { Places } from '../model/Places';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export function BreweryDetail() {
  const {id} = useParams<{id:string}>();

  const [detailsRoute, setDetailsRoute] = useState<any | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [googlePlacesData, setGooglePlacesData] = useState<Places | null>(null);


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

useEffect(() => {
    if (detailsRoute?.name && detailsRoute?.city && detailsRoute?.state) {
      fetchGooglePlaces(detailsRoute.name, detailsRoute.city, detailsRoute.state);
    }
  }, [detailsRoute]);

   async function fetchGooglePlaces(name: string, city: string, state: string) {
    try {
      const data = await fetchGooglePlacesRequest(name, city, state);
      setGooglePlacesData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

function getGoogleMapsLink(name:string, city: string, state_province: string): string {
  const url = `https://www.google.com/maps/search/?api=1&query=${name},${city},${state_province}`;
  return url;
}

function renderRatingStars(rating: number) {
  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const filledStars = Array(filledStarsCount).fill(<FaStar color="#ffc107" />);
  const halfStar = hasHalfStar && <FaStarHalf color="#ffc107" />;
  const emptyStars = Array(5 - Math.ceil(rating)).fill(<FaStar color="#e4e5e9" />);

  return [...filledStars, halfStar, ...emptyStars];
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
                <p>
                  <b>Open Now: </b>
                  {googlePlacesData?.candidates[0]?.opening_hours?.open_now ? "Yes" : "No"}
                </p>
                <p>
                  <b>Google Rating: </b>
                  {googlePlacesData?.candidates[0]?.rating} {googlePlacesData?.candidates[0]?.rating && renderRatingStars(googlePlacesData.candidates[0].rating)}
                </p>
                  <p>
                  <b>Google Maps: </b>
                  {googlePlacesData?.candidates[0]?.geometry?.location && (
                    <a
                      href={getGoogleMapsLink(
                        detailsRoute?.name, detailsRoute?.city,detailsRoute?.state
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  )}
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
