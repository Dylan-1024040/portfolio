export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get in touch</p>
                <h2>Contact me</h2>
                <p className="text-lg">
                    If you have any questions or want to work together, feel free to contact me.
                </p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name"
                    className="contact--label">
                        <span className="text-md">First Name: </span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="first-name"
                        id="first-name"
                        required
                        />
                    </label>
                    <label htmlFor="lastname"
                    className="contact--label">
                        <span className="text-md">Last Name: </span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="last-name"
                        id="last-name"
                        required
                        />
                    </label>
                    <label htmlFor="email"
                    className="contact--label">
                        <span className="text-md">Email: </span>
                        <input 
                        type="email" 
                        className="contact--input text-md" 
                        name="email"
                        id="email"
                        required
                        />
                    </label>
                    <label htmlFor="phone-number"
                    className="contact--label">
                        <span className="text-md">Phone number: </span>
                        <input 
                        type="number" 
                        className="contact--input text-md" 
                        name="phone-number"
                        id="phone-number"
                        required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic"
                    className="contact--label">
                        <span className="text-md">Choose a topic: </span>
                        <select  id="choose-topic"
                        className="contact--input text-md">
                            <option>select 1....</option>
                            <option>Item 1</option>
                            <option>item 2</option>
                            <option>item 3</option>
                            <option>item 4</option>
                            <option>item 5</option>
                        </select>
                    </label>
                    <label htmlFor="message"
                    className="contact--label">
                        <span className="text-md">Message: </span>
                        <textarea id="message"
                        className="contact--input text-md"
                        rows="8"
                        placeholder="Type your message..">
                            
                        </textarea>
                    </label>
                    <label htmlFor="checkbox"
                    className="checkbox--label">
                        <input type="checkbox" 
                        name="checkbox" id="checkbox" 
                        required/>
                        <span className="text-sm"> I accept the terms</span>
                    </label>
                    <div><button className="btn btn-primary contact--form--btn">
                        submit</button></div>
            </form>
        </section>
    )
}