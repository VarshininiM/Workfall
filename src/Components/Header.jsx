import React, { Component } from "react";
import { Link, useNavigate } from 'react-router-dom';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };
 
  render() {
    const { menuOpen } = this.state;
    return (
      <div className="flex gap-[62px] items-center md:justify-center h-[90px] bg-[#FFFFFF] py-[21px] p-[30px] justify-between">
        <nav className="flex font-karla text-[#000000] font-medium xl:text-[15px] xl:gap-12 lg:text-[15px] lg:gap-5 md:text-[15px] md:gap-4 sm:text-[10px] max-[768px]:hidden">
          <Link to="#">WHY WORKFALL</Link>
          <Link to="#">JOIN US</Link>
          <Link to="#">PARTNERS</Link>
          <Link to="#">CLIENTS</Link>
        </nav>
        <div className="flex lg:justify-center">
          <img src="/images/workfall_logo.png" className="w-[50px] h-[45px] lg:w-[50px] xl:w-[50px] xl:h-[40px]" alt="workfall logo" />
        </div>
        <div className="flex font-karla text-[#000000] font-medium xl:text-[15px] xl:gap-12 lg:text-[15px] lg:gap-5 md:text-[15px] md:gap-4 sm:text-[10px] sm:gap-2 max-[768px]:hidden cursor-pointer">
          <Link to="#">BLOG</Link>
          <Link to="#">ARE YOU HIRING?</Link>
          <Link to='/signup'>SIGN UP</Link>
          <Link to='/login'>SIGN IN</Link>
        </div>
        <div className="w-8 h-8 md:hidden relative" onClick={this.toggleMenu}>
          <img src="/images/navbar.png" alt="Menu" className="w-full h-full object-cover" />
        </div>

        <div
          className={`fixed top-0 right-0 z-10 w-[100%] max-w-[640px]:w-full max-w-[768px]:w-1/2 h-full bg-[#FBF7F4] transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="w-8 h-8 absolute right-4 top-4 text-xl text-black bg-orange-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={this.toggleMenu}
          >
            X
          </div>

          <nav className="grid text-[#000000] font-karla font-medium text-base justify-center mt-[50px] gap-[15px]">
            <Link to="#">WHY WORKFALL</Link>
            <Link to="#">JOIN US</Link>
            <Link to="#">PARTNERS</Link>
            <Link to="#">CLIENTS</Link>
          </nav>
          <div className="grid text-[#000000] font-karla font-medium text-base justify-center gap-[15px] mt-6">
            <Link to="#">BLOG</Link>
            <Link to="#">ARE YOU HIRING?</Link>
            <Link to='/signup'>SIGN UP</Link>
            <Link to='/login'>SIGN IN</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

