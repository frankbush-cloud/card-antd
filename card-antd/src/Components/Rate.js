import React, { useState } from "react";
import "./Rate.css";

function Rate({ rating, setRating, setShowThanksPage }) {
	const Star = () => {
		return (
			<div>
				<p>react</p>
				<img src="./icon-star.svg" alt="star-icon" />
			</div>
		);
	};

	const [activeBtn, setActiveBtn] = useState({
		btnOne: false,
		btnTwo: false,
		btnThree: false,
		btnFour: false,
		btnFive: false,
	});

	const handleSubmit = () => {
		if (!rating) return;
		setShowThanksPage(true);
	};

	return (
		<div className="ratecss">
			<Star />
			<p>How did we do?</p>
			<p style={{ color: "hsl(217, 12%, 63%)" }}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help u improve our offering
			</p>

			<div className="btns">
				<div
					className={activeBtn.btnOne ? "btn active" : "btn"}
					onClick={() => {
						setActiveBtn({
							btnOne: true,
							btnTwo: false,
							btnThree: false,
							btnFour: false,
							btnFive: false,
						});
						setRating(1);
					}}
				>
					1
				</div>
				<div
					className={activeBtn.btnTwo ? "btn active" : "btn"}
					onClick={() => {
						setActiveBtn({
							btnOne: false,
							btnTwo: true,
							btnThree: false,
							btnFour: false,
							btnFive: false,
						});
						setRating(2);
					}}
				>
					2
				</div>
				<div
					className={activeBtn.btnThree ? "btn active" : "btn"}
					onClick={() => {
						setActiveBtn({
							btnOne: false,
							btnTwo: false,
							btnThree: true,
							btnFour: false,
							btnFive: false,
						});
						setRating(3);
					}}
				>
					3
				</div>
				<div
					className={activeBtn.btnFour ? "btn active" : "btn"}
					onClick={() => {
						setActiveBtn({
							btnOne: false,
							btnTwo: false,
							btnThree: false,
							btnFour: true,
							btnFive: false,
						});
						setRating(4);
					}}
				>
					4
				</div>
				<div
					className={activeBtn.btnFive ? "btn active" : "btn"}
					onClick={() => {
						setActiveBtn({
							btnOne: false,
							btnTwo: false,
							btnThree: false,
							btnFour: false,
							btnFive: true,
						});
						setRating(5);
					}}
				>
					5
				</div>
			</div>
			<div>
				<button
					style={{
						backgroundColor: "hsl(25, 97%, 53%)",
						width: "100%",
						margin: "0 auto",
						display: "flex",
						marginTop: 20,
						outline: "none",
						border: "none",
						paddingBlock: 5,
						borderRadius: 15,
						color: "white",
						textAlign: "center",

						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Rate;
