import React from "react";
import "./BreakingNews.css";
import dummy_img from "../../asstets/images/dummy.jpg";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <>
      <div className="section bg-light" id="breaking_news">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="section_heading">
                  <h2>Breaking News</h2>
                </div>
              </div>
            </div>
            <div className="col-lg- col-md-6 col-sm-12">
              <div className="text-center mb-5">
                <h4>This is my Subline</h4>
                <div>
                  <p className="bn-counter">34.4</p>
                </div>
              </div>
            </div>
            <div className="col-lg- col-md-6 col-sm-12">
              <div className="text-center mb-5">
                <h4>This is my Subline Too</h4>
                <div>
                  <p className="bn-counter">72.2</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center mb-5">
                <h4>PC Upload Newsletter</h4>
                <div>
                  <figure className="hover-img">
                    <img src={dummy_img} className="" height="300px" />
                    <figcaption>
                      {/* <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button> */}
                      <Link
                        to=""
                        type="button"
                        className="btn btn-primary btn-sm rounded-pill mb-4"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                        Open
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm rounded-pill"
                      >
                        <i className="fa-solid fa-cloud-arrow-up me-2"></i>
                        Upload
                      </button>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
