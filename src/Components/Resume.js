import React, { Component } from 'react';
import './Resume.css';





class Resume extends Component {
  render() {
    
    if(this.props.data){
      
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var skillsImage = 'images/skills/'+skills.image;
        return <div key={skills.name} className="columns portfolio-item">
        <div className="item-wrap">
       
           
            
               <div className="portfolio-item-meta">
              <img alt={skills.name} src={skillsImage} />   
              <h4>{skills.name}</h4>
                  
                  <em>{skills.description}</em>
               </div>
         
       </div>
  
     </div>
      })

      var softSkills = this.props.data.softSkills.map(function(softSkills){
        var softSkillsImage = 'images/skills/'+softSkills.image;
        return <div key={softSkills.name} className="columns portfolio-item">
        <div className="item-wrap">
       
           
            
               <div className="portfolio-item-meta">
              <img alt={softSkills.name} src={softSkillsImage} />   
              <h4>{softSkills.name}</h4>
                  
                 
               </div>
         
       </div>
  
     </div>
      })
    }

    return (
      <section id="resume" >

      <div className="row education">
         <div className="three columns header-col">
            <h1><span className="hey">Formations</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Expériences</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>




    <div className="row">

<div className="twelve columns collapsed">

<h1><span>Technologies utilisées</span></h1>

   <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
       {skills}
   </div>
 </div>
</div>

<div className="row">

<div className="twelve columns collapsed">

   <h1><span>Soft Skills</span></h1>

   <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
       {softSkills}
   </div>
 </div>
</div>



     
   </section>
    );
  }
}

export default Resume;
