import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ismail');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
    } 

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required="required"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Blog body:</label> 
                <textarea
                    required="required"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Ismail">Ismail</option>
                    <option value="Samad">Samad</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;