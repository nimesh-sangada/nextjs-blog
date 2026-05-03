import { ContactForm } from "./ContactFrom"
export const metadata = {
    title: 'Contact Us'
}
export default function ContacPage() {
    return (
        <div className="container">
            <h2 className="heading">Contact Us</h2>
            <ContactForm />
        </div>
    )
}