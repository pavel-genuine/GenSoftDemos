import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Index2 = () => {
  return (
    <Layout>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".34"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}







      {/*====== Start About Section  ======*/}
      <section className="about-section pt-50 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="about-img-one" style={{width:'230px',height:'210px'}}
                  alt="About Image"
                />
                <img
                  src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="about-img-two" style={{width:'350px',height:'410px'}}
                  alt="About Image"
                />
                <img
                  src="assets/images/about/tree.png"
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={25} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    About RMG
                  </span>
                  <h2>We Care Your RMG &amp; Landscaping</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience RMG
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}



      <section className="features-section gray-bg pt-40 pb-40">
        <div className="container-fluid">
          {/*====== Project Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in RMG</a>
                      </Link>
                    </h3>
                    <p>Professional RMGer for RMG Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>RMG Caring</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in RMG</a>
                      </Link>
                    </h3>
                    <p>Professional RMGer for RMG Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in RMG</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in RMG</a>
                      </Link>
                    </h3>
                    <p>Professional RMGer for RMG Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Cutting Hedge</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"
                  style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in RMG</a>
                      </Link>
                    </h3>
                    <p>Professional RMGer for RMG Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Rmg Greenhouse</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>




      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-black text-center mb-50 wow fadeInDown">
                <span className="sub-title text text-white">
                  <i className="flaticon-Fashion" />
                  Why Choose Us
                </span>
                <h2 className='text text-white'>We’re Awards Winning RMG</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab1"
                              >
                                We’re Since 1987!
                              </Nav.Link>
                            </li>
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Philosophy
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="https://images.pexels.com/photos/4622215/pexels-photo-4622215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Image"
                                  style={{width:'170px',height:'200px'}}
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted RMG Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="https://i0.wp.com/textiletutorials.com/wp-content/uploads/2018/06/Printing-factory-in-Bangladesh.jpg?resize=650%2C400&ssl=1"
                                  alt="Image"
                                  style={{width:'170px',height:'200px'}}
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted RMG Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Choose Image"
                        style={{width:'300px',height:'500px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="gallery-section-minus p-r z-2 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-Fashion" />
                  Photo Gallery
                </span>
                <h2>Look Our RMG Insides</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Project Content Box ======*/}
              <div className="project-content-box mb-50 pl-lg-100 wow fadeInRight">
                <p className="mb-35">
                  Sed perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <Link legacyBehavior href="/project-grid">
                  <a className="main-btn golden-btn">View More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
      
          <div className="single-project-item">
            <div className="project-img">
              <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
  
          <div className="single-project-item">
            <div className="project-img">
              <img style={{height:'380px'}} src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care RMG Trees</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Counter Section  ======*/}


   
    </Layout>
  );
};
export default Index2;
