import React,{Component} from 'react'

import Person from './Person/Person';
class Persons extends Component {
        render(){
                return this.props.person.map((abc, index) => {
                        return <Person
                                click={(event) => this.props.clicked(index)}
                                name={abc.name}
                                age={abc.age}
                                key={abc.id}
                                change={(event)=>this.props.changed(event,abc.id)}
                                >
                        </Person>
                })
                    
        }       
}


export default Persons;

