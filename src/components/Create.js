import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ismail');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added');
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('Ismail');
            navigate('/');
        })
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
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding blog...</button> }
            </form>
        </div>
    );
}

export default Create;