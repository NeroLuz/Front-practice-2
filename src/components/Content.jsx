import React from 'react'
import { useState } from 'react'
import "./Content.css"

const Content = () => {

    const [toggle, setToggle] = useState(true)

    const togglePrices = () => {
        setToggle(!toggle)    
    }

    let tiempo = ""
    let dinero1
    let dinero2

    if (toggle) {
        tiempo = "/MONTH"
        dinero1 = 19
        dinero2 = 29
    } else {
        tiempo = "/YEAR"
        dinero1 = 99
        dinero2 = 119
    }
    
  return (
    <main>
            <div id="information">
                <h1>Plans & Pricing</h1>
                <div id="plans">
                    <h3 id="monthly" style={ toggle ? {color: "#000", transition: "0.5s"} : {color: "#aaa", transition: "0.5s"}}>MONTHLY</h3>
                    <label className="switch">
                        <input id="button" type="checkbox" onClick={togglePrices}/>
                        <span className="slider round"></span>
                    </label>
                    <h3 id="yearly" style={ toggle ? {color: "#aaa", transition: "0.5s"} : {color: "#000", transition: "0.5s"} }>YEARLY</h3>
                </div>
            </div>
            <div className="cards">
                <div id="card-1">
                    <div className="price-card">
                        <h4>Workflow</h4>
                        <div id="price-card_1">
                            <p className="dinero">$</p>
                            <p className="number">{dinero1}</p>
                            <p className="time">{tiempo}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <ul>
                            <li>Unlimited Clients & Projects</li>
                            <li>Proposals</li>
                            <li>Contracts</li>
                            <li>Invoicing & Payments</li>
                            <li>Client CRM</li>
                            <li>Project Management</li>
                            <li>Task & Time Tracking</li>
                            <li>iOS, Android, Chrome & Mac Apps</li>
                        </ul>
                        <button>START FREE</button>
                    </div>
                </div>
                <div id="card-2">
                    <div id="trapecio">
                        <p><b>MOST POPULAR</b></p>
                    </div>
                    <div className="price-card">
                        <h4>Workflow Plus</h4>
                        <div id="price-card_2">
                            <p className="dinero">$</p>
                            <p className="number">{dinero2}</p>
                            <p className="time">{tiempo}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <ul>
                            <li>Everything in Workflow, plus...</li>
                            <li>White-labelled client experience</li>
                            <li id="new-logo">Client forms and questionaries </li>
                            <li>Workflow automations</li>
                            <li>Subcontracting (client-mode)</li>
                            <li>Calendly integration</li>
                            <li>Client portal</li>
                            <li>Priority support</li>
                        </ul>
                        <button>START FREE</button>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Content