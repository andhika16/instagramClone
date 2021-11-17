const ProfilePhotos = () => (
	<>
		<div class="m-1" style={{ width: "31%" }}>
			<img
				class="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
				src={`https://picsum.photos/200?random=${Math.random()}`}
				alt=""
			/>
		</div>
	</>
);

export default ProfilePhotos;
