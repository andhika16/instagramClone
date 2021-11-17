const StoryDetail = ({ showStoryDetail, setStory, userStory }) => {
	const closeStory = () => {
		setStory(false);
	};
	return (
		<div
			class={
				showStoryDetail
					? "absolute w-5/12 h-full flex justify-center z-50"
					: "hidden absolute w-5/12 h-full flex justify-center z-50"
			}
		>
			<div class="absolute w-full border-t-2 mt-2 border-white flex justify-between py-5">
				<div class="text-white px-2 font-bold text-sm">
					<p>{userStory.username} nvnv</p>
				</div>
				<div class="w-6">
					<img
						src="../../assets/instagramIcon/close.png"
						alt=""
						onClick={() => closeStory()}
					/>
				</div>
			</div>
			<img
				class="w-full h-full"
				src={`https://source.unsplash.com/collection/1346951/800x800?sig=${userStory.id}`}
				alt=""
			/>
		</div>
	);
};

export default StoryDetail;
