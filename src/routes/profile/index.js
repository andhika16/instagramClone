import ProfilePhotos from "./profilePhotos";

const Profile = () => {
	const arr = [];
	for (let i = 0; i <= 10; i++) {
		arr.push(i);
	}
	return (
		<div class="pt-5">
			<div class="flex text-xs">
				<div class="mx-2">
					<div class="w-20 rounded-full border overflow-hidden mb-2">
						<img
							src={`https://picsum.photos/200?random=${Math.random()}`}
							alt=""
						/>
					</div>
				</div>
				<div class="flex justify-around w-full text-center">
					<div>
						<p class="font-bold">10</p>
						<p>Posts</p>
					</div>
					<div>
						<p class="font-bold">10k</p>
						<p>Followers</p>
					</div>
					<div>
						<p class="font-bold">500</p>
						<p>Following</p>
					</div>
				</div>
			</div>
			<div class="text-xs">
				<div>
					<p class="font-bold">jhon doe</p>
					<p>What's your main focus today</p>
				</div>
				<div class="border-2 border-gray-300 rounded-md my-2 p-1  text-center bg-gray-200">
					<p>Edit Profile</p>
				</div>
			</div>
			<div class="w-full flex justify-between border-b-2">
				<div class="w-10">
					<img src="../../assets/instagramIcon/camera.png" alt="" />
				</div>
				<div class="w-10">
					<img src="../../assets/instagramIcon/camera.png" alt="" />
				</div>
				<div class="w-10">
					<img src="../../assets/instagramIcon/camera.png" alt="" />
				</div>
			</div>

			<div class="flex flex-wrap justify-center items-center w-full">
				{arr.map((item, index) => (
					<ProfilePhotos key={index} />
				))}
			</div>
		</div>
	);
};

export default Profile;
