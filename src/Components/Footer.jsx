import React,{Component} from "react";

export class Footer extends Component{
    render(){
        return(
            <footer className="bg-black text-white w-full h- font-karla">
                <div className=" mx-auto grid md:grid-cols-2 gap-4 max-w-7xl sm:grid-cols-1 ">
                    <div className="flex space-x-3 items-center">
                        <img src="/images/workfall_logo.png" alt="Logo" className="w-[55px] h-[48px] ml-5"/>
                        <p className="text-[#F16429] font-karla font-medium text-3xl">Workfall</p>
                    </div>
                    <div className="md:flex sm:block justify-between mt-[40px]">
                        <div className=" ml-4 sm:mb-[25px]">
                            <h3 className="font-semibold text-[#FCB28E]">Quick Links</h3>
                            <ul>
                                <li><a href="#" class="hover:underline text-[#D9D9D9]">Blogs</a></li>
                                <li><a href="#" class="hover:underline text-[#D9D9D9]">Stories</a></li>
                            </ul>
                        </div>
                        <div className=" ml-4 sm:mb-[25px]">
                            <h3 className="font-semibold text-[#FCB28E]">Contact Us</h3>
                            <div className="flex mt-2 mb-2">
                                <img src="/images/mail.png" alt="mail"/>
                                <p className="text-[#D9D9D9] ml-2 cursor-pointer">contact@workfall.com</p>
                            </div>
                            <div className="flex mt-2">
                                <img src="/images/call.png" alt="call"/>
                                <p className="text-[#D9D9D9] ml-2 cursor-pointer">+1 800 900 2022</p>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-semibold text-[#FCB28E]">Follow Us on:</h3>
                            <div className="flex space-x-2 mt-2">
                                <a href="#"><img src="/images/Facebook Negative.png" alt="Facebook" className="w-6 h-6"/></a>
                                <a href="#"><img src="/images/Twitter_Negative.png" alt="Twitter" className="w-6 h-6"/></a>
                                <a href="#"><img src="/images/Instagram Negative.png" alt="Instragram" className="w-6 h-6"/></a>
                                <a href="#"><img src="/images/LinkedIn_Negative.png" alt="LinkedIn" className="w-6 h-6"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-7xl pb-[20px]">
                    <p className=" border border-b-1 border-[#D9D9D9] mb-8 mt-8 space-x-4 flex "></p>
                    <div className="text-[#D9D9D9] sm:block md:flex  pb-[20px]">
                        <div className="flex items-center cursor-pointer">
                            <p class="mr-9 ml-5">Privacy Policy</p>
                            <p className="mr-9">Cookies Policy</p>
                            <p className="mr-9">Terms of Service</p>
                        </div>
                        <div className="flex">
                            <div className="md:ml-40 mb-2 mt-2 ml-4">
                                <div>
                                    <p>© 2022 Workfall, Inc.</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center space-x-2  sm:ml-48">
                                <img src="/images/visa-2 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/Master card icon 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/layer 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/unionPay 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/Stripeimg 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/mercury-com-logo-vector 1.png" className="mr-2 w-5 h-6"/>
                                <img src="/images/62c71ad6b44be1961554a6e3 1.png" className="mr-2 w-7 h-6"/>
                                <img src="/images/AWS 1.png" className="mr-2 w-5 h-6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;