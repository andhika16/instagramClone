import { h } from 'preact';
import style from './style.css';
const singleStory = ({img,userStory}) => (
    <div >
        <div class={style.round}>
            <img class={style.img} src={img} alt="" />
            <p className="user-name">{ userStory }</p>
        </div>
	</div>
);

export default singleStory;
