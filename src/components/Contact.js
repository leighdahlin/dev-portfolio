export default function Contact() {
    return (
    <div class="contact-container">
        <div id="contact-info-form" class="card">
            <h5 className="card-title contact-title">Contact Me</h5>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"/>

                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" style={{height:"200px"}}>
                </textarea>
                <input type="submit" value="submit"/>
            </form>
        </div>
        <div id="contact-info-card" className="card">
            <div className="card-body2">
                <h5 className="card-title contact-title">Contact Information</h5>
                <div className="contact-info">
            
                <a className="contact" href="tel:2817944674">281-794-4674</a>
                <a className="contact" href="mailto:leigh.dahlin@gmail.com">leigh.dahlin@gmail.com</a>
                <a className="contact" href="https://github.com/leighdahlin" target="blank">Github</a>
                <a className="contact" href="https://www.linkedin.com/in/leighdahlin/" target="blank">LinkedIn</a>
            
                </div>
            </div>
        </div>

    </div>

    )
}