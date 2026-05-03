'use server'
export async function submitForm(prevState, formData) {

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || !email || !message) {
        return {
            success: false,
            message: "Please fill required fields"
        }
    }
    console.log(`${name}, ${email}, ${message}`)
    return {
        success: true,
        message: "Thank you will contact you shortly!"
    }
}