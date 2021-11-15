import { h } from "preact";
// import { Link } from 'preact-router/match';

const Header = ({ setShowMsg, changeIcon }) => {
	const showMessage = () => {
		setShowMsg(true);
	};
	const unShowMessage = () => {
		setShowMsg(false);
	};

	return (
		<header class="sticky top-0 bg-white shadow-sm z-20 px-2 ">
			<div class="flex justify-between items-center">
				<div class="w-8">
					<button onClick={() => unShowMessage()}>
						{changeIcon === false ? (
							<img
								src="../../assets/instagramIcon/camera.png"
								alt="menu"
							/>
						) : (
							<img
								src="../../assets/instagramIcon/ribbon.png"
								alt="close"
							/>
						)}
					</button>
				</div>
				<div class="w-20">
					<img
						class="w-full"
						src="../../assets/instagramIcon/instagram.png"
						alt=""
					/>
				</div>
				<div class="w-7">
					<button onClick={() => showMessage()}>
						<img
							class="w-full"
							src="../../assets/instagramIcon/messenger.png"
							alt=""
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
