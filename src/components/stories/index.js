import { h } from 'preact';
import style from  './style.css';
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
    <div id={style.stories} class="w-3xl flex overflow-x-auto border-b pb-4">
        {data.map((item, index) => (
            <SingleStory key={index} img={item.img} userStory={item.userStory} />
        ))}

	</div>
);

export default Stories;
