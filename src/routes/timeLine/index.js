import TimeLineComp from "./timeLine";

const arr = [];
for (let i = 0; i < 50; i++) {
	arr.push(i);
}

const timeLine = () => (
	<div>
		<div class="border rounded-3xl p-2 m-2 flex items-center">
			<img class="w-6" src="../../assets/instagramIcon/search.png" alt="" />
			<p class="text-sm font-bold ml-2">cari</p>
		</div>
		<div class="flex flex-wrap justify-center items-center w-full">
			{arr.map((item, index) => (
				<TimeLineComp key={index} />
			))}
		</div>
	</div>
);

export default timeLine;
