import "./meetteam.css"
import Heading from "../../../../components/Heading/heading"
import Card from "../../../../components/Card/card"



const people = [
    {
        letter: "Z",
        name: "Zander",
        position: "CEO & FINANCIAL DIRECTOR",
        description: "The first person you meet and the last to sign off on your placement."
    },
    {
        letter: "A",
        name: "Anton",
        position: "CMO",
        description: "He makes sure the right businesses find us."
    },
    {
        letter: "J",
        name: "Johno",
        position: "COO",
        description: "He knows every facilitator, student and probation period by name."
    }    
]

export default function MeetTeam() {
    return(
        <section>
            <div className="meetteam-section section-inner">
                <div className="meetteam-section-upper">
                    <Heading smallText="Meet the team" heading="The people behind every placement." />
                </div>
                <div className="team-grid">
                {people.map((member, index) => (
                    <Card 
                        key={index}
                        heading={member.name}
                        body={member.description}
                        className="team-member-card"
                    >
                        <div className="team-card-banner"> 
                            <span>{member.letter}</span>
                        </div>
                        <span className="team-role">{member.position}</span>
                    </Card>
                ))}
            </div>
            </div>
        </section>
    )
}