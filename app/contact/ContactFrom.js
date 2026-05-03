'use client'
import { useActionState } from "react"
import { submitForm } from "./actions"
export function ContactForm() {
    const [state, formAction] = useActionState(submitForm, null)
    return (
        <>
            <form name="contactForm" action={formAction}>
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="email" name="email" placeholder="Enter your email" />
                <textarea rows="3" name="message" placeholder="Enter your message"></textarea>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
            {state && (
                <p style={{ color: state.success ? 'green' : 'red' }}>
                    {state.message}
                </p>
            )}
        </>
    )
}