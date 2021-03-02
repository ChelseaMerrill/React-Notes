import React, {Component} from 'react';
import './Form.styles.css'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            passowrd: '',
            savedUsername: 'Pal'
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    this.setState({
        username:'',
        password:'',
        savedUsername: this.state.username
    })

    }
    render(){
        return (
            <div className='body'>
                <h1>Welcome {this.state.savedUsername}</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor='username'>Userame: </label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}></input> 
                    </div>

                    <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form