<>
    
<section id="login-wrapper">
    <div className="opacity"></div>
    <div className="container lin">

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row login-main">
            <div className="col-md-6 p-0">
              <div className="login-left">
                <a href=""><img src="" /></a>
                <div>
                  <h2>Please Sign in to continue!</h2>
                  <p>We will verify your account and you will get an activation email from admin. You can check your course details and progress from your profile page.</p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="login-right">
                <form className="login-form" action="" method="POST">
                  <h2>SignIn</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div className="form-group one">
                    <label>E-mail</label>
                    <input type="email" name="" placeholder="example@mail.com" className="form-control" />
                  </div>
                  <div className="form-group two mb-5">
                    <label>Password</label>
                    <input type="password" name="" placeholder="6+ strong character" className="form-control" />
                  </div>
                  {/* <div className="mb-3">
                    <span>Dont have an account? <a href="" className="regbox">Register</a></span>
                  </div> */}
                  <div className="form-group">
                    <input type="submit" name="" value="Login" className="login-btn rounded-pill" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    {/* <div className="container reg">

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row login-main">
            <div className="col-md-6 p-0">
              <div className="login-left">
                <a href=""><img src="" /></a>
                <div>
                  <h2>Please Sign up to continue!</h2>
                  <p>We will verify your account and you will get an activation email from admin. You can check your course details and progress from your profile page.</p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="login-right">
                <form className="login-form" action="" method="POST" enctype="multiple/form-data">
                  <h2>SignUp</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div className="form-group one">
                    <label>E-mail</label>
                    <input type="email" name="" placeholder="example@mail.com" className="form-control" />
                  </div>
                  <div className="form-group two">
                    <label>Password</label>
                    <input type="password" name="" placeholder="6+ strong character" className="form-control" />
                  </div>
                  <div className="form-group three">
                    <label>Confirm Password</label>
                    <input type="password" name="" placeholder="6+ strong character" className="form-control" />
                  </div>
                  {/* <div className="mb-3">
                    <span>Already have an account? <a href="" className="login-box">Login</a></span>
                  </div> 
                  <div className="form-group">
                    <input type="submit" name="" value="Create Account" className="login-btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div> */}
  </section>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand" href="#"> <img src={logo} width="60px" className='me-2' alt='' /> Dashboard - Live </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#"></a> */}
            <Link to="/login" className="btn bg-transparent">
              <i className="fa-solid fa-right-to-bracket me-2"></i> Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='mt-5 mb-5'>
            <div className='social_card fb_card d-flex'>
              <div className='icon_div'>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div>
                <p className='card_count mb-0'>8692</p>
                <p className='mb-0 small'>Likes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='mt-5 mb-5'>
            <div className='social_card insta_card d-flex'>
              <div className='icon_div'>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <p className='card_count mb-0'>7843</p>
                <p className='mb-0 small'>Followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='mt-5 mb-5'>
            <div className='social_card youtube_card d-flex'>
              <div className='icon_div'>
                <i className="fa-solid fa-play"></i>
              </div>
              <div>
                <p className='card_count mb-0'>8721</p>
                <p className='mb-0 small'>Subscribers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='mt-5 mb-5'>
            <div className='social_card twittwer_card d-flex'>
              <div className='icon_div'>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div>
                <p className='card_count mb-0'>7814</p>
                <p className='mb-0 small'>Tweets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='section bg-light' id='facebook_insights'>
    <div className='container'>
      <div className='row'>
        <div className='cocl-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Facebook Insights
              </h2>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
            <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-12'>
          <div className='text-center mb-5'>
            <button type='button' className='btn btn-secondary rounded-pill me-3' data-bs-toggle="modal" data-bs-target="#uploadimage"><i className="fa-solid fa-plus me-2"></i> Add Images</button>
            <button type='button' className='btn btn-primary rounded-pill'><i className="fa-brands fa-facebook-f me-2"></i> Login With FaceBook</button>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <h3 className='mb-3'>Facebook Data</h3>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='text-end'>
                  <button className='btn btn-secondary rounded-pill' type='button'> 
                    Export <i className="fa-solid fa-file-arrow-down ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <table className="table table-striped table-hover">
              <tbody className='text-center'>
                <tr>
                  <td className='w-50'><b>Action on Page</b></td>
                  <td className='w-50'>165</td>
                </tr>
                <tr>
                  <td><b>Page Views</b></td>
                  <td>3482</td>
                </tr>
                <tr>
                  <td><b>Likes</b></td>
                  <td>78</td>
                </tr>
                <tr>
                  <td><b>Post Reach</b></td>
                  <td>983</td>
                </tr>
                <tr>
                  <td><b>Post Interaction</b></td>
                  <td>8577</td>
                </tr>
                <tr>
                  <td><b>Page Followers</b></td>
                  <td>297</td>
                </tr>
                <tr>
                  <td><b>Overview ad Center</b></td>
                  <td>6725</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Charts */}
  <div className='section'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Analytics
              </h2>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='mb-5'>
            <HighCharts/>
          </div>
        </div>
        <div className='col-12'>
          <div className='text-center'>
            <button type='button' className='btn btn-primary rounded-pill'>
              <i className="fa-brands fa-google me-2"></i> Login with Google
            </button>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <h3 className='mb-3'>Google Analytics Data</h3>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='text-end'>
                  <button className='btn btn-secondary rounded-pill' type='button'> 
                    Export <i className="fa-solid fa-file-arrow-down ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <table className="table table-striped table-hover">
              <tbody className='text-center'>
                <tr>
                  <td className='w-50'><b>Action on Page</b></td>
                  <td className='w-50'>165</td>
                </tr>
                <tr>
                  <td><b>Visits</b></td>
                  <td>11</td>
                </tr>
                <tr>
                  <td><b>Impressions</b></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td><b>Page Views</b></td>
                  <td>383</td>
                </tr>
                <tr>
                  <td><b>Sessions</b></td>
                  <td>25</td>
                </tr>
                <tr>
                  <td><b>Session Pre User</b></td>
                  <td>2.27</td>
                </tr>
                <tr>
                  <td><b>Organic Searches</b></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td><b>Most Visited site</b></td>
                  <td>Localhost:3000/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='section bg-light' id='pievariablechart'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Charts Headline
              </h2>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='mb-5'>
            <PaiCharts/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='section'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div>
            <div className='section_heading'>
              <h2>
                These are my charts
              </h2>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='mb-5'>
            <ColumnCharts/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Charts */}
  <div className='section bg-light' id='breaking_news'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Breaking News
              </h2>
            </div>
          </div>
        </div>
        <div className='col-lg- col-md-6 col-sm-12'>
          <div className='text-center mb-5'>
            <h4>This is my Subline</h4>
            <div>
              <p className='bn-counter'>
                34.4
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg- col-md-6 col-sm-12'>
          <div className='text-center mb-5'>
            <h4>This is my Subline Too</h4>
            <div>
              <p className='bn-counter'>
                72.2
              </p>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='text-center mb-5'>
            <h4>PC Upload Newsletter</h4>
            <div>
            <figure className="hover-img">
              <img src={dummy_img} className="" height="300px" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill mb-4'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
                <button type='button' className='btn btn-warning btn-sm rounded-pill'><i className="fa-solid fa-cloud-arrow-up me-2"></i>Upload</button>
              </figcaption>
            </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='section' id='excel_images'>
    <div className='container'>
      <div className='row'>
        <div className='cocl-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Excel Images
              </h2>
              <p>This is a Subline</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-12'>
          <div className='text-center'>
            <button type='button' className='btn btn-secondary rounded-pill me-3' data-bs-toggle="modal" data-bs-target="#uploadimage"><i className="fa-solid fa-plus me-2"></i> Add Images</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='section bg-light' id='images_area'>
    <div className='container'>
      <div className='row'>
        <div className='cocl-12'>
          <div>
            <div className='section_heading'>
              <h2>
                Images Area
              </h2>
              <p>This is a Subline</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='uploaded_imgaes'>
             <figure className="hover-img">
              <img src={dummy_img} className="img-fluid" />
              <figcaption>
                <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='col-12'>
          <div className='text-center'>
            <button type='button' className='btn btn-secondary rounded-pill me-3' data-bs-toggle="modal" data-bs-target="#uploadimage"><i className="fa-solid fa-plus me-2"></i> Add Images</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer className='bg-dark py-4'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className=''>
            <h2 className='text-white mb-3'>
              Dashboard - Live
            </h2>
            <a href='mailto:brahm@gmail.com' className=''><i className="fa-solid fa-envelope me-2"></i>brahm@gmail.com</a>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='text-end'>
            <div className='mb-3'>
              <button type='button' className='btn google-btn rounded-pill me-3'>
                <i className="fa-brands fa-google me-2"></i> Goolge
              </button>
              <button type='button' className='btn yahoo-btn rounded-pill'>
                <i className="fa-brands fa-yahoo me-2"></i> Yahoo
              </button>
            </div>
            <p className='small mb-0 text-white'>
              &copy; All Right are Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>


  {/* Modal Code */}
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" id='login_modal_contact'>
        <div className="modal-body bg-transparent p-0" id='login_modal_body'>
          <div className="screen">
            <div className="screen__content">
              <button type="button" className="btn-close mt-2 ms-3" data-bs-dismiss="modal" aria-label="Close"></button>
              <h2 className='ms-3 mt-5'><b>Welcome Back</b></h2>
              <form className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="email" className="login__input" required placeholder="En ter Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" required placeholder="Password" />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Login</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  {/* Upload Image Modal */}
  <div className="modal fade" id="uploadimage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="uploadimageLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="uploadimageLabel">Upload Facebook Insights</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Select Images to Upload</label>
                <input className="form-control" type="file" multiple id="formFile" />
              </div>
            </form>
            <div>

            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</>