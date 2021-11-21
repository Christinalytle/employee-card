import React from 'react'; 
import EmployeeCard from './employee-card'; 

const mockEmployeeData = [
{
    id: 1234, 
    firstName: 'Anna', 
    lastName: 'Watson', 
    title: 'Lead Engineer', 
    department: 'Content Solutions'
},
{
    id: 8734,
    firstName: 'Bill', 
    lastName: 'Finnegan',
    title: 'Regional Sales Director', 
    department: 'Sales'
}, 
{
    id: 2331, 
    firstName: 'Lisa', 
    lastName: 'Flynn', 
    title: 'Business Analyst', 
    department: 'Product Development'
}, 
{
    id: 5345,
    firstName: 'John', 
    lastName: 'Ortiz',
    title: 'Chief Counsel', 
    department: 'Legan'
}
]


export default class EmployeeWidget extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { //this is the only place you should be modifying this.state directly
            employees: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ employees: mockEmployeeData })
        }, 2000); 
    }

    shouldComponenetUpdate(nextProps, nextState) {
        return false; //will not render
    }

    render() {
        const employeeCards = this.state.employees.map(employee => <EmployeeCard {...employee} key={employee.id} />)
        return (
            <div>
                {employeeCards}
            </div>
        ); 
    }

}