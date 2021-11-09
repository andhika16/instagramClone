import { h } from 'preact';
import style from './style.css';
import SingleStory from './singleStory';

const data = [
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
    {
        img: '../../assets/icons/android-chrome-192x192.png',
        userStory: 'andhika'
    },
]   


const Stories = () => (
    <div class={style.stories}>
        {data.map((item, index) => (
            <SingleStory key={index} img={item.img} userStory={item.userStory} />
        ))}

        {/* <SingleStory img="../../assets/icons/android-chrome-192x192.png" userStory={"andhika"} />
        <SingleStory img="../../assets/icons/android-chrome-192x192.png" userStory={"andhika"} />
        <SingleStory img="../../assets/icons/android-chrome-192x192.png" userStory={"andhika"} /> */}
	</div>
);

 {/* <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div>
        <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div>
        <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div>
        <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div>
        <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div>
        <div class={style.round}>
            <img class={style.img} src="../../assets/icons/android-chrome-192x192.png" alt="" />
        </div> */}

export default Stories;
