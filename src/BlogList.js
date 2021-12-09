import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blogList">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        {blog.tags.map(tag => (
                        <p className="tags">
                            <span>{tag}</span>
                        </p>
                        ))}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList
 