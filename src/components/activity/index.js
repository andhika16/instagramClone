import ActivityList from "./activityList";
const Activity = () => (
	<div>
		<div class="w-full h-96 py-5">
			<div class="m-5 text-sm font-bold">
				<p>Yesterday</p>
			</div>
			<div>
				<ActivityList />
			</div>
		</div>
	</div>
);

export default Activity;
