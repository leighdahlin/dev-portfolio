import pic from "../assets/images/profile-pic (2).jpg";

export default function AboutMe() {
    return (
    <div id="intro-card" class="card-container">
        <div id="card1" class="card">
            <div class="card-body">
                <div class="card-img">
                <img id="about-me-pic" src={pic} alt="Leigh Dahlin"/>
                </div>
                <h5 class="card-title">Leigh Dahlin</h5>
                <div class="content-card">I'm a Full-Stack Web Developer residing in Sacramento, California.
                I have a background in Accounting and I'm a Certified Public Accountant. I enjoy leveraging my 
                background and skill set to research problems and appoach coding programmatically. Strong emphasis
                on well-organized code and curating a clean, calming design for every project. 
                </div>
            </div>
        </div>
    </div>
    )

}