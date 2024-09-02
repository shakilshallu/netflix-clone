import "./landingpage.css";
import { IoIosArrowForward } from "react-icons/io";


// Image
import ImgOne from "../../assets/images/ban-tv.png";
import ImgTwo from "../../assets/images/ban-mobile.jpg";
import ImgThree from "../../assets/images/banner-3.png";
import ImgFour from "../../assets/images/banner-4.png";
import stranger from "../../assets/images/boxshot.png";
import imgfour from "../../assets/images/download-icon.gif.gif"

// video
import VideoOne from "../../assets/videos/video-1.m4v";
import VideoTwo from "../../assets/videos/video-2.m4v";
// Component
import Navbar from "../../component/navbar/Navbar";
import Heading from "../../component/heading/Heading";
import Content from "../../component/heading/Content";
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";
import Banner from "../../component/banner/Banner";
import Footer from "../../component/footer/Footer";
import { Accordion } from "../../component/accordian/Accordian";
import { useState } from "react";


const LandingPage = () => {
    const [email, setEmail] = useState("");

    console.log(email);
    return (
        <>
            <div className="main-banner">
                <Navbar />
                <div className="main-title">
                    <Heading 
                        className="header" 
                        size="bold"
                        color="white"
                        title="Unlimited movies, TV shows and more"
                    />
                    <Content className="maincontent" color="white" content="Watch anywhere. Cancel anytime." />
                    <Content className="maincontent" color="white" content="Ready to watch? Enter your email to create or restart your membership."
                    />

                    <div className="content-box">
                        <Input
                            bg="bg-transparent"
                            label="Email Address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Button
                            className="getted"
                            size="large"
                            round="round"
                            color="white"
                            background="bg-2"
                            iconProp="rightarrow"
                            icon={<IoIosArrowForward />}
                            value="Get Started"
                        />
                    </div>
                </div>
            </div>
            <Banner video={VideoOne} vidSize="small-video" img={ImgOne}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content1"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>


                
                <Banner img={ImgTwo} className='imgTwo' clas="container-two">
                    <div className="stranger">
                        <div className="strangerThings">
                            <img src={stranger} alt="img"  height={'90px'} width={"70px"}/>
                        </div>
                        <div className="strangercontent">
                            <h2 className="p1">Stranger <br/> Things</h2>
                            <p className="p2">Downloading...</p>
                        </div>
                        <div className="strangerdownload">
                            <img src={imgfour} alt="img" height={'50px'} width={'50px'} />
                        </div>
                    </div>
            
                    <Heading
                        align="bottom"
                        className="heading3"
                        color="white"
                        size="bold"
                        title="Download your shows to watch offline"
                    />
                    <Content
                        className="content3"
                        color="white"
                        content="Save your favourites easily and always have something to watch"
                    />
                    
                </Banner>
        

            <Banner video={VideoTwo} vidSize="large-video" img={ImgThree}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Watch everywhere"
                />
                <Content
                    className="content1"
                    color="white"
                    content="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
                />
            </Banner>

            <Banner img={ImgFour} className='containersection' clas='four'>
                <Heading
                    align="bottom"
                    className="heading4"
                    color="white"
                    size="bold"
                    title="Create profiles for kids"
                />
                <Content
                    className="content4"
                    color="white"
                    content="Send children on adventures with their favourite characters in a space made just for them-free with your membership."
                />
            </Banner>
            <div className="accordian-section">
                <Heading align="faq-heading" color='white' title="Frequently Asked Questions" />
                <Accordion />

                <Content
                    color="white"
                    className="center"
                    content="Ready to watch? Enter your email to create or restart your membership."
                />
                <div className="content-box">
                    <Input
                        bg="bg-transparent"
                        label="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                        className='getted'
                        size="large"
                        round="round"
                        color="white"
                        background="bg-2"
                        iconProp="rightarrow"
                        icon={<IoIosArrowForward />}
                        value="Get Started"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;