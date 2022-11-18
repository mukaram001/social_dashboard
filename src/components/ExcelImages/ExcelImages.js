import React from "react";
import "../../App.css";
import dummy_img from "../../asstets/images/dummy.jpg";
import Modals from "../../common/Modals/Modals";

const ExcelImages = () => {
  return (
    <>
      <Modals />
      <div className="section" id="excel_images">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="section_heading">
                  <h2>Excel Images</h2>
                  <p>This is a Subline</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col">
              <div className="uploaded_imgaes">
                <figure className="hover-img">
                  <img src={dummy_img} className="img-fluid" />
                  <figcaption>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm rounded-pill mb-4"
                    >
                      <i className="fa-solid fa-trash me-2"></i>Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      Open
                    </button>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#uploadimage"
                >
                  <i className="fa-solid fa-plus me-2"></i> Add Images
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcelImages;
