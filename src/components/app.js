import Footer from "./footer";
import Header from "./header";
import Home from "../routes/home";
import Activity from "../routes/activity";
import { useState } from "preact/hooks";
import Router from "preact-router";
import TimeLine from "../routes/timeLine";
import Profile from "../routes/profile";
function App() {
	const [showMessage, setShowMsg] = useState(false);
	return (
		<div class="max-w-xl mx-auto md:border">
			<Header setShowMsg={setShowMsg} changeIcon={showMessage} />
			<div class="relative  overflow-x-hidden pt-1">
				<Router>
					<Home path="/" showMessage={showMessage} />
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
