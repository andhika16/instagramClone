import { h } from "preact";
import style from "./style.css";
import SingleStory from "./singleStory";
// import { useState } from "preact/hooks";
// import StoryDetail from "./storyDetail";

const Stories = ({ dataStories, setShowStory }) => {
	const showTheStory = () => {
		setShowStory(true);
	};
	return (
		<>
			<div
				id={style.stories}
				class="w-3xl flex overflow-x-auto border-b pb-4"
			>
				{dataStories.map((item) => (
					<SingleStory
						key={item.id}
						item={item}
						showTheStory={showTheStory}
					/>
				))}
			</div>
		</>
	);
};

export default Stories;
