import React from "react";
const FaqSection = () => {
    return (
        <div className="faq">
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ad!
                    </p>
                </div>
            </div>
            <div className="question">
                <h4>Different Payment Modes</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ad!
                    </p>
                </div>
            </div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ad!
                    </p>
                </div>
            </div>
        </div>
    );
}
export default FaqSection;