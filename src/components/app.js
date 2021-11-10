import Stories from "./stories";
import Content from "./contents";
import Message from "./message";
import Footer from "./footer";
import Header from "./header";
import Activity from "./activity";
import { useState } from "preact/hooks";
import Router from "preact-router";
// import Match from "preact-router/match";
function App() {
	const data = [
		{
			id: 1,
			username: "johndoe",
		},
		{
			id: 2,
			username: "johndoe",
		},
		{
			id: 3,
			username: "johndoe",
		},
		{
			id: 4,
			username: "johndoe",
		},
		{
			id: 5,
			username: "johndoe",
		},
	];

	const [showMessage, setShowMsg] = useState(false);
	console.log(showMessage);
	return (
		<div class="max-w-xl mx-auto border">
			<Header setShowMsg={setShowMsg} changeIcon={showMessage} />
			<div class="relative  overflow-x-hidden pt-1">
				<Router>
					<Stories />
					{data.map((item) => (
						<Content key={item.id} username={item.username} />
					))}
					<Content />
					<Message showMsg={showMessage} />
					<Activity path="/activity" />
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;
