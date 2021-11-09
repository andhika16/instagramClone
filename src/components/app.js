import { h } from 'preact';
// import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import style from './style.css';
import Stories from './stories';
import Content from './contents';
const App = () => (
	<div id="app" class={style.app}>
		<Header />
		<Stories />
		<Content />
	
		{/* <Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router> */}
	</div>
)

export default App;
