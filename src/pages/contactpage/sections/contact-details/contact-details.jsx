import Form from '../../../../components/form/form.jsx'
import Card from '../../../../components/card/card.jsx';
import Icon from '../../../../components/icon/icon.jsx';

import { Mail, Phone, MapPin } from 'lucide-react';

import "./contact-details.css";

export function ContactDetail({icon, heading, detail}) {
    return (
        <div className="contact-detail">
            <Icon icon={icon} borderless={true} size={40}/>
            <div className='text'>
                <h3>{heading}</h3>
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default function ContactDetails() {
    const cardBackgroundColor = "color-mix(in oklab, var(--color-secondary-soft) 40%, transparent)";

    return (
        <section className='contact-details-section'>
            <div className="section-inner">
                <div className="contact-details">
                    <h2>Contact details</h2>
                    <p>
                        Prefer email? Reach us directly — or send a WhatsApp and we'll respond fast.
                    </p>

                    {/* Icon list */}
                    <div className="contact-details-list">
                        <ContactDetail 
                            icon = {<Mail size={20} color="var(--color-primary)"/>}
                            heading = "Sales Enquiries"
                            detail = "sales@brighthire.net"
                        />
                        <ContactDetail 
                            icon = {<Phone size={20} color="var(--color-primary)"/>}
                            heading = "WhatsApp/Call us"
                            detail = "+27 660 067 920"
                        />
                        <ContactDetail 
                            icon = {<MapPin size={20} color="var(--color-primary)"/>}
                            heading = "Location"
                            detail = "Durbanville, South Africa"
                        />
                    </div>

                    {/* Card */}
                    <Card className="card"  bgColor={cardBackgroundColor}>
                        <h3>Founding clients - Paarl</h3>
                        <p>
                            We're selecting our first <span>10 founding clients</span>. Lock in your rate permanently before our official launch.
                        </p>
                    </Card>
                </div>

                <Form
                    fullName = {true}
                    jobTitle = {true}
                    companyNameIndustry = {true}
                    employeesNeeded = {true}
                    rolesRequired = {true}
                    contactNumber = {true}
                    email = {true}
                    heardAbout = {true}
                    anythingElse = {true}
                    className="form"
                />
            </div>
        </section>
    )
}