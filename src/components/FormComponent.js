import { useState } from "react"

export const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        password: "",
        passwordConfirm: "",
        isNewsLetter: false,
    })

    const[message, setMessage] = useState("");
    

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
       
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.passwordConfirm){
            setMessage(<p>You have successfully signed up. {formData.isNewsLetter && <p>Newsletter signed up.</p>}</p>);
        } else {
            setMessage(<p>! Passwords do not match</p>);
            return
        }
        // if (formData.isNewsLetter) {
        //     setMessage(<p>You have signed up for the newsletter!</p>)
        // }
        console.log(formData);
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input 
                    type="text" 
                    className="form--input"
                    onChange={handleChange}
                    name = "firstname"
                    value = {formData.firstname}
                />
                
                <label htmlFor="lastname">Last Name</label>
                <input 
                    type="text" 
                    className="form--input"
                    name = "lastname"
                    onChange={handleChange}
                    value = {formData.lastname}
                />
                <label htmlFor="email">Email address</label>
                <input                                                
                    type="email" 
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value = {formData.email}
                />
                <label htmlFor="gender">Gender?</label>
            
            <select 
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                name="gender"
            >
                <option value="">-- Choose --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>

            </select>
            <br /><br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value = {formData.password}
                />

                <label htmlFor="rPassword">Confirm password</label>
                <input 
                    type="password" 
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value = {formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="isNewsLetter"
                        type="checkbox"
                        name="isNewsLetter"
                        onChange={handleChange}
                        checked={formData.isNewsLetter}
                        
                    />
                    <label htmlFor="isNewsLetter">I want to join the newsletter</label>
                </div>
                <button className="form--submit" onClick={handleSubmit}>
                    Sign up
                </button>
                <div className="messages">
                    {message}
                </div>
                
            </form>
        </div>
    )
}