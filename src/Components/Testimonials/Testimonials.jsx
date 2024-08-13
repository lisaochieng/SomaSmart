import React, { useRef } from "react";
import './Testimonials.css';
import next from '../../assets/next.png';
import back from '../../assets/back.png';
import user from '../../assets/sampleuser.jpg';

const Testimonials = () => {
    const slider = useRef();
    const slideCount = 5; // Number of slides
    const slideWidth = 20; // Percentage width of each slide
    let tx = 0;

    const slideForward = () => {
        if (tx > -(slideCount - 1) * slideWidth) {
            tx -= slideWidth;
        } else {
            tx = 0; // Reset to the first slide
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += slideWidth;
        } else {
            tx = -(slideCount - 1) * slideWidth; // Move to the last slide
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className="testimonials">
            <img src={next} alt='' className="next-btn" onClick={slideForward}/>
            <img src={back} alt='' className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
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

export default Testimonials;
