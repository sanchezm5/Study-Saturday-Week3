import React, { Component } from 'react'
import axios from 'axios'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            students: []
            //students = []
        }
    }

    async componentDidMount () {
        try {
        //make axios request to grab students data
        //the first render only grabs the static data
        //the second time (COMPONENT DID MOUNT IS TRIGGERED) we can grab additional data
        //this allows us to show a loading symbol or some other info to let the user know we're
         
            const res = await axios.get('/student')
            const studentData = res.data;
            this.setState({students: studentData})

            //destructuring method
            // const { data } = await axios.get('/student')
        } catch (err) {
            console.error(err)
        }
    }
    //Look at contact list
    render() {
        console.log('STATE', this.state)
        const { students } = this.state; //this.state.students
        return (
            <div>
                <h1>Students</h1>
                {
                    students.map((student) => (
                        <div key={student.id} >{student.fullName}</div>
                    ))
                }
            </div>
        )
    }
}

export default Main;
