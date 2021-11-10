import { h } from "preact";
// import { Link } from 'preact-router/match';
// import style from './style.css';

const Content = ({ username }) => {
	return (
		<>
			<div class="py-2 items-center">
				<div class="flex items-center mb-2 justify-between">
					<div class=" flex items-center">
						<div class=" rounded w-10">
							<img
								class="w-full"
								src="../../assets/icons/android-chrome-192x192.png"
								alt=""
							/>
						</div>
						<div class="text-sm ml-2 font-bold">
							<p>{username}</p>
						</div>
					</div>
					<div class="w-8">
						<img src="../../assets/instagramIcon/dots.png" alt="" />
					</div>
				</div>
				<div>
					<div class="w-full">
						<img
							class="w-full"
							src="../../assets/img/contoh.jpg"
							alt=""
						/>
					</div>
					<div class="flex justify-between my-2">
						<div class="flex">
							<img
								class="w-8 mx-2"
								src="../../assets/instagramIcon/heart.png"
								alt=""
							/>
							<img
								class="w-8 mx-2"
								src="../../assets/instagramIcon/send.png"
								alt=""
							/>
							<img
								class="w-8 mx-2"
								src="../../assets/instagramIcon/chat.png"
								alt=""
							/>
						</div>
						<div>
							<img
								class="w-8 mx-2"
								src="../../assets/instagramIcon/ribbon.png"
								alt=""
							/>
						</div>
					</div>
					<div class="font-bold text-sm mx-2">
						<p>2213,12 likes</p>
					</div>
					<div class="mx-2 text-justify">
						<p>
							<strong class="mr-2">{username}</strong>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sunt distinctio neque alias, aliquam quibusdam illo tempora
							quo porro laboriosam esse quisquam iste reiciendis!
							Corporis animi pariatur dolorem quam quod alias, beatae
							tenetur officiis consequatur consequuntur exercitationem
							asperiores error quis optio, similique velit iure impedit
							ut. Natus, neque. Sed tenetur aliquam eveniet, labore in
							iure voluptate sapiente. Quibusdam vel dolor minus aut
							deleniti ducimus, cupiditate repudiandae debitis sunt earum
							illum, maiores provident? Magni velit culpa veniam aperiam
							molestiae delectus quidem dicta cumque, quibusdam
							aspernatur libero vel reiciendis iure rem ipsa ipsum modi
							beatae debitis voluptatum labore? Nisi rem aut deserunt
							voluptatum!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
