const singleStory = ({ item, showTheStory }) => {
	return (
		<div class="flex justify-center items-center flex-col mx-2">
			<div class="w-16 h-16 md:w-20 md:h-20 border-2 rounded-full overflow-hidden">
				<img
					class="w-full h-full"
					src={`https://source.unsplash.com/collection/1346951/800x800?sig=${item.id}`}
					alt=""
					onClick={() => showTheStory()}
				/>
			</div>
			<p class="text-xs">{item.username}</p>
		</div>
	);
};

export default singleStory;
