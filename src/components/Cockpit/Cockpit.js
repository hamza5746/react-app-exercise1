import React from 'react';

import classes from './Cockpit.css';


const Cockpit=(props)=>{
    let btnClass='';
    const assignedClasses=[];
    
    if(props.showPersons){
        btnClass=classes.Red;
    }


    if(props.persons.length <=2){
      assignedClasses.push(classes.red);//classes=['red']
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);  //classes=['red','bold']
    }
    return( <div className={classes.Cockpit}>
                <h1>{props.titlePage}</h1>
                <p className={assignedClasses.join(' ')}>This is Working!!!</p>
                <button className={btnClass} onClick={props.show}>Toogle Person</button>
           </div>);
}
export default Cockpit;