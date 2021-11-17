import { h } from "preact";
import Content from "../../components/contents";
import Stories from "../../components/stories";
import Message from "../../components/message";

const Home = ({ showMessage, userData, setShowStory }) => {
	return (
		<div>
			<Stories dataStories={userData} setShowStory={setShowStory} />
			{userData.map((item) => (
				<Content key={item.id} username={item.username} />
			))}
			<Content />
			<Message showMsg={showMessage} />
		</div>
	);
};

export default Home;
