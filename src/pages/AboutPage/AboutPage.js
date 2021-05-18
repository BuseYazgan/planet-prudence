import React from 'react'
import './AboutPage.scss'
import about from '../../images/about.png'
import '../../components/Navbar/Navbar'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Patreon from '../../components/Patreon/Patreon'
import Footer from '../../components/Footer/Footer'
import { FaPatreon, FaInstagram, FaDiscord, FaYoutube, FaTwitter, FaFacebook} from 'react-icons/fa';

const AboutPage = () => {
    return (
        <div className={"aboutDiv"}>
        <Navbar/>
        <Header/>
        <section className={"aboutme-1"}>
         <div className={"aboutmeDiv"}>
          <h1>About me</h1>
          <p>My name is Prudence Geerts. I’m an independent/freelance artist, author and illustrator. When I’m not drawing, I’m probably reading, eating or spending time with my best friend or my brother watching series or talking about our days.</p>
          <p>I make relatable comics on my Instagram page for a pretty long time now. They started out as a personal outlet because I always felt these things that I couldn’t tell to anyone else because of how stupid I thought they were, so I decided to draw them and eventually keep them as a journal on an Instagram page. Little did I know that other people thought the same things I did and it turned out to be a huuuge community on this day.</p>
         </div>
        </section>
        <section className={"aboutme-2"}>
            <div className={"leftPart"}>
              <h1>Let's go back, back to the beginning</h1>
              <p>I started drawing ever since I was a little kid. My older brother went to art school and I was determined to do the same thing he did in high school when I was older. And so I did. I was less of a successful student because my work was “too commercialistic”. In my senior year we had our final project and I was assigned to a mentor who would guide me through the process. Instead of doing his job, he made me decide between having sex with him and getting my degree, or not getting my degree and leave with my self-respect. I went for the latter and ended up having no degree and seeing many people leave off for college.</p>
              <p>Years went by going in and out of therapy, taking medication and being depressed. After years, other stories were told about friends who went through the same thing in high school as I did but did end up with the degree by doing what they were told to do. I was disgusted with the art community and neglected my passion for drawing.</p>
              <hr/>
              <p>Five years after this happening in high school, I started a kind of boring job at a call centre where the workload was at a low pit. I started doodling in my notepad again and I immediately knew the love for art was still there. I just had to develop it again.</p>
              <p>So here we are, 10 years after what happened in high school. Being the person and freelance illustrator I am today. I’m proud of what I’ve achieved so far, and I’m happy to have a community that loves my art a lot.</p>
              <p>If you want to collaborate, advertise or send me something, please write me a message</p>
              <p>Love,</p>
              <p><b>Prudence</b></p>
            </div>
            <div className={"rightPart"}>
               <img src={about} alt="aboutImage"/>
            </div>
        </section>
        <section className={"aboutme-3"}>
        <hr/>
        <div className={"thirdTitle"}>
        <h3>Where you can see my work</h3>        
        </div>
        <div className={"thirdInfo"}>
            <div className={"leftIcons"}>
                <div className={"linkPart 1"}>
                    <div className={"iconPart 1"}>
                            <a href="https://www.instagram.com/planetprudence/"><FaInstagram size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 1"}>
                            <a href="https://www.instagram.com/planetprudence/">
                            <span><b>Instagram</b></span>
                            <p>Comics, Q&A videos, personal content and animated series</p>
                            </a>
                    </div>
                </div>
                <div className={"linkPart 2"}>
                    <div className={"iconPart 2"}>
                    <a href="https://www.patreon.com/planetprudence"><FaPatreon size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 2"}>
                            <a href="https://www.patreon.com/planetprudence">
                            <span><b>Patreon</b></span>
                            <p>Reference sheets,podcasts,front row early access to exclusive content</p>
                            </a>
                    </div>
                </div>
                <div className={"linkPart 3"}>
                    <div className={"iconPart 3"}>
                    <a href="/about"><FaDiscord size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 3"}>
                            <a href="/about">
                            <span><b>Discord</b></span>
                            <p>Chat with me and other artists, Art Club channel to post your own drawings</p>
                            </a>
                    </div>
                </div>
            </div>
            <div className={"rightIcons"}>
            <div className={"linkPart 1"}>
                    <div className={"iconPart 1"}>
                            <a href="https://twitter.com/planetprudence"><FaTwitter size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 1"}>
                            <a href="https://twitter.com/planetprudence">
                            <span><b>Twitter</b></span>
                            <p>Comics, Q&A videos, personal content and animated series</p>
                            </a>
                    </div>
                </div>
                <div className={"linkPart 2"}>
                    <div className={"iconPart 2"}>
                    <a href="https://www.facebook.com/10215867572155240"><FaFacebook size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 2"}>
                            <a href="https://www.facebook.com/10215867572155240">
                            <span><b>Facebook</b></span>
                            <p>Reference sheets,podcasts,front row early access to exclusive content</p>
                            </a>
                    </div>
                </div>
                <div className={"linkPart 3"}>
                    <div className={"iconPart 3"}>
                    <a href="https://www.youtube.com/channel/UCTXvEggtsZsVMTjsAcg-8RA"><FaYoutube size="1.25em" /></a>
                    </div>
                    <div className={"infoPart 3"}>
                            <a href="https://www.youtube.com/channel/UCTXvEggtsZsVMTjsAcg-8RA">
                            <span><b>Youtube</b></span>
                            <p>Chat with me and other artists, Art Club channel to post your own drawings</p>
                            </a>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        </section>
        <Patreon/>
        <Footer/>
        </div>
    )
}

export default AboutPage
