import React, { useState } from "react";

export function Btn() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const increment = () => {
		console.log(count);
		setCount(count + 1);
		setName("Increased");
	};

	const decrement = () => {
		setCount(count - 1);
		setName("Decreased");
	};

	return (
		<div>
			<p style={{ fontFamily: "helvetic", fontWeight: 700 }}>
				{" "}
				{name} {count} times
			</p>
			<button
				onClick={increment}
				style={{
					marginLeft: 10,
					padding: 5,
					backgroundImage: "linear-gradient(90deg, red, blue)",
					border: "none",
					borderRadius: 5,
				}}
			>
				Increase
			</button>
			<button
				onClick={decrement}
				style={{
					marginLeft: 10,
					padding: 5,
					backgroundImage: "linear-gradient(90deg, red, blue)",
					border: "none",
					borderRadius: 5,
				}}
			>
				Decrease
			</button>
		</div>
	);
}
