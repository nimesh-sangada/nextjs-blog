'use client'
import { useState, useEffect } from "react"
export default function ContactForm() {
    []
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        console.log('Form ready hai!')

    }, [])
    useEffect(() => {
        document.title = "Hello, " + formData.name

    }, [formData.name])

    return (
        <div>
            <form name="contact" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name} placeholder="Enter your name" />
                <br />
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email} placeholder="Enter your email" />
                <br />
                <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone} placeholder="Enter your phone" />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>Hello, {formData.name}</p>
        </div>
    )
}