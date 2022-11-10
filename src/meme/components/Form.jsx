import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        passwordConfirm: '',
        joinedNewsletter: false
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log('Success')
        } else {
            console.log('Failure')
        }

        
    }




    return (
        <div className="form--container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type='email' placeholder="Email address" className='form--input' name="email" onChange={handleChange} value={formData.email}>
                </input>
                <input
                    type='password' placeholder="Password" className='form--input' name="password" onChange={handleChange} value={formData.password}>
                </input>
                <input
                    type='password' placeholder="Confirm Passford" className='form--input' name='passwordConfirm' onChange={handleChange} value={formData.passwordConfirm}>
                </input>
                <div className="form--marketing">
                    <input
                        id='okayToEmail' type='checkbox' name="joinedNewsletter" onChange={handleChange} checked={formData.joinedNewsletter} placeholder="Email address" className='form--input'>
                    </input>
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}