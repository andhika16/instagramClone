import { h } from "preact";
import Content from "../../components/contents";
import Stories from "../../components/stories";
import Message from "../../components/message";

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

const Home = ({ showMessage }) => {
	return (
		<div>
			<Stories />
			{data.map((item) => (
				<Content key={item.id} username={item.username} />
			))}
			<Content />
			<Message showMsg={showMessage} />
		</div>
	);
};

export default Home;
