import React, { useState } from "react";
import "./Mainrate.css";

import Thankyou from "./Thankyou";
import Rate from "./Rate";

function MainRate() {
	const [showThanksPage, setShowThanksPage] = useState(false);
	const [rating, setRating] = useState(null);
	return (
		<div className="mainrate">
			{showThanksPage ? (
				<Thankyou rating={rating} />
			) : (
				<Rate
					rating={rating}
					setRating={setRating}
					setShowThanksPage={setShowThanksPage}
				/>
			)}
		</div>
	);
}

export default MainRate;
