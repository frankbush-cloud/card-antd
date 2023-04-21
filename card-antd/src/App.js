import "./App.css";
import { Avatar, Button, Card } from "antd";
import {
	FacebookFilled,
	InstagramFilled,
	TwitterOutlined,
	YoutubeFilled,
} from "@ant-design/icons";

import { Btn } from "./Btn";
import MainRate from "./Components/MainRate";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			
			<div
				className="left-side"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<Card
					hoverable={true}
					actions={[
						<FacebookFilled style={{ color: "blue" }} />,
						<TwitterOutlined style={{ color: "skyblue" }} />,
						<InstagramFilled style={{ color: "blue" }} />,
						<YoutubeFilled style={{ color: "blue" }} />,
					]}
					title={"Need more information"}
					cover={
						<div
							style={{
								height: 150,
								background: "linear-gradient(#ff007a, #4200ff)",
								color: "white",
								fontSize: 30,
								paddingtop: 20,
								fontFamily: "cursive",
							}}
						>
							Ant design cover
						</div>
					}
				>
					<Card.Meta
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: "-60",
						}}
						avatar={
							<Avatar
								size={70}
								src={
									"https://th.bing.com/th/id/OIP.2duvM9mKXk4_2_0bkS2FdAAAAA?pid=ImgDet&rs=1"
								}
							></Avatar>
						}
						title={"Code with Franklin Bush"}
						description={"@franklinbushcodes"}
					></Card.Meta>
					<p>Franks antd Card</p>
				</Card>
				<Btn />
			</div>

			<MainRate />
		</div>
	);
}

export default App;
