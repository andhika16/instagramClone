const singleStory = ({ img, userStory }) => (
	<div>
		<div class="w-20 mx-2 flex justify-center items-center flex-col">
			<img class="w-full h-full" src={img} alt="" />
			<p class="text-xs">{userStory}</p>
		</div>
	</div>
);

export default singleStory;
