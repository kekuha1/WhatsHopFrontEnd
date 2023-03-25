import { useContext, useState } from "react";
// import { MongoClient } from "mongodb";
import ReviewsContext from "../context/ReviewsContext";
import Review from '../model/Review';

interface IReviewFormProps {
  brewery_id: string | undefined;
}

export function ReviewForm ({brewery_id} : IReviewFormProps) {
  // const [brewery_id, setBreweryId] = useState<string>()
  const [fullName, setFullName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [atmosphere, setAtmosphere] = useState<string>("");
  const [beer, setBeer] = useState<string>("");
  const [rating, setRating] = useState<string>("");  
  const {addReviewHandler}= useContext(ReviewsContext)
  //navigate to where ever; const navigate = useNavigate() 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addReviewHandler({brewery_id, fullName,comment, atmosphere, beerSelection: beer, rating:+rating })
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
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            pattern="[1-5]"
            title="Please enter a number between 1 and 5."
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