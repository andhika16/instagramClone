import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style.css';

const Content = () => (
    <div class={style.content}>
        <div class={style.head}>
            <div class={style.userContent}>
            <img class={style.imageUser} src="../../assets/icons/android-chrome-192x192.png" alt="" />
            <p>head name </p>
            </div>
            <div style={{width:'4%'}}>
                
                {/* <a href="javascript:void(0)" class="closebtn"  onClick={openNav()} >&times;</a> */}

            </div>
        </div>
        <div>
            <img class={style.contentImage} src="../../assets/img/contoh.jpg" alt="" />
            <div class={style.realCaption}>
                
                <div class={style.icon}>
                    <div style={{width:'5%',margin:'0px 10px'}}>
                        <img style={{width:'100%'}} src="../../assets/instagramIcon/heart.png" alt="" />
                    </div>
                    <div style={{width:'6%',margin:'0px 10px'}}>
                        <img style={{width:'100%'}} src="../../assets/instagramIcon/chat.png" alt="" />
                    </div>
                    <div style={{width:'5%',margin:'0px 10px'}}>
                        <img style={{width:'100%'}} src="../../assets/instagramIcon/send.png" alt="" />
                    </div>
                </div>
            
                <div class={style.caption}>
                    <p>2,340 Likes</p>
                    <p>text goes here</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, corrupti temporibus eos, facere quae voluptatem corporis ea deleniti in reiciendis vel iste obcaecati iure cum aliquam earum aliquid quas cumque commodi libero ipsa quos rem fugit. Ipsum in reprehenderit rem, officia minima quae voluptas! Numquam minima nihil fuga, quod tenetur veritatis ducimus explicabo architecto illo, vitae, possimus ipsam error? Aliquam voluptatem illum earum dolor nostrum. Blanditiis temporibus nesciunt facilis libero culpa cum unde natus. Corporis libero, repellendus eum eius corrupti expedita deleniti qui sed pariatur tenetur quod exercitationem nesciunt velit quasi esse eaque id incidunt? Nobis aliquid eum quia impedit!</p>
                </div>
        </div>
        </div>
	</div>
);

export default Content;
