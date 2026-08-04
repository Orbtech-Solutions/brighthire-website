import Form from '../../../../components/form/form.jsx'
import Card from '../../../../components/card/card.jsx';
import Icon from '../../../../components/icon/icon.jsx';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

import "./contact-details.css";

export function ContactDetail({icon, heading, detail, link, link_detail}) {
    const hasDetail = detail !== undefined && detail !== null && detail !== '';
    const hasLink = link_detail !== undefined && link_detail !== null && link_detail !== '';

    return (
        <div className="contact-detail">
            <Icon icon={icon} borderless={true} size={40}/>
            <div className='text'>
                <h3>{heading}</h3>
                {hasDetail && <p>{detail}</p>}
                {hasLink && <a href={link}>{link_detail}</a>}
            </div>
        </div>
    )
}

export default function ContactDetails() {
    const cardBackgroundColor = "color-mix(in oklab, var(--color-secondary-soft) 40%, transparent)";

    return (
        <section className='contact-details-section'>
            <div className="section-inner">
                <motion.div
                    className="contact-details"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Contact details</h2>
                    <p>
                        Prefer email? Reach us directly — or send a WhatsApp and we'll respond fast.
                    </p>

                    {/* Icon list */}
                    <div className="contact-details-list">
                        <ContactDetail 
                            icon = {<Mail size={20} color="var(--color-primary)"/>}
                            heading = "Sales Enquiries"
                            link = "mailto:sales1@brighthire.net"
                            link_detail = "sales1@brighthire.net"
                        />
                        <ContactDetail 
                            icon = {<Phone size={20} color="var(--color-primary)"/>}
                            heading = "WhatsApp/Call us"
                            link = "tel:+27660067920"
                            link_detail = "+27 660 067 920"
                        />
                        <ContactDetail 
                            icon = {<MapPin size={20} color="var(--color-primary)"/>}
                            heading = "Location"
                            detail = "Durbanville, South Africa"
                        />
                    </div>

                    {/* Card */}
                    <Card className="card"  bgColor={cardBackgroundColor}>
                        <h3>Founding clients - Paarl & Stellenbosch</h3>
                        <p>
                            We're selecting our first <span>10 founding clients</span>. Lock in your rate permanently before our official launch.
                        </p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.06 }}
                >
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
                </motion.div>
            </div>
        </section>
    )
}