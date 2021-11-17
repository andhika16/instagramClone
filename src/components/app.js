import Footer from "./footer";
import Header from "./header";
import Home from "../routes/home";
import Activity from "../routes/activity";
import { useState } from "preact/hooks";
import Router from "preact-router";
import TimeLine from "../routes/timeLine";
import Profile from "../routes/profile";
import StoryDetail from "./stories/storyDetail";
function App() {
	const data = [
		{
			id: 1,
			username: "nov",
		},
		{
			id: 2,
			username: "jhon Doe",
		},
		{
			id: 3,
			username: "andhikaaa",
		},
		{
			id: 4,
			username: "ryanreynold16",
		},
		{
			id: 5,
			username: "martin_tuhan",
		},
		{
			id: 6,
			username: "repvblik.cinta",
		},
		{
			id: 7,
			username: "rinegaaan_",
		},
		{
			id: 8,
			username: "mafia_hunt",
		},
	];

	const [showMessage, setShowMsg] = useState(false);
	const [showStory, setStory] = useState(false);
	return (
		<div class="max-w-xl mx-auto md:border">
			<StoryDetail
				showStoryDetail={showStory}
				setStory={setStory}
				userStory={data}
			/>
			<Header setShowMsg={setShowMsg} changeIcon={showMessage} />
			<div class="relative  overflow-x-hidden pt-1">
				<Router>
					<Home
						path="/"
						showMessage={showMessage}
						userData={data}
						setShowStory={setStory}
					/>
					<Activity path="/routes/activity" />
					<TimeLine path="/routes/timeLine" />
					<Profile path="/routes/profile" />
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;
