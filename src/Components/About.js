import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Mansour Mahamat Salle" />
         </div>
         <div className="nine columns main-col">
            <h2>Qui suis je ?</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact </h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city}  {zip}
                   </span><br />
						  
                     <span>
                        <a href="mailTO:mansour.mahamat.salle@gmail.com" target="_blank" rel="noopener noreferrer" >
                           {email}
                        </a>
                     </span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Téléchargez mon CV</a>
                  </p>
                  <p>
                     <a href="https://drive.google.com/open?id=1_cZux-KvSOyNio8CigBKsjcFjNRdgedM" target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-eye"></i>Lettre de recommandation</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
