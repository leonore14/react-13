import React, { Component } from 'react';
import axios from 'axios';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      submitForm(e) {
        e.preventDefault();
        
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        
        axios.post(url, this.state)
         .then(res => res.data)
         .then(res => {
         alert(`Movie added with the ID n° ${res.id} !`);
         })
         .catch(e => {
         console.error(e);
         alert(`Error - impossible to add your movie : ${e.message}`);
         });
      }

    render(){
        return(

        <>
        <div className="Form">
            
            <h1>Add Your Favorite Movie !</h1>

            <form onSubmit={this.submitForm}>
            <fieldset>
                <legend>Information</legend>
      
            <div className="form-data">
                <label htmlFor="title">Movie Title</label>
                <input
                    type="text"
                    id=" "
                    name="title"
                    onChange={this.onChange}
                    value={this.state.lastname}
                 />
            </div>

            <div className="form-data">
                <label htmlFor="poster">Movie Poster (url)</label>
                <input
                    type="text"
                    id=" "
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.firstname}
                />
            </div>

            <div className="form-data">
                <label htmlFor="comment">Additional Comments</label>
                <input
                    type="text"
                    id=" "
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.firstname}
                />
            </div>
      
            <hr />
            
            <div className="form-data">
                <input type="submit" value="Send" />
            </div>
    
            </fieldset>
            </form>

            <p className="pLink"><a href=" https://post-a-form.herokuapp.com/api/movies/" className="linkToApi">Click here to check if your movie has been added to the API :-)</a></p>


        </div>
        </>
    )
    }

}

export default Form ;