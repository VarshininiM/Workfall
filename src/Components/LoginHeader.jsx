import React,{Component} from "react";
import { Link } from "react-router-dom";
export class LoginHeader extends Component{
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
    render(){
        const { menuOpen } = this.state;
        return(
            <div className="flex gap-[62px] font-karla items-center md:justify-center h-[90px] bg-[#FFFFFF] py-[21px] p-[30px] justify-between">
                <div className="flex lg:justify-center items-center gap-3">
                    <img src="./images/workfall_logo.png" className="w-[50px] h-[45px] cursor-pointer lg:w-[50px] xl:w-[50px] xl:h-[40px]" alt="workfall logo"></img>
                    <div>
                        <h4 className="text-[#F16429] font-kar; font-medium text-lg cursor-pointer">Workfall</h4>
                        <h5 className="text-[#FCB28E] font-karla">Find the very best</h5>
                    </div>
                </div>
                <nav className="flex gap-10 text-[#000000] max-[768px]:hidden">
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">Stories</a>
                    <a href="#">Want to work with us?</a>
                    <a href="#" className="text-[#F16429]">Hire Now</a>
                </nav>
                <div className="flex text-[#A7A7A7] gap-8 max-[768px]:hidden">
                    <p>+1 650 900 2022</p>
                    <p>contact@workfall.com</p>
                </div>
                <div className="flex max-[1024px]:hidden">
                    <button className="text-white w-[89px] h-[39px] rounded bg-[#F2652B] cursor-pointer justify-center">
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>
                <div className="w-8 h-8 md:hidden relative" onClick={this.toggleMenu}>
                    <img src="/images/navbar.png" alt="Menu" className="w-full h-full object-cover" />
                </div>
                <div
                    className={`fixed top-0 z-10 right-0 w-[100%] max-w-[640px]:w-full max-w-[768px]:w-1/2 h-full bg-[#FBF7F4] transform transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                <div
                    className="w-8 h-8 z-10 absolute right-4 top-4 text-xl text-black bg-orange-500 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={this.toggleMenu}
                    >
                    X
                </div>
                <nav className="grid text-[#000000] font-medium text-base justify-center mt-[50px] gap-[15px]">
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">Stories</a>
                    <a href="#">Want to work with us?</a>
                    <a href="#" className="text-[#F16429]">Hire Now</a>
                </nav>
                <div className="grid text-[#000000] font-medium text-base justify-center gap-[15px] mt-6">
                    <p>+1 650 900 2022</p>
                    <p>contact@workfall.com</p>
                </div>
                <div className="flex justify-center">
                    <button className="text-white w-[89px] h-[39px] rounded bg-[#F2652B] cursor-pointer justify-center">
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>
                </div>
            </div>
        )
    }
}
export default LoginHeader;
