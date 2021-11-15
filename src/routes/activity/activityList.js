const ActivityList = () => (
	<div>
		<div class="flex m-5">
			<div class="mx-2 flex items-center">
				<img
					class="w-11 h-11 md:w-14 rounded-full"
					src={`https://picsum.photos/200?random=${Math.random()}`}
					alt="icon"
				/>
				<p class="text-xs ml-2 ">
					<strong class="mr-2">username</strong>
					<strong> adipisicing elit.</strong>
					Facere,
					<span class="text-blue-800 font-bold mx-2">@dhiks_16</span>
					omnis ullam commodi ducimus in quasi Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. Eius, illo.
				</p>
			</div>
			<div>
				<div class="w-10 md:w-14">
					<img
						class="w-full h-full"
						src={`https://picsum.photos/200?random=${Math.random()}`}
						alt="icon"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default ActivityList;
