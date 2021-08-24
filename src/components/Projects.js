import bounifulpic from "../assets/images/different-vegetables-textile-bag-grey.jpg";
import schedulerpic from "../assets/images/notebook-keyboard.jpg";
import brewpic from "../assets/images/beer-pour (2).jpg";
import blogpic from "../assets/images/code.jpg";
import friendspic from "../assets/images/friends-7.jpg";
import brewscreenshotpic from "../assets/images/brew-search-screenshot.jpg";
import schedulerscreenshotpic from "../assets/images/calendar-screenshot.png";
import friendsscreenshotpic1 from "../assets/images/trivia-start-page.png";
import friendsscreenshotpic2 from "../assets/images/trivia-question-page.png";


export default function Projects() {
    return (
        <div id= "work-section" className="no-display">
            <div className="project-pictures">
                <div id="big-picture-container">
                        <img id = "big-picture" src={bounifulpic} alt="project-1" data-toggle="modal" data-target="#project-modal3"/>
                        <div className="text-container1" data-toggle="modal" data-target="#project-modal3">
                            <h3>Bountiful</h3>
                            <p>HTML, CSS, Bootstrap, Node.js</p>
                            <p>Heroku, Postgres, Express, Handlebars</p>
                        </div>
                </div>

                <div className="other-pictures-container">
                    
                    <div className="other-pictures-text-container">
                            <img className = "other-pictures" src={schedulerpic} alt="project-2" data-toggle="modal" data-target="#project-modal4"/> 
                        <div className="text-container2" data-toggle="modal" data-target="#project-modal4">
                            <h3>Day Scheduler</h3> 
                            <p>HTML, CSS, Bootstrap, jQuery</p> 
                        </div>
                            <img className = "other-pictures" src={brewpic} alt="project-4" data-toggle="modal" data-target="#project-modal"/>
                        <div className="text-container4" data-toggle="modal" data-target="#project-modal"> 
                            <h3>The Hopperator</h3> 
                            <p>HTML, CSS, Bulma, JavaScript</p>
                            <p>Google Maps & Open Brewery DB APIs</p> 
                        </div>
                    </div>
                    <div className="other-pictures-text-container">
                            <img className = "other-pictures" src={blogpic} alt="project-5" data-toggle="modal" data-target="#project-modal5"/> 
                        <div className="text-container5" data-toggle="modal" data-target="#project-modal5"> 
                            <h3>Tech Blog</h3> 
                            <p>HTML, CSS, Bootstrap, JavaScript</p>
                            <p>Node.js, Express, MySQL, Handlebars, Heroku</p> 
                        </div>
                            <img className = "other-pictures" src={friendspic} alt="project-5" data-toggle="modal" data-target="#project-modal2"/> 
                        <div className="text-container3" data-toggle="modal" data-target="#project-modal2">
                            <h3>Friends Trivia Quiz</h3> 
                            <p>HTML, CSS, JavaScript</p> 
                        </div>
                    </div>
                </div>
            </div>
    <div className="modal fade custom-modal" id="project-modal" tabIndex="-1" role="dialog"
        aria-labelledby="project-modal-form" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="project-modal-form">The Hopperator</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="links">
                        <a href="https://leighdahlin.github.io/Hopperator/" target="blank">Deployed Link</a>
                        <a href="https://github.com/leighdahlin/Hopperator" target="blank">Github Repository</a>
                    </div>
                    <p className="project-info">The Hoppeator is your one-stop shop to explore the world of beer. Our homepage features a short history of beer and we have pages to learn about the types of beer, search breweries and plan your beer crawl. You can save your favorite breweries and access them using the 'Favorites' page.</p>
                    <div className="screenshot-div">
                        <img className = "screenshot" src={brewscreenshotpic} alt="The Hopperator screenshot"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade custom-modal" id="project-modal3" tabIndex="-1" role="dialog"
        aria-labelledby="project-modal-form" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="project-modal-form">Bountiful</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="links">
                        <a href="https://bountiful-ca.herokuapp.com/" target="blank">Deployed Link</a>
                        <a href="https://github.com/leighdahlin/Bountiful" target="blank">Github Repository</a>
                    </div>
                    <p className="project-info">Bountiful is a peer-to-peer gardening service that allows users to buy and sell home grown produce in their local area.</p>
                    <div className="screenshot-div">
                        {/* <img className = "screenshot" src={schedulerscreenshotpic} alt="Work Day Scheduler screesnhot"/> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade custom-modal" id="project-modal4" tabIndex="-1" role="dialog"
        aria-labelledby="project-modal-form" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="project-modal-form">Work Day Scheduler</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="links">
                        <a href="https://leighdahlin.github.io/work-day-scheduler/" target="blank">Deployed Link</a>
                        <a href="https://github.com/leighdahlin/work-day-scheduler" target="blank">Github Repository</a>
                    </div>
                    <p className="project-info">This work day scheduler is designed to assist you with your daily schedule. It will display the current day's date and a time slot for each hour of the work day. When you press the save button, it saves your entry.</p>
                    <div className="screenshot-div">
                        <img className = "screenshot" src={schedulerscreenshotpic} alt="Work Day Scheduler screesnhot"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade custom-modal" id="project-modal2" tabIndex="-1" role="dialog"
        aria-labelledby="project-modal-form" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="project-modal-form">Friends Trivia Quiz</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="links">
                        <a href="https://leighdahlin.github.io/friends-quiz/" target="blank">Deployed Link</a>
                        <a href="https://github.com/leighdahlin/friends-quiz" target="blank">Github Repository</a>
                    </div>
                    <p className="project-info">Are you a Friends series superfan? This quiz is designed to find out! You have two minutes to answer ten questions. If you miss a question, you'll lose ten seconds off the clock. If the time runs down to zero, you won't be able to make the leaderboard. If you can answer all ten questions, you'll find out if you really are a superfan!</p>
                    <div className="screenshot-div">
                        <img className = "screenshot" src={friendsscreenshotpic1} alt="friends quiz screenshot"/>
                        <img className = "screenshot" src={friendsscreenshotpic2} alt="friends quiz screenshot"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade custom-modal" id="project-modal5" tabIndex="-1" role="dialog"
        aria-labelledby="project-modal-form" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="project-modal-form">Tech Blog</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                    <div className="modal-body">
                        <div className="links">
                            <a href="https://talkingtech-blog.herokuapp.com/" target="blank">Deployed Link</a>
                            <a href="https://github.com/leighdahlin/tech-blog" target="blank">Github Repository</a>
                        </div>
                        <p className="project-info">Want to know the latest in Tech? This blog is for you! You can view blog posts without an account, but if you sign up, you can add comments and create content.</p>
                        <div className="screenshot-div">
                            {/* <img className = "screenshot" src={friendsscreenshotpic1} alt="friends quiz screenshot"/>
                            <img className = "screenshot" src={friendsscreenshotpic2} alt="friends quiz screenshot"/> */}
                        </div>
                    </div>
            </div>
        </div>
    </div>

        </div>


    )
}