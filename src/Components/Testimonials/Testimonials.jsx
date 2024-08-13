import React from "react";
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import user from '../../assets/sampleuser.jpg'

const Testimonials = () =>{

const slideForward = ()=>{

}

const slideBackward = ()=>{
    
}

    return(
        <div className="testimonials">
            <img src={next} alt='' className="next-btn" onClick={slideForward}/>
            <img src={back} alt='' className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <div>
                                    <h3>Lorem ipsum</h3>
                                    <span>SomaSmart, Kenya</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic temporibus nam repellendus debitis totam error accusamus! Laborum laudantium enim incidunt sapiente voluptates ducimus quo quas? Assumenda vel cum amet!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <div>
                                    <h3>Lorem ipsum</h3>
                                    <span>SomaSmart, Kenya</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic temporibus nam repellendus debitis totam error accusamus! Laborum laudantium enim incidunt sapiente voluptates ducimus quo quas? Assumenda vel cum amet!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <div>
                                    <h3>Lorem ipsum</h3>
                                    <span>SomaSmart, Kenya</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic temporibus nam repellendus debitis totam error accusamus! Laborum laudantium enim incidunt sapiente voluptates ducimus quo quas? Assumenda vel cum amet!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <div>
                                    <h3>Lorem ipsum</h3>
                                    <span>SomaSmart, Kenya</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic temporibus nam repellendus debitis totam error accusamus! Laborum laudantium enim incidunt sapiente voluptates ducimus quo quas? Assumenda vel cum amet!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <div>
                                    <h3>Lorem ipsum</h3>
                                    <span>SomaSmart, Kenya</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic temporibus nam repellendus debitis totam error accusamus! Laborum laudantium enim incidunt sapiente voluptates ducimus quo quas? Assumenda vel cum amet!</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Testimonials