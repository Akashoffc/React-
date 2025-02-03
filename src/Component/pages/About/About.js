import React from "react"
import {Link}from "react-router-dom"

function About(){
  const Img=require.context("./Img_images",false,/\.(jpeg|webp)$/)
  const Img_arr=Img.keys().map(Img)
    return(
        <>
  
<header className="bg-light py-5 text-center">
    <div className="container">
      <h1 className="display-4">About Us</h1>
      <p className="lead text-muted">Discover who we are and what we stand for.</p>
    </div>
  </header>

  <main className="container my-5">
    <div className="row align-items-center mb-5">
      <div className="col-md-5">
        <img 
          src={Img_arr[0]}
          height="400"
          width="300"
          alt="About Us" 
          className="img-fluid rounded"
       />
      </div>
      <div className="col-md-6">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team dedicated to providing innovative solutions that make a real difference. With a focus on excellence and customer satisfaction, we strive to deliver results that exceed expectations.
        </p>
        <p>
          Our journey started with a simple goal: to create value and build strong, lasting relationships with our clients and partners.
        </p>
      </div>
    </div>

    <section className="text-center">
      <h2 className="mb-4">Our Core Values</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Innovation</h5>
              <p className="card-text">We believe in pushing boundaries and thinking outside the box.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Integrity</h5>
              <p className="card-text">Our actions are guided by honesty, transparency, and ethics.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Excellence</h5>
              <p className="card-text">We aim for the highest quality in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="bg-dark text-white text-center py-3">
    <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
  </footer>

  
  




  </>
        )
}


export default About;
