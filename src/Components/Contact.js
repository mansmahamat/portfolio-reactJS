import React, { Component } from 'react';
import './Contact.css';
import ReactContactForm from 'react-mail-form';
import TwitterTimeline from 'react-twitter-embedded-timeline';



class Contact extends Component {
  
  
  
  
  
   render() {

    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>N'hésitez pas à me contacter si vous aimez ce que je fais .</span></h1>

            </div>

            <div className="ten columns">

                  
            </div>

         </div>

         <div className="row">
            <div className="eight columns">

            <ReactContactForm 
            className="littleForm"
            to="mansour.mahamat.salle@gmail.com" 
            titlePlaceholder="Sujet..."
            contentsPlaceholder="Votre message..."
            buttonText="Envoyer l'email"
            />


            
           
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                      
                        <p>
                           Ma playlist pour travailler :
                           <iframe title="spotify" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0SlHbqMm3vJ" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </p>



                        <p> <TwitterTimeline  />
                        <a className="twitter-timeline" href="https://twitter.com/Mans____M?ref_src=twsrc%5Etfw" data-tweet-limit="2">
                           
                           
                        </a> 
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                           </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
