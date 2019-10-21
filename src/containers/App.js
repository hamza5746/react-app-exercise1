import React, { Component } from 'react';
//import Radium,{StyleRoot} from 'radium';
//import logo from './logo.svg';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state={
    person:[
       {id:'sadw1',name:'Hamza',age:'22'},
       {id:'ckds1',name:'Danish ',age:'23'},
       {id:'mckld1',name:'Faizan',age:'21'}
      ]
      ,Other:'Something',
      displaydiv:false
  };
  
  switchNameHandler=(newName)=>{
      this.setState({
          person:[
             {name:'Hamza',age:'22'},
             {name:newName,age:'23'},
             {name:'Faizan',age:'21'}
            ]
        }); 
   }
   changeNameHandler=(event,id)=>{
    
    const personIndex= this.state.person.findIndex(p=>{
      return p.id===id
    });

    
    const duplicateperson={
      ...this.state.person[personIndex]
    }
    duplicateperson.name=event.target.value;
    const duplicatePerArray=[...this.state.person];
    duplicatePerArray[personIndex]=duplicateperson;  

    this.setState({
        person:duplicatePerArray   
    });
   }
   displayInfo=()=>{
    const dis=this.state.displaydiv;
    this.setState({
      displaydiv:!dis}) 
   }
   deletePerson=(index)=>{
     //const del = this.state.person;//copy the pointer not the whole array 
     //To real copy we need this like as follow
     const del=[...this.state.person];// Alternative: cont del = this.state.person.slice();
     del.splice(index,1);
    //const personpointer=this.state.person;
     this.setState({
        person:del
      })
   }
  
  render() {
/*     const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
       ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      } 
    }; */
    let persons=null;
    
    if(this.state.displaydiv)
    {
      persons=<Persons person={this.state.person}
          clicked={this.deletePerson}
          changed={this.changeNameHandler}/>;
        //btnClass=classes.Red;
        //style.backgroundColor=['red'];
  /*     style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      } */
    }
    
    return (
        <div >
          <Cockpit
              titlePage={this.props.title} 
              persons={this.state.person}
              show={this.displayInfo}
              showPersons={this.state.displaydiv}
              />
           {persons}
        </div>
        
      );
  }
}
/* 
export default Radium(App); */
export default App;