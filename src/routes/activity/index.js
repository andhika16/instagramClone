import ActivityList from "./activityList";

const arr = [];
for (let i = 0; i < 100; i++) {
	arr.push(i);
}

const Activity = () => (
	<div>
		<div class="w-full h-full pt-2">
			<div class="m-5 text-sm font-bold">
				<p>Yesterday</p>
			</div>
			<div>
				{arr.map((item, index) => {
					return <ActivityList key={index} />;
				})}
			</div>
		</div>
	</div>
);

export default Activity;
