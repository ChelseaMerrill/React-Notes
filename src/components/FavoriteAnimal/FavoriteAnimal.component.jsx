import React, {Component} from 'react'

import './FavoriteAnimal.styles.css'

class FavoriteAnimal extends Component {
    constructor(props){
        super(props)
    }

    render(){
    let StudentArray= this.props.animals.StudentData
    return StudentArray.map(student => {
        return (
            <p key={student.id} className='animal'>{student.name}'s favorite animal is {student.animal}</p>
        )
    })
}   
}
export default FavoriteAnimal