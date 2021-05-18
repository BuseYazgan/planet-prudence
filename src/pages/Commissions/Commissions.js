import React, {useEffect} from 'react'
import './Commissions.scss'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Patreon from '../../components/Patreon/Patreon'
import Footer from '../../components/Footer/Footer'
import portrait from '../../images/portrait-small.png'
import portraitPic from '../../images/Rectangle-66.png'
import customPic from '../../images/Rectangle-66-2.png'
import businessPic from '../../images/Rectangle-66-3.png'
import mountain from '../../images/mt-sample-background-1024x683.jpg'
import illustration from '../../images/illustration-1024x576.jpg'
import patreon from '../../images/patreon-1536x864.jpg'
import { NavLink } from 'react-router-dom'

const Commissions = () => {


    useEffect(() => {

        window.scrollTo(0, 0);
        
    }, [])

   
    return (
        <div className={"commissionPage"}>
            <Navbar/>
            <Header/>
            <div className={"commissionsDiv"}>
              <section className={"firstSection"}>
                  <img src={portrait} alt="portrait"/>
                  <div className={"firstDiv"}>
                      <h1> Commissions</h1>
                      <p>Interested in a custom made gift for yourself or your loved one(s)? Check below for more info and starting prices!</p>
                      <p>If your wish does not fit any of the descriptions below, you can still contact me and we’ll find a way to make you anything you want (well.. I’ll do my very best to make you anything you want)!</p>
                  </div>
                  <img src={portrait} alt="portrait"/>
              </section>              
              <hr className={"horizontal"}/>
              <section className={"secondSection"}>
                  <div className={"Portraits"}>
                    <img src={portraitPic} alt="portraitPic"/>
                    <h3>Portraits</h3>
                    <p>Custom portrait of your choice. This original handmade piece is A5 and is handsigned by me. Starts from € 250 with maximum 2 people and no complex background. Any complex additions such as many accessories, attributes and backgrounds or more characters will be charged extra. Full body portraits are also possible!</p>
                    <h4>From € 250</h4>
                    <div className={"smallInfo"}>Every commissioned artwork comes with a free handsigned miniprint (A6)!</div>
                    <div className="buttonDiv">
                    <NavLink to='/contact' className="linkStyle">CONTACT ME</NavLink>
                    </div>
                  </div>
                  <div className={"customComics"}>
                    <img src={customPic} alt="customPic"/>
                    <h3>Custom Comics</h3>
                    <p>Custom comic starring Planet Prudence and/or yourself or your loved one. You can decide what happens in this two panel comic. Planet Prudence can also be changed in another character of your choice if you would want that! The comic can include simple attributes, but a complex background (*) or extra characters will be charged extra.</p>
                    <h4>From € 290</h4>
                    <div className={"smallInfo"}>Every commissioned artwork comes with a free handsigned miniprint (A6)!</div>
                    <div className="buttonDiv">
                    <NavLink to='/contact' className="linkStyle">CONTACT ME</NavLink>
                    </div>
                  </div>
                  <div className={"businessComics"}>
                    <img src={businessPic} alt="businessPic"/>
                    <h3>Business Commissions</h3>
                    <p>Business commissions (Planet Prudence comic or an advertisement of any kind) start at €320 starring only Planet Prudence in the comic and no complex background.
                    The price can increase depending on the size of the project and the complexity of the commission. Contact me for an exact price!</p>
                    <div className="buttonDiv">
                    <NavLink to='/contact' className="linkStyle">CONTACT ME</NavLink>
                    </div>
                  </div>
              </section>
              <hr className={"horizontal"}/>
              <section className={"thirdSection"}>
                  <div className={"pics"}>
                      <img src={mountain} alt="mountain"/>
                      <img src={portraitPic} alt="portrait"/>
                      <img src={customPic} alt="custom"/>
                      <img src={businessPic} alt="business"/>
                      <img src={illustration} alt="illustration"/>
                      <img src={patreon} alt="patreon"/>
                  </div>
                  <div className={"picInfos"}>
                      <h2>Social media collaborations</h2>
                      <p>Do you want me to feature your product in an Instagram post or story or on my blog? It will be seen by more than 650.000 people on Instagram and by 10.000 people on my blog per month. Contact me about pricing for collaborations!</p>
                      <NavLink to='/contact' className="linkStyle">CONTACT ME</NavLink>
                  </div>
              </section>
              </div>
            <Patreon/>
            <Footer/>
        </div>
    )
}

export default Commissions
