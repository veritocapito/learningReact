import './app.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export default function App() {

    const users = [
        { id: 1, name: 'Boca Juniors', userName: 'BocaJrsOficial', isFollowing: true},
        { id: 2, name: 'FC Barcelona', userName: 'FCBarcelona_cat', isFollowing: true},
        { id: 3, name: 'Liverpool FC', userName: 'LFC', isFollowing: true},
        { id: 4, name: 'AS Roma', userName: 'OfficialASRoma', isFollowing: true},
    ]
    
    return(
        <section className='App'>
        {
            users.map(({id, name, userName, isFollowing})=>(
                
                    <TwitterFollowCard key={id} name={name} userName={userName} initialIsFollowing={isFollowing}/>

            ))
        }
        </section>
    )
}