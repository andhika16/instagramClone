const singleStory = ({ item, setStory }) => {
	const showTheStory = () => {
		setStory(true);
	};

	return (
		<div class="flex justify-center items-center flex-col mx-2">
			<div class="w-16 h-16 md:w-20 md:h-20 border-2 rounded-full overflow-hidden">
				<img
					class="w-full h-full"
					src={`https://picsum.photos/200?random=${item.id}`}
					alt=""
					onClick={() => showTheStory()}
				/>
			</div>
			<p class="text-xs">{item.userStory}</p>
		</div>
	);
};

export default singleStory;
