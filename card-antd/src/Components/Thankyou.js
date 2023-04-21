import React, { useState } from "react";
import "./Thanks.css"


function Thankyou({rating}) {
	
	return (
		
		<div className="thanks">
			<img src="./illustration-thank-you.svg" alt="thankyou-pic" />
			
				<p className="selected">You selected {rating} out of 5</p>
			
			<h1>Thank you!</h1>
			<p>
				We appreciate you taking the time to give a rating if you ever need more
				support dont hestitate to get in touch
			</p>
		</div>
	
	);
}

export default Thankyou;
