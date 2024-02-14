import React from 'react'
import { useState } from 'react'
import "./Aside.css"


const Aside = () => {

    const [flecha1, setFlecha1] = useState(false)
    const [flecha2, setFlecha2] = useState(false)
    const [flecha3, setFlecha3] = useState(false)
    const [flecha4, setFlecha4] = useState(false)

    const accionFlecha1 = () => {
        setFlecha1(!flecha1)
    }
    const accionFlecha2 = () => {
        setFlecha2(!flecha2)
    }
    const accionFlecha3 = () => {
        setFlecha3(!flecha3)
    }
    const accionFlecha4 = () => {
        setFlecha4(!flecha4)
    }

  return (
    <aside>
            <div id="aside-content">
                <div id="extension-container">
                    <div className="extension-information">
                        <h2>Super charge your work with add-ons</h2>
                        <div className="extension-1">
                            <div className="extension-cards">
                                <div id="extension-card-1">
                                    <h3>Collaborators</h3>
                                    <p>Invite other users to specific projects for limited access and functionality.</p>
                                </div>
                                <div id="extension-free">
                                    <p>Free</p>
                                </div>
                            </div>
                            <div className="extension-cards">
                                <div id="extension-card-2">
                                    <h3>Partners</h3>
                                    <p>Invite other users for full account access and company management.</p>
                                </div>
                                <div id="extension-cost-1" className="extension-cost">
                                    <h5>$9</h5>
                                    <p>/MONTH</p>
                                </div>
                            </div>
                            <div className="extension-cards extension-card-last">
                                <div id="extension-card-3">
                                    <h3>Bonsai Tax</h3>
                                    <p>Track expensives, Identify write-offs, and estimate quarterly taxes easily.</p>
                                    <button>LEARN MORE <i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <div className="extension-cost extension-cost-last">
                                    <h5>$10</h5>
                                    <p>/MONTH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="learn-more-container">
                    <div id="learn-more-text">
                        <div id="learn-more-title">
                            <p>It's</p>
                            <p id="your">your</p>
                            <p>bussiness.</p>
                        </div>
                        <p id="learn-more-title2">We're here to help it grow.</p>
                    </div>
                    <button id="learn-more-button">START FREE</button>
                </div>
                <div id="questions">
                    <h2>Frequently Asked Questions</h2>
                    <div className="questions-cards">
                        <div className="questions-title questions-title-1">
                            <h3>How does the 14 day free trial work?</h3>
                            <button style={flecha1 ? {transition: "1s", transform: "rotate(180deg)"} : {transition: "1s"}} className="questions-button">
                                <i className="fa-solid fa-chevron-down" onClick={accionFlecha1}></i>
                            </button>
                        </div>
                        <p className={flecha1 ? "questions-text" : "ocultar"}>Our 14-day free trial is a great opportunity for businesses to experience the benefits of our services with no obligation. By signing up for the free trial, customers have full access to all features and tools of our platform for a two-week period. This includes personalized advice from our sales and marketing experts, detailed data analysis, and specific recommendations to improve your business performance. During this period, our customers can explore all the functionalities of our platform, conduct tests and evaluate how Bonsai can help boost their sales. At the end of the free trial, customers have the option to subscribe to one of our plans to continue receiving our services and take full advantage of our sales and marketing expertise.</p>
                    </div>
                    <div className="questions-cards">
                        <div className="questions-title">
                            <h3>Can I change plans anytime?</h3>
                            <button style={flecha2 ? {transition: "1s", transform: "rotate(180deg)"} : {transition: "1s"}} className="questions-button">
                                <i className="fa-solid fa-chevron-down" onClick={accionFlecha2}></i>
                            </button>
                        </div>
                        <p className={flecha2 ? "questions-text" : "ocultar"}>At Bonsai, we understand that our customers' needs can evolve over time, which is why we offer flexibility in our subscription plans. Customers are free to change their subscription plans at any time based on their changing business requirements. Whether you want to upgrade to a plan with more features and additional services or downgrade your plan to fit a specific budget, we are here to accommodate your needs. Our goal is to provide our customers with maximum freedom and control over their subscription, ensuring a hassle-free experience tailored to their ever-changing business objectives.</p>                       
                    </div>
                    <div className="questions-cards">
                        <div className="questions-title">
                            <h3>How do I pause my Bonsai Suscription?</h3>
                            <button style={flecha3 ? {transition: "1s", transform: "rotate(180deg)"} : {transition: "1s"}} className="questions-button">
                                <i className="fa-solid fa-chevron-down" onClick={accionFlecha3}></i>
                            </button>
                        </div>
                        <p className={flecha3 ? "questions-text" : "ocultar"}>Pausing your Bonsai subscription is a simple and hassle-free process. We understand that circumstances may arise that require a temporary pause in our services, which is why we offer our clients the flexibility to do so at any time. To pause your subscription, simply contact our customer support team or log in to your account on our online platform. From there, you can select the option to pause your subscription and set the duration of the pause according to your needs. During this pause period, your account will remain inactive and you will not be charged additional fees. Once you are ready to reactivate your subscription, simply contact us again and we will be happy to help you resume our services to boost your sales. At Bonsai, we strive to provide our customers with maximum flexibility and convenience in managing their subscriptions.</p>                        
                    </div>
                    <div className="questions-cards">
                        <div className="questions-title">
                            <h3>What is your refund policy?</h3>
                            <button style={flecha4 ? {transition: "1s", transform: "rotate(180deg)"} : {transition: "1s"}} className="questions-button">
                                <i className="fa-solid fa-chevron-down" onClick={accionFlecha4}></i>
                            </button>
                        </div>
                        <p className={flecha4 ? "questions-text" : "ocultar"}>At Bonsai, we are committed to ensuring our customers' satisfaction and offering a fair and transparent refund policy. If for any reason a customer is not satisfied with our services, we offer a satisfaction guarantee period during which they can request a full refund. This warranty period varies depending on the subscription plan selected, but generally covers sufficient time for customers to fully evaluate our services and determine whether they meet their expectations. To request a refund, customers can contact our customer service team and provide details about the reason for their dissatisfaction. We are committed to reviewing each case individually and processing refunds in a timely and fair manner, in accordance with our refund policy. At Bonsai, we strive to maintain transparency and integrity in all of our customer interactions, and our refund policy is an integral part of that commitment.</p>
                    </div>
                </div>
            </div>
        </aside>
  )
}

export default Aside