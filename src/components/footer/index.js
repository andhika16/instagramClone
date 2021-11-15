import { Link } from "preact-router";
const footer = ({}) => (
	<div class="fixed bottom-0">
		<div class="bg-white shadow flex justify-between items-center px-4">
			<div class="w-8 mr-5 md:mx-10 ">
				<Link href="/">
					<img
						class="w-full"
						src="../../assets/instagramIcon/home.png"
						alt=""
					/>
				</Link>
			</div>
			<div class="w-8 mx-5 md:mx-10 ">
				<Link href="/routes/timeLine">
					<img
						class="w-full"
						src="../../assets/instagramIcon/search.png"
						alt=""
					/>
				</Link>
			</div>
			<div class="w-10 mx-5 md:mx-10 ">
				<img
					class="w-full"
					src="../../assets/instagramIcon/camera.png"
					alt=""
				/>
			</div>
			<div class="w-8 mx-5 md:mx-10 ">
				<Link href="/routes/activity">
					<img
						class="w-full"
						src="../../assets/instagramIcon/heart.png"
						alt=""
					/>
				</Link>
			</div>
			<div class="w-8 ml-5 md:mx-10 ">
				<Link href="/routes/profile">
					<img
						class="w-full"
						src="../../assets/instagramIcon/user (1).png"
						alt=""
					/>
				</Link>
			</div>
		</div>
	</div>
);

export default footer;
