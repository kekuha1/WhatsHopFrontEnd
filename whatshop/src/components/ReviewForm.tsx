import { FormEvent, useContext, useState } from "react";
import Review from "../model/Review";
import { addReview } from "../services/ReviewServices";
// import { MongoClient } from "mongodb";

interface IReviewFormProps {
  brewery_id: string | undefined;
  onAdd?: (review: Review) => void
}

export function ReviewForm ({brewery_id, onAdd} : IReviewFormProps) {
  // const [brewery_id, setBreweryId] = useState<string>()
  const [fullName, setFullName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [atmosphere, setAtmosphere] = useState<string>("");
  const [beer, setBeer] = useState<string>("");
  const [rating, setRating] = useState<string>("");  
  //navigate to where ever; const navigate = useNavigate() 

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(brewery_id)
    addReview({brewery_id, fullName,comment, atmosphere, beerSelection: beer, rating:+rating }).then(onAdd);
    setFullName("")
    setComment('')
    setAtmosphere('')
    setRating('')
    setBeer('')
  }

  
    return (
      <section>
      <form className="renderForm" onSubmit={handleSubmit}>
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
  <br/>
        <label>
          Rating
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
          <br/>
          <textarea
            name="comment"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </section>
    );
  };
  


export default ReviewForm;