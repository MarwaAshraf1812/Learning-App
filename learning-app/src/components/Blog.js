import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogJpg from '../assets/blogimage.jpg';
import blogPosts from '../data/blogData.js';

const Blog = () => {
    const limitedBlogPosts = blogPosts.slice(0, 3);
    return (
        <div className="container mt-5 mb-5 p-5">
            <h2 className="mb-4 text-center txt-primary fw-bolder mb-5 fs-1">Blog</h2>
            <div className="row">
                {limitedBlogPosts.map(blog => (
                    <div className="col-md-4 mb-4 " key={blog.id}>
                        <div className="card h-70 ">
                            <img src={BlogJpg} className="card-img-top" alt={blog.title} />
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href={`/blog/${blog.id}`} className="text-decoration-none  fs-5 txt-primary fw-bold">{blog.title}</a>
                                    <p className="mt-4 fs-5"> <span className=" txt-primary fs-7">Date :</span> {blog.date}</p>
                                    <p className="mt-4 fs-5"> {blog.description}</p>
                                </h3>
                                <a href="#" class="btn btn-primary mt-2">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;