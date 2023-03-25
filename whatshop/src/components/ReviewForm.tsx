import { useContext, useState } from "react";
import { MongoClient } from "mongodb";
import ReviewsContext from "../context/ReviewsContext";

interface IReviewFormProps {
  brewId: string;
  rating: number;
  beer: string;
  atmosphere: string;
  comment: string;
}

export function ReviewForm () {
  const [fullName, setFullName] = useState<string>("");
  const [brewId, setbrewId] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [atmosphere, setAtmosphere] = useState<string>("");
  const [beer, setBeer] = useState<string>("");
  const [rating, setRating] = useState<string>("");  
  const {addReviewHandler}= useContext(ReviewsContext)
  //navigate to where ever; const navigate = useNavigate() 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addReviewHandler({fullName,comment, atmosphere, beerSelection: beer, rating:+rating })
    // navigate(<endpoint>)
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e)=>setRating(e.target.value)}
          />
        </label>
        <br />
        <label>
          Beer:
          <input
            type="text"
            name="beer"
            value={beer}
            onChange={(e)=>setBeer(e.target.value)}
          />
        </label>
        <br />
        <label>
          Atmosphere:
          <input
            type="text"
            name="atmosphere"
            value={atmosphere}
            onChange={(e)=>setAtmosphere(e.target.value)}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            name="comment"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return renderForm();
};

export default ReviewForm;