import React from 'react'
import "./StoryReel.css"
import Story from "./Story"
import com1 from "./testimg/computer1.jpg"
import com2 from "./testimg/computer2.jpg"
import com3 from "./testimg/computer3.jpg"
import com4 from "./testimg/computer4.jpg"
import com5 from "./testimg/computer5.jpg"
import profile from "./testimg/profile.jpg"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image={com1}
                profileSrc={profile}
                title="UC Dev"
            />
            <Story
                image={com2}
                profileSrc={profile}
                title="UC Dev"
            />
            <Story
                image={com3}
                profileSrc={profile}
                title="UC Dev"
            />
            <Story
                image={com4}
                profileSrc={profile}
                title="UC Dev"
            />
            <Story
                image={com5}
                profileSrc={profile}
                title="UC Dev"
            />
        </div>
    )
}

export default StoryReel




