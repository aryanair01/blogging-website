import React from 'react'

export default function About() {
    return (
        <div>

            <section className="py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
                            <h2 className="display-5 mb-4">At our core, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous learning.</h2>
                            <button type="button" className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Connect Now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0">
                        <div className="col-12 col-lg-6">
                            <div className="card bg-light p-3 m-0" style={{ height: "300px" }}>
                                <div className="row gy-3 gy-md-0 align-items-md-center">
                                    <div className="col-md-5">
                                        <img src={" https://th.bing.com/th/id/OIP.vizAXqwRApgcIr-kIEUeIgHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"} className="img-fluid rounded-start" alt="Why Choose Us?" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body p-0">
                                            <h2 className="card-title h4 mb-3">Why Choose Us?</h2>
                                            <p className="card-text lead">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card bg-light p-3 m-0 " style={{ height: "300px" }}>
                                <div className="row gy-3 gy-md-0 align-items-md-center">
                                    <div className="col-md-5">
                                        <img src={"data:image/jpeg;base64,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"} className="img-fluid rounded-start" alt="Visionary Team" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body p-0">
                                            <h2 className="card-title h4 mb-3">Visionary Team</h2>
                                            <p className="card-text lead">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{margin:"20px"}}>

                <h3>AUTHORS WE HAVE WORKED WITH:</h3>
                <div className="container mt-5">
                    <div className="row">
                       
                        <div className="col-md-4">
                            <div className="card">
                                <img src={" https://th.bing.com/th?id=OIP.yAthwNGrMFgrQs-AFns-GgHaKL&w=213&h=293&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} style={{width:"350px",height:"200px"}} className="card-img-top" alt="Author Photo" />
                                <div className="card-body">
                                    <h5 className="card-title">Jane Austen</h5>
                                    <p className="card-text">An English novelist known for her witty and insightful portrayals of English society in the early 19th century. Her novels, including "Pride and Prejudice" and "Sense and Sensibility". </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img style={{width:"350px",height:"200px"}}  src={" https://th.bing.com/th?id=OIP.CCp8Du_ffUDrNS5MmlWRJwHaJ5&w=216&h=289&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} className="card-img-top" alt="Author Photo" />
                                <div className="card-body">
                                    <h5 className="card-title">George Orwell</h5>
                                    <p className="card-text">Born Eric Arthur Blair, was an English novelist and essayist. He is best known for his dystopian novel "1984" and allegorical novella "Animal Farm". </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img style={{width:"350px",height:"200px"}}  src={"https://th.bing.com/th?id=OIP.z5LzGiXldlazZ_s5PrzQ0wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} className="card-img-top" alt="Author Photo" />
                                <div className="card-body">
                                    <h5 className="card-title">J.K. Rowling</h5>
                                    <p className="card-text">Born  in 1965,is a British author best known for creating the Harry Potter series, which has become one of the best-selling book series in history.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>



            </section>


            <div class="container mt-5" style={{ backgroundColor: "grey" }}>
                <br></br>
                <h2>Contact Us</h2>

                <div className="row">
                    {/* Company Contact Information */}
                    <div className="col-md-6 mb-4">
                        <h4>Company Information</h4>
                        <p><strong>Address:</strong> 1234 Street Name, City, State, Zip Code</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Email:</strong> <a href="mailto:info@company.com">info@company.com</a></p>
                    </div>
                    {/* Contact Form */}
                    <div className="col-md-6 mb-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" name="subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea className="form-control" id="message" rows={5} placeholder="Enter your message" name="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    )
}
