import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
            <div id="footer-container">
                <div className="footer-card">
                    <h4>PRODUCT</h4>
                    <ul id="product">
                        <li>Proposals</li>
                        <li>Contracts</li>
                        <li>Invoicing</li>
                        <li>Client CRM</li>
                        <li>Time Tracking</li>
                        <li>Task Tracking</li>
                        <li>Forms</li>
                        <li>Accounting</li>
                        <li>Bonsai Tax</li>
                        <li>Bonsai Cash</li>
                    </ul>
                    <ul>
                        <p id="footer-green">Pricing</p>
                        <li>Bonsai Reviews</li>
                    </ul>
                </div>
                <div id="footer-card-2" className="footer-card">
                    <h4>FREE RESOURCES</h4>
                    <ul className="free-resources">
                        <li>Freelance Resources</li>
                        <li>Freelance Blog by Bonsai</li>
                        <li>How to Write a Contract</li>
                        <li>Online Signature Maker</li>
                    </ul>
                    <ul className="free-resources">
                        <li>Self-Employed Taxes Hub</li>
                        <li>Self-Employed Tax Calculator</li>
                        <li>Self-Employed Tax Deductions</li>
                    </ul>
                    <h5>Templates</h5>
                    <ul id="templates">
                        <li>Invoice Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Proposal Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Contract Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Agreement Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Scope of Work Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Quote Templates <i className="fa-solid fa-chevron-down"></i></li>
                        <li>Credit Note Templates</li>
                        <li>Estimate Templates</li>
                    </ul>
                </div>
                <div id="footer-card-3" className="footer-card">
                    <h4>BONSAI</h4>
                    <ul className="bonsai">
                        <li>About</li>
                        <li>Carrers</li>
                        <li>Support</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Privacy policy</li>
                        <li>Legal</li>
                    </ul>
                    <ul className="bonsai">
                        <li>Affiliates</li>
                        <li>Write for Us</li>
                    </ul>
                    <p id="comparisons">Comparisons <i className="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>
        </footer>
  )
}

export default Footer