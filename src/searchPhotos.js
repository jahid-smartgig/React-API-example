import React ,{ useState } from "react";
import {Container , Row , Col}from 'react-bootstrap';

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  // console.log(query);

  const searchImage = (e) => {
	    // e.preventDefault();
	    setQuery(e.target.value);
	   	fetch(`https://api.unsplash.com/photos/?query=dog&client_id=Cw3Jo2No-68KpXvj0n6Nk4bDbfA6daChIlDF6mAmAPw`)
	    .then(res => res.json())
	    .then((data)=>setPics(data))
	    
}
  return (
    <>
	 	<form className="form"> 
	        <label className="label" htmlFor="query"> 
	          {" "}
	           📷
	        </label>
	        <input
	          type="text"
	          name="query"
	          className="input"
	          placeholder={`Try "dog" or "apple"`}
	          value={query}
    		  onChange={(e) => searchImage(e)}
	        />
	    </form>
	    <Container>
	    	 <Row >

	       			 {
			          pics.map((pic) =>
			          	
				            <Col xs key={pic.id}>
					              <img
					                className="card--image"
					                alt={pic.alt_description}
					                src={pic.urls.full}
					                width="100%"
					                height="100%"
					              />
				            </Col>
          			)
        		 }

			</Row>
	    </Container>

    </>
  );
}