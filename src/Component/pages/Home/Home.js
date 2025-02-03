import React from "react"
import {Link}from "react-router-dom"


function Home(){
    const img=require.context("./home_images",false,/\.(jpg|webp)$/)
    const img_arr=img.keys().map(img)
    return(
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="#">HELLO THERE !</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        
    </div>
</nav>


<div className="hero-section">
    <div className="container text-center">
        <h1>Welcome to Ak Store</h1>
        <p>Your one-stop shop for everything!</p>
        {/* <a href="#products" className="btn btn-lg btn-primary">Shop Now</a> */}
    </div>
</div>


<div className="container py-5">
    <h2 className="text-center mb-4">Shop by Category</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="card text-center">
                <img src={img_arr[0]} className="card-img-top" alt="Category" height="415x" width="300px"/>
                <div className="card-body">
                    <h5 className="card-title">MOBILE PHONES</h5>
                    <a href="./product" className="btn btn-primary">View More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card text-center">
                <img src={img_arr[1]} className="card-img-top" alt="Category"/>
                <div className="card-body">
                    <h5 className="card-title">SHIRTS</h5>
                    <Link className="btn btn-primary " to="/Product">View More</Link>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card text-center">
                <img src={img_arr[2]} className="card-img-top" alt="Category"/>
                <div className="card-body">
                    <h5 className="card-title">SHOES</h5>
                    <a href="./product" className="btn btn-primary">View More</a>
                </div>
            </div>
        </div>
    </div>
</div>






<footer className="bg-dark text-light py-4">
    <div className="container text-center">
        <p>&copy; 2024 ShopMate. All rights reserved.</p>
        <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-light">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#" className="text-light">Terms of Service</a></li>
        </ul>
    </div>
</footer>

        </>
    )
}
        
export default Home;