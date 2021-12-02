import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .then(setIsPending(false));
    }, []);

    return (
        <div className="home">
            { isPending
            ? <div>Loading...</div>
            : <BlogList blogs={blogs} title="All Blogs" />
                }
        </div>
    );
}

export default Home
