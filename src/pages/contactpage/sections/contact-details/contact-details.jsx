import Form from '../../../../components/form/form.jsx'
import Card from '../../../../components/card/card.jsx';
import Icon from '../../../../components/icon/icon.jsx';

import { Mail, Phone, MapPin } from 'lucide-react';

import "./contact-details.css";

export function ContactDetail({icon, heading, detail}) {
    return (
        <div className="contact-detail">
            <Icon icon={icon} borderless={true} />
            <div className='text'>
                <h3>{heading}</h3>
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default function ContactDetails() {
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
                            icon = {<Mail size={20} color="var(--color-primary)"/>}
                            heading = "Sales Enquiries"
                            detail = "sales@brighthire.net"
                        />
                        <ContactDetail 
                            icon = {<Mail size={20} color="var(--color-primary)"/>}
                            heading = "Sales Enquiries"
                            detail = "sales@brighthire.net"
                        />
                    </div>
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