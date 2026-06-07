import Form from '../../../../components/form/form.jsx'
import Card from '../../../../components/card/card.jsx';

// SVG Icons created by Claude
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
 
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
 
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ContactDetails() {
    return (
        <section className='contact-details-section'>
            <div className="section-inner">
                    <div className="contact-details">
                
                        <h2 className="contact-details__title">Contact details</h2>
                        <p className="contact-details__subtitle">
                            Prefer email? Reach us directly — or send a WhatsApp and we'll respond fast.
                        </p>
                    
                        <div className="contact-details__list">
                            <div> icon={<MailIcon />}
                                <p>Sales Enquiries</p>
                                <p>sales@brighthire.net</p>
                            </div>
                            <div> icon={<MailIcon />}
                                <p>Admin</p>
                                <p>admin@brighthire.net</p>
                            </div>
                            <div> icon={<PhoneIcon />}
                                <p>WhatsApp</p>
                                <p>0123456789</p>
                            </div>
                            <div> icon={<PinIcon />}
                                <p>Location</p>
                                <p>Durbanville, South Africa</p>
                            </div>
                        </div>
                    
                        <Card className="contact-details__founding">
                            <p className="contact-details__founding-label">Founding Clients — Paarl</p>
                            <p className="contact-details__founding-body">
                                We're selecting our first <strong>10 founding clients</strong>. Lock in your rate
                                permanently before our official launch.
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
                    />
                </div>
        </section>
    )
}