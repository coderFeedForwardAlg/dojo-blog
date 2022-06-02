// For creating a new blog
import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('mario');

    const handleSubmite = (e) =>{
        e.preventDefault(); 
        const blog = {title, body, auther}
    }

    return ( 
        <div className="create">
            <h2>
                Make a Blog
            </h2>
            <form onSubmit={handleSubmite}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange = { (e) => setTitle(e.target.value) } 
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange = { (e) => setBody(e.target.value) }
                ></textarea>
            
                <label>Blog Authe: </label>
                <select 
                    value = {auther}
                    onChange = { (e) => setAuther(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshy</option>
                    
                </select>
                <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{auther}</p>
        </div>
     );
}

export default Create;