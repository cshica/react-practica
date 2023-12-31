import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard.jsx'
export function App()
{
    const formatUserName=(userName)=>`@${userName}`
    return (
        <section className='App'>
        <TwiterFollowCard isFollowing userName="stardeveloper">
            Christian Shica
        </TwiterFollowCard>
        <TwiterFollowCard isFollowing={false} userName="stardeveloper1" />
        <TwiterFollowCard isFollowing userName="stardeveloper" />
        <TwiterFollowCard isFollowing userName="stardeveloper" />
        <TwiterFollowCard isFollowing userName="stardeveloper" />
        </section>
      
    )
}