/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterFollowCard({userName, name, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Following' : 'Follow'

    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt="User's avatar" 
                    />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}