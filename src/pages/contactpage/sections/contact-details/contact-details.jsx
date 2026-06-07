import Form from '../../../../components/form/form.jsx'

export default function ContactDetails() {
    return (
        <section>
            <div>
                

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
        </section>
    )
}