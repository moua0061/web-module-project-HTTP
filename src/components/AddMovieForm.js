import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddMovie = (props) => {

    const { setMovies } = props;
    const { push } = useHistory();

    const initialValues = {
        title: "",
        director: "",
        genre: "",
        metascore: 0,
        description: ""
    };

    const [ values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = (event) => {   
        event.preventDefault()
        axios.post('http://localhost:9000/api/movies', values)
            .then(resp => {
                // console.log(resp);
                setMovies(resp.data);
                // push('/movies')
                window.location.href='/movies';
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="col">
		<div className="modal-content">
			<form onSubmit={handleSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Add Movie <strong>{movie.title}</strong></h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input 
                        value={title} 
                        onChange={handleChange} 
                        name="title" 
                        type="text" 
                        className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input 
                        value={director} 
                        onChange={handleChange} 
                        name="director" 
                        type="text" 
                        className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input 
                        value={genre} 
                        onChange={handleChange} 
                        name="genre" 
                        type="text" 
                        className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input 
                        value={metascore} 
                        onChange={handleChange} 
                        name="metascore" 
                        type="number" 
                        className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea 
                        value={description} 
                        onChange={handleChange} 
                        name="description" 
                        className="form-control">
                        </textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input 
                    type="submit" 
                    className="btn btn-info" 
                    value="Save"/>

					<Link to={`/movies/1`}>
                    <input 
                    type="button" 
                    className="btn btn-default" 
                    value="Cancel"/>
                    </Link>
				</div>
			</form>
		</div>
	</div>
    )
}

export default AddMovie;