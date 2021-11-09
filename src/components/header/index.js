import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div  style={{ width: '8%' }}>
			<img style={{width:'100%'}} src="../../assets/instagramIcon/camera.png" alt="" />
		</div>
		<div  style={{ width: '15%' }}>
			<img style={{width:'100%'}} src="../../assets/instagramIcon/instagram.png" alt="" />
		</div>
		<div  style={{ width: '7%' }}>
			<img style={{width:'100%'}} src="../../assets/instagramIcon/messenger.png" alt="" />
		</div>
			
	</header>
);

export default Header;
