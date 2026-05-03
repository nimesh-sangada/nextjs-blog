'use client'
import { useState } from "react"

export default function Accordion() {

    const [activeId, setActiveId] = useState(null) // koi ID ya null

    const faqs = [
        { id: 1, question: "React kya hai?", answer: "UI banane ki library hai." },
        { id: 2, question: "Next.js kya hai?", answer: "React ka framework hai." },
        { id: 3, question: "useState kya hai?", answer: "State manage karne ka hook." },
    ]

    return (
        <div>
            {faqs.map((faq) => (
                <div key={faq.id} style={{ margin: '10px auto', borderBottom: '1px solid' }}>
                    <h4 onClick={() => setActiveId(activeId != faq.id ? faq.id : null)} style={{ cursor: 'pointer', }}>{faq.question}</h4>
                    {activeId == faq.id && <p>{faq.answer}</p>}

                </div>
            ))}
        </div>
    )

}