import { h } from "preact";
import Userchat from "./userChat";

const data = [
	{
		id: 1,
		username: "John Doe",
		img: "../../assets/img/contoh.jpg",
		lastActive: "1 hour ago",
	},
	{
		id: 2,
		username: "John Doe",
		img: "../../assets/img/contoh.jpg",
		lastActive: "1 hour ago",
	},
	{
		id: 3,
		username: "John Doe",
		img: "../../assets/img/contoh.jpg",
		lastActive: "1 hour ago",
	},
	{
		id: 4,
		username: "John Doe",
		img: "../../assets/img/contoh.jpg",
		lastActive: "1 hour ago",
	},
];

const optionsMenu = ({ showMsg }) => (
	<div>
		<div
			class={
				showMsg
					? "absolute bg-white w-full h-full top-0 -right-0 p-5"
					: "absolute bg-white w-full h-full top-0 -right-full p-5"
			}
		>
			<div class="border rounded p-2">
				<p>search</p>
			</div>
			<div class="flex justify-between text-sm my-5">
				<p class="font-bold">Messages</p>
				<p class="text-blue-600 font-bold">Request</p>
			</div>
			<div class="flex-col">
				{data.map((item, index) => (
					<Userchat key={index} data={item} />
				))}
			</div>
		</div>
	</div>
);

export default optionsMenu;
