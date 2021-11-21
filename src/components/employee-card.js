import React from 'react'; 

export default class EmployeeCard extends React.Component {
    // constructor(props) {
    //     super(props); 
    //     this.handleClick = this.handleClick.bind(this); 
    // }
    // handleClick() {
    //     console.log(`You clicked the entry for ${this.props.firstName} ${this.props.lastname}`); 
    // }
    
    render() {
        return (
            <div>
                <p>First name: {this.props.firstName} </p>
                <p>Last Name: {this.props.lastName}</p>
                <p>Title: {this.props.title}</p>
                <p>Department: {this.props.department}</p>
            </div>

        ); 

    }
}