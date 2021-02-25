import React, {Component} from 'react'

import './FavoriteCandy.styles.css'

class FavoriteCandy extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let StudentArray= this.props.candies.StudentData
        return StudentArray.map(student => {
            return (
                <p key={student.id} className='candy'>{student.name}'s favorite candy is {student.candy}</p>
            )
        })
    }
}
export default FavoriteCandy