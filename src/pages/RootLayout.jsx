import {
  Outlet,
  // NavLink
} from "react-router-dom";
import { useState } from "react";
import MainNavigation from "../components/MainNavigation";
import "./StyleSheet.css";

import { MdNavigateNext } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import NavHoverContent from "./NavHoverContent";

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsDropdownOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsDropdownOpen(true);
    }
  };

  const handleItemClick = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const dropdownContents = {
    Products: (
      <div className="dropdown-hoverContent-infos">
        <span className="hovercontent-list">
          <h3>PRODUCTS</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Edge Stack</p>
            <p>Telepresence</p>
            <p>Blackbird Beta</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>BUILT ON ENVOY PROXY</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Envoy Proxy</p>
          </div>
        </span>
      </div>
    ),
    Docs: (
      <div className="dropdown-hoverContent-infos">
        <span className="hovercontent-list">
          <h3>DOCS</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Documentation</p>
            <p>Edge Stack Quick Start</p>
            <p>Telepresence Quick Start</p>
          </div>
        </span>
      </div>
    ),
    Resources: (
      <div className="dropdown-hoverContent-infos">
        <span className="hovercontent-list">
          <h3>LEARN</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Blog</p>
            <p>Kubernetes Glossary</p>
            <p>Guides, eBooks & White Papers</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>LISTEN</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Podcasts</p>
            <p>Events & Webinars</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>ACT</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Case Studies</p>
            <p>API Security Course</p>
            <p>Advocate Program</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>COMPANY</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </span>
      </div>
    ),
    Solutions: (
      <div className="dropdown-hoverContent-infos">
        <span className="hovercontent-list">
          <h3>BY USE CASE</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Maximize API Gateway Security</p>
            <p>Creating a Productive Kubernetes Local Dev Environment</p>
            <p>Kubernetes Ingress Controller</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>BY INDUSTRY</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Financial Services</p>
            <p>General/Other</p>
          </div>
        </span>
        <span className="hovercontent-list">
          <h3>BY ROLE</h3>
          <div className="horizontal-line"></div>
          <div className="hovercontent-list-item">
            <p>Tech & Engineering Leaders</p>
            <p>DevOps</p>
            <p>Developers</p>
          </div>
        </span>
      </div>
    ),
  };

  return (
    <>
      <MainNavigation title="KubeInsights">
        <div className="navlist">
          <NavHoverContent />
          <div className="navlinks">
            <span>Log In</span>
            <button>
              Start Free Trial <MdNavigateNext size={17} />
            </button>
            <button id="contact-us-btn">
              Contact Us <MdNavigateNext size={17} />
            </button>
            <div className="hamburger-menu" onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <RiCloseLargeFill color="#ffffff" size={26} />
              ) : (
                <RxHamburgerMenu color="#ffffff" size={26} />
              )}
            </div>
          </div>
        </div>
      </MainNavigation>
      {isDropdownOpen && (
        <div className={`navlist-dropDown ${isClosing ? "closing" : ""}`}>
          <div className="navlist-dropdown-items">
            {Object.keys(dropdownContents).map((item) => (
              <div
                key={item}
                className="dropdown-item-link"
                onClick={() => handleItemClick(item)}
              >
                <div className="dropdown-item-header">
                  <span>{item}</span>
                  <GoChevronDown
                    size={25}
                    className={`chevron-icon ${
                      openItem === item ? "rotate" : ""
                    }`}
                  />
                </div>
                {openItem === item && (
                  <div
                    className="dropdown-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p>{dropdownContents[item]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="navlinks-dropDown">
            <span>Log In</span>
            <div className="navlinks-dropDown-btn">
              <button>
                Start Free Trial <MdNavigateNext size={17} />
              </button>
              <button id="contact-us-btn">
                Contact Us <MdNavigateNext size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
