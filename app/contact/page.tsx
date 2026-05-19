export default function Contact() {
    return (
        <div className="section pattern">
            <div className="container">
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <div className="button-circles-wrap">
                            <div className="button-circle"></div>
                            <div className="button-circle"></div>
                        </div>
                        <div>contact.html</div>
                    </div>
                    <div className="modal-body">
                        <div className="container-width-medium">
                            <h1>Say hi</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" className="grid-form">
                                    <div className="grid-form-row-halves">
                                        <div className="form-group">
                                            <label htmlFor="name">Your name</label>
                                            <input type="text" className="input w-input" maxLength={256} name="name" data-name="Name" placeholder="Jane Dough" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Email-address">Your email</label>
                                            <input type="email" className="input w-input" maxLength={256} name="Email-address" data-name="Email address" placeholder="jane@doughy.com" id="Email-address" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Message">Message</label>
                                        <textarea placeholder="Your message" maxLength={5000} id="Message" name="Message" data-name="Message" className="textarea w-input"></textarea>
                                    </div>
                                    <input type="submit" value="Submit" data-wait="Please wait..." className="button w-button" />
                                </form>
                                {/* Success/Error messages are usually hidden by CSS until form submission state changes. 
                    Since this is static, they will remain hidden or visible based on Webflow CSS defaults. 
                    Webflow JS handles .w-form-done and .w-form-fail display. */}
                                <div className="empty-state w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="error-message w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
