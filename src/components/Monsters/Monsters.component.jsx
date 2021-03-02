import React, {Component} from 'react'


class Monsters extends Component {
    constructor(){
        super()
        this.state= {
            monsters: []
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()
            .then((data) => this.setState({monsters: data})))
    }


    render(){
        return(
            <div>
                <h1>Monsters</h1>
                {
                    this.state.monsters.map (dragon =>
                        <div>
                        <h1>{dragon.name}</h1>
                        <p>{dragon.email}</p>
                        <p>{dragon.username}</p>
                        </div>
                        )
                }
            </div>
        )
    }
}



export default Monsters