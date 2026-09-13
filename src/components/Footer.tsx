import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal rounded-xl text-base-content p-10 mt-5">
        <aside>
          <img src={logo} alt="logo"></img>
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div>
            <a className="mr-5 text-[#475569] font-semibold link link-hover">
              GitHub
            </a>
            <a className="mr-5 text-[#475569] font-semibold link link-hover">
              Twitter
            </a>
            <a className="mr-5 text-[#475569] font-semibold link link-hover">
              LinkedIn
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="text-[16px] font-bold text-[#0F172A]">Product</h6>
          <a className="link link-hover text-[#64748B]">Home</a>
          <a className="link link-hover text-[#64748B]">Technologies</a>
          <a className="link link-hover text-[#64748B]">Projects</a>
        </nav>
        <nav>
          <h6 className="text-[16px] font-bold text-[#0F172A]">Company</h6>
          <a className="link link-hover text-[#64748B]">About us</a>
          <a className="link link-hover text-[#64748B]">Contact</a>
          <a className="link link-hover text-[#64748B]">Careers</a>
        </nav>
        <nav>
          <h6 className="text-[16px] font-bold text-[#0F172A]">Legal</h6>
          <a className="link link-hover text-[#64748B]">Privacy policy</a>
          <a className="link link-hover text-[#64748B]">Terms of Service</a>
        </nav>
      </footer>

      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside className="flex justify-between items-center">
          <p className="text-[#94A3B8]">
            Copyright © {new Date().getFullYear()} - Dev Stack. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
