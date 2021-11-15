import { h } from "preact";
import style from "./style.css";
import SingleStory from "./singleStory";
import { useState } from "preact/hooks";
// import StoryDetail from "./storyDetail";

const data = [
	{
		id: 1,
		userStory: "nov",
	},
	{
		id: 2,
		userStory: "jhon Doe",
	},
	{
		id: 3,
		userStory: "andhikaaa",
	},
	{
		id: 4,
		userStory: "ryanreynold16",
	},
	{
		id: 5,
		userStory: "martin_tuhan",
	},
	{
		id: 6,
		userStory: "repvblik.cinta",
	},
];

const Stories = () => {
	const [showStory, setShowStory] = useState(false);

	return (
		<>
			<div
				id={style.stories}
				class="w-3xl flex overflow-x-auto border-b pb-4"
			>
				{data.map((item) => (
					<SingleStory
						key={item.id}
						item={item}
						setStory={setShowStory}
						showStory={showStory}
					/>
				))}
			</div>
		</>
	);
};

export default Stories;
