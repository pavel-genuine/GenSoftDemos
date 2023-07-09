// import dynamic from 'next/dynamic';
 
// const Counter = dynamic(() => import('@/src/components/Counter'), {
//   ssr: false,
// });
// import Layout from "@/src/layouts/Layout";
// import { sliderProps } from "@/src/sliderProps";
// import Link from "next/link";
// import Slider from "react-slick";
// const Index = () => {
//   return (
//     <Layout header={1} footer={1}>
//       {/*====== Start Banner Section ======*/}
//       <section className="banner-section">
//         {/*=== Hero Wrapper ===*/}
//         <div className="hero-wrapper-one gray-bg">
//           <div className="shape shape-one animate-float-y">
//             <span>
//               <img src="assets/images/hero/shape-1.png" alt="shape" />
//             </span>
//           </div>
//           <div className="shape shape-two animate-float-x">
//             <span>
//               <img src="assets/images/hero/shape-2.png" alt="shape" />
//             </span>
//           </div>
//           <div className="shape shape-three animate-float-x">
//             <span>
//               <img src="assets/images/hero/shape-3.png" alt="shape" />
//             </span>
//           </div>
//           <div className="container">
//             <div className="row align-items-lg-center">
//               <div className="col-xl-6 col-lg-12">
//                 {/*=== Hero Content ===*/}
//                 <div className="hero-content">
//                   <h1 className="wow fadeInUp" data-wow-delay=".4s">
//                     Green Environments Make You Happy and provide Oxygen
//                   </h1>
//                   <p className="wow fadeInDown" data-wow-delay=".6s">
//                     We Provide Beautiful Gardening &amp; Landscaping
//                   </p>
//                   <div
//                     className="hero-button mb-30 wow fadeInUp"
//                     data-wow-delay=".7s"
//                   >
//                     <Link legacyBehavior href="/about">
//                       <a className="main-btn golden-btn mb-10">Explore More</a>
//                     </Link>
//                     <Link legacyBehavior href="/index">
//                       <a className="main-btn filled-btn mb-10">How It Work</a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-6 col-lg-12">
//                 {/*=== Hero Image Box ===*/}
//                 <div
//                   className="hero-image-box d-xl-block d-none wow fadeInRight"
//                   data-wow-delay=".75s"
//                 >
//                   <img
//                     src="assets/images/hero/hero-three_one.jpg"
//                     alt="Hero Image"
//                   />
//                   <div className="shape hero-svg">
//                     <svg
//                       width={237}
//                       height={569}
//                       viewBox="0 0 237 569"
//                       fill="none"
//                     >
//                       <path
//                         d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
//                         fill="#F1D2A9"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Banner Section ======*/}
//       {/*====== Start Features Section ======*/}
//       <section className="features-section-two p-r z-1">
//         {/*=== Features Wrapper ===*/}
//         <div className="features-wrapper-two main-bg wow fadeInDown">
//           <div className="shape shape-one">
//             <span>
//               <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
//             </span>
//           </div>
//           <div className="shape shape-two">
//             <span>
//               <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
//             </span>
//           </div>
//           <div className="shape shape-three">
//             <span>
//               <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
//             </span>
//           </div>
//           <div className="features-area pb-30">
//             <div className="row justify-content-center">
//               <div className="col-lg-4 col-md-6 col-sm-6">
//                 {/*=== Features Item ===*/}
//                 <div className="single-features-item-two mb-40 wow fadeInUp">
//                   <div className="text">
//                     <div className="icon">
//                       <i className="fl-icon flaticon-watering-plants" />
//                       <a href="#" className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </div>
//                     <h5 className="title">Garden Maintenance</h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-6">
//                 {/*=== Features Item ===*/}
//                 <div className="single-features-item-two mb-40 wow fadeInDown">
//                   <div className="text">
//                     <div className="icon">
//                       <i className="fl-icon flaticon-watering-plants" />
//                       <a href="#" className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </div>
//                     <h5 className="title">Garden Overhauls</h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-6">
//                 {/*=== Features Item ===*/}
//                 <div className="single-features-item-two mb-40 wow fadeInUp">
//                   <div className="text">
//                     <div className="icon">
//                       <i className="fl-icon flaticon-watering-plants" />
//                       <a href="#" className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </div>
//                     <h5 className="title">More Design</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*=== Counter Area ===*/}
//           <div className="counter-area">
//             <div className="row pt-70">
//               <div className="col-lg-3 col-sm-6">
//                 {/*=== Counter Item ===*/}
//                 <div className="single-counter-item-two mb-30 wow fadeInDown">
//                   <div className="inner-counter">
//                     <div className="icon">
//                       <i className="fas fa-check" />
//                     </div>
//                     <h2 className="number">
//                       <Counter end={859} />
//                     </h2>
//                     <p>Projects Complete</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-sm-6">
//                 {/*=== Counter Item ===*/}
//                 <div className="single-counter-item-two mb-30 wow fadeInUp">
//                   <div className="inner-counter">
//                     <div className="icon">
//                       <i className="fas fa-check" />
//                     </div>
//                     <h2 className="number">
//                       <Counter end={99} />%
//                     </h2>
//                     <p>Satisfactions Rate</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-sm-6">
//                 {/*=== Counter Item ===*/}
//                 <div className="single-counter-item-two mb-30 wow fadeInDown">
//                   <div className="inner-counter">
//                     <div className="icon">
//                       <i className="fas fa-check" />
//                     </div>
//                     <h2 className="number">
//                       <Counter end={683} />+
//                     </h2>
//                     <p>Expert Team Member</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-sm-6">
//                 {/*=== Counter Item ===*/}
//                 <div className="single-counter-item-two mb-30 wow fadeInUp">
//                   <div className="inner-counter">
//                     <div className="icon">
//                       <i className="fas fa-check" />
//                     </div>
//                     <h2 className="number">
//                       <Counter end={860} />+
//                     </h2>
//                     <p>Awards Winning</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*=== Experience Box ===*/}
//         <div className="experience-box-two wow fadeInRight">
//           <h2 className="number">
//             <Counter end={25} />
//           </h2>
//           <h6>Years Of Experience</h6>
//           <Link legacyBehavior href="/about">
//             <a className="icon-btn">
//               <i className="far fa-arrow-right" />
//             </a>
//           </Link>
//         </div>
//       </section>
//       {/*====== End Features Section ======*/}
//       {/*====== Start Category Section ======*/}
//       <section className="category-section pt-100 pb-60">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-3 col-md-6 col-sm-12">
//               {/*====== Category Item ======*/}
//               <div className="single-category-item mb-40 wow fadeInLeft">
//                 <div className="inner-category">
//                   <div className="text">
//                     <h3 className="title">Gardening</h3>
//                   </div>
//                   <div className="icon">
//                     <i className="fal fa-long-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-12">
//               {/*====== Category Item ======*/}
//               <div className="single-category-item mb-40 wow fadeInUp">
//                 <div className="inner-category">
//                   <div className="text">
//                     <h3 className="title">More</h3>
//                   </div>
//                   <div className="icon">
//                     <i className="fal fa-long-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-12">
//               {/*====== Category Item ======*/}
//               <div className="single-category-item mb-40 wow fadeInDown">
//                 <div className="inner-category">
//                   <div className="text">
//                     <h3 className="title">Garden Overhauls</h3>
//                   </div>
//                   <div className="icon">
//                     <i className="fal fa-long-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-12">
//               {/*====== Category Item ======*/}
//               <div className="single-category-item mb-40 wow fadeInRight">
//                 <div className="inner-category">
//                   <div className="text">
//                     <h3 className="title">Nature Green</h3>
//                   </div>
//                   <div className="icon">
//                     <i className="fal fa-long-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Features Section ======*/}
//       {/*====== Start About Section ======*/}
//       <section className="about-section">
//         <div className="container-fluid">
//           {/*=== About Wrapper ===*/}
//           <div className="about-wrapper gray-bg wow fadeInUp">
//             <div className="container">
//               <div className="row align-items-xl-center">
//                 <div className="col-xl-5 col-lg-12">
//                   {/*=== About Image Box ===*/}
//                   <div className="about-two_image-box wow fadeInLeft">
//                     <img src="assets/images/about/about-6.png" alt />
//                   </div>
//                 </div>
//                 <div className="col-xl-7 col-lg-12">
//                   {/*=== About Content Box ===*/}
//                   <div className="about-three_content-box pl-lg-70 wow fadeInRight">
//                     {/*=== Section Title ===*/}
//                     <div className="section-title mb-25 wow fadeInUp">
//                       <span className="sub-title">
//                         <i className="flaticon-plant" />
//                         About Gardening
//                       </span>
//                       <h2>Perfect Gardening The Result Of Nature</h2>
//                     </div>
//                     <p className="mb-40 wow fadeInDown">
//                       Sed ut perspiciatis unde omnis iste natus voluptatem
//                       accusantiue doloremque laudantium totam rem aperiam, eaque
//                       ipsa quae abilloy inventore
//                     </p>
//                     <div className="row">
//                       <div className="col-sm-6">
//                         {/*=== Fancy About Item ===*/}
//                         <div className="fancy-about-item mb-40 wow fadeInUp">
//                           <div className="text">
//                             <h5>
//                               <i className="far fa-angle-double-right" />
//                               Gardens
//                             </h5>
//                             <p>
//                               Ut enim minima veniam nostrum exercitationem
//                               corporis
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         {/*=== Fancy About Item ===*/}
//                         <div className="fancy-about-item mb-40 wow fadeInDown">
//                           <div className="text">
//                             <h5>
//                               <i className="far fa-angle-double-right" />
//                               Urbans
//                             </h5>
//                             <p>
//                               Ut enim minima veniam nostrum exercitationem
//                               corporis
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         {/*=== Fancy About Item ===*/}
//                         <div className="fancy-about-item mb-40 wow fadeInUp">
//                           <div className="text">
//                             <h5>
//                               <i className="far fa-angle-double-right" />
//                               Maintenance
//                             </h5>
//                             <p>
//                               Ut enim minima veniam nostrum exercitationem
//                               corporis
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         {/*=== Fancy About Item ===*/}
//                         <div className="fancy-about-item mb-40 wow fadeInUp">
//                           <div className="text">
//                             <h5>
//                               <i className="far fa-angle-double-right" />
//                               Event &amp; Programs
//                             </h5>
//                             <p>
//                               Ut enim minima veniam nostrum exercitationem
//                               corporis
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End About Section ======*/}
//       {/*====== Start Services Section ======*/}
//       <section className="service-section pt-100 pb-20">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="section-title text-center mb-100 wow fadeInDown">
//                 <span className="sub-title">
//                   <i className="flaticon-plant" />
//                   What We Do
//                 </span>
//                 <h2>We Care Your Garden &amp; More</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="single-service-item-two mb-80 wow fadeInDown"
//                 data-wow-delay=".2s"
//               >
//                 <div className="icon">
//                   <i className="flaticon-scissors" />
//                 </div>
//                 <div className="text">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/service-details">
//                       <a>Spring Cleaning</a>
//                     </Link>
//                   </h4>
//                   <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
//                   <Link legacyBehavior href="/service-details">
//                     <a className="icon-btn">
//                       <i className="fal fa-long-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="single-service-item-two mb-80 wow fadeInUp"
//                 data-wow-delay=".25s"
//               >
//                 <div className="icon">
//                   <i className="flaticon-watering" />
//                 </div>
//                 <div className="text">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/service-details">
//                       <a>Irrigation &amp; Drainage</a>
//                     </Link>
//                   </h4>
//                   <p>Quis autem reprehe volutate esse quam molestiae</p>
//                   <Link legacyBehavior href="/service-details">
//                     <a className="icon-btn">
//                       <i className="fal fa-long-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="single-service-item-two mb-80 wow fadeInDown"
//                 data-wow-delay=".3s"
//               >
//                 <div className="icon">
//                   <i className="flaticon-yard" />
//                 </div>
//                 <div className="text">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/service-details">
//                       <a>Snow &amp; Ice Removal</a>
//                     </Link>
//                   </h4>
//                   <p>We denounce with righteous indignation and dislike</p>
//                   <Link legacyBehavior href="/service-details">
//                     <a className="icon-btn">
//                       <i className="fal fa-long-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="single-service-item-two mb-80 wow fadeInUp"
//                 data-wow-delay=".35s"
//               >
//                 <div className="icon">
//                   <i className="flaticon-growing" />
//                 </div>
//                 <div className="text">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/service-details">
//                       <a>Lawn Fertilization</a>
//                     </Link>
//                   </h4>
//                   <p>To take triviale exam which undertakes laborious</p>
//                   <Link legacyBehavior href="/service-details">
//                     <a className="icon-btn">
//                       <i className="fal fa-long-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Services Section ======*/}
//       {/*====== Start Project Section ======*/}
//       <section className="project-section">
//         <div className="container-fluid">
//           {/*====== Project Slider ======*/}
//           <Slider
//             {...sliderProps.projectsSliderFour}
//             className="projects-slider-four wow fadeInUp"
//             data-wow-delay=".2s"
//           >
//             {/*====== Project Item ======*/}
//             <div className="single-project-item-four">
//               <div className="project-img">
//                 <img
//                   src="assets/images/gallery/project-1.jpg"
//                   alt="Project Image"
//                 />
//                 <div className="hover-content">
//                   <div className="number">01</div>
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Water in Garden</a>
//                       </Link>
//                     </h3>
//                     <p>Professional Gardener for Garden Care</p>
//                     <Link legacyBehavior href="/">
//                       <a className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Garden Caring</a>
//                       </Link>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*====== Project Item ======*/}
//             <div className="single-project-item-four">
//               <div className="project-img">
//                 <img
//                   src="assets/images/gallery/project-2.jpg"
//                   alt="Project Image"
//                 />
//                 <div className="hover-content">
//                   <div className="number">02</div>
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Water in Garden</a>
//                       </Link>
//                     </h3>
//                     <p>Professional Gardener for Garden Care</p>
//                     <Link legacyBehavior href="/">
//                       <a className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Water in Garden</a>
//                       </Link>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*====== Project Item ======*/}
//             <div className="single-project-item-four">
//               <div className="project-img">
//                 <img
//                   src="assets/images/gallery/project-3.jpg"
//                   alt="Project Image"
//                 />
//                 <div className="hover-content">
//                   <div className="number">03</div>
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Water in Garden</a>
//                       </Link>
//                     </h3>
//                     <p>Professional Gardener for Garden Care</p>
//                     <Link legacyBehavior href="/">
//                       <a className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Cutting Hedge</a>
//                       </Link>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*====== Project Item ======*/}
//             <div className="single-project-item-four">
//               <div className="project-img">
//                 <img
//                   src="assets/images/gallery/project-4.jpg"
//                   alt="Project Image"
//                 />
//                 <div className="hover-content">
//                   <div className="number">04</div>
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Water in Garden</a>
//                       </Link>
//                     </h3>
//                     <p>Professional Gardener for Garden Care</p>
//                     <Link legacyBehavior href="/">
//                       <a className="icon-btn">
//                         <i className="fal fa-long-arrow-right" />
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <div className="text text-white">
//                     <h3 className="title">
//                       <Link legacyBehavior href="/">
//                         <a>Plants Greenhouse</a>
//                       </Link>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </section>
//       {/*====== End Project Section ======*/}
//       {/*====== Start Team Section ======*/}
//       <section className="team-section pt-95 pb-50">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="section-title text-center mb-50 wow fadeInDown">
//                 <span className="sub-title">
//                   <i className="flaticon-plant" />
//                   Team Member
//                 </span>
//                 <h2>Meet Our Expert Gardener</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-3 col-sm-6">
//               {/*====== Single Team Item ======*/}
//               <div
//                 className="single-team-item-two mb-40 wow fadeInDown"
//                 data-wow-delay=".2s"
//               >
//                 <div className="member-img">
//                   <img src="assets/images/team/team-10.jpg" alt="Team Image" />
//                   <div className="social-box">
//                     <ul className="social-link">
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-facebook-f" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-twitter" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-youtube" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-pinterest-p" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="member-info text-center">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/single-team">
//                       <a>Benjamin Hughes</a>
//                     </Link>
//                   </h4>
//                   <p>Senior Gardener</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               {/*====== Single Team Item ======*/}
//               <div
//                 className="single-team-item-two mb-40 wow fadeInUp"
//                 data-wow-delay=".25s"
//               >
//                 <div className="member-img">
//                   <img src="assets/images/team/team-11.jpg" alt="Team Image" />
//                   <div className="social-box">
//                     <ul className="social-link">
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-facebook-f" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-twitter" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-youtube" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-pinterest-p" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="member-info text-center">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/single-team">
//                       <a>Chester J. Thurman</a>
//                     </Link>
//                   </h4>
//                   <p>Junior Gardener</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               {/*====== Single Team Item ======*/}
//               <div
//                 className="single-team-item-two mb-40 wow fadeInDown"
//                 data-wow-delay=".3s"
//               >
//                 <div className="member-img">
//                   <img src="assets/images/team/team-12.jpg" alt="Team Image" />
//                   <div className="social-box">
//                     <ul className="social-link">
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-facebook-f" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-twitter" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-youtube" />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="fab fa-pinterest-p" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="member-info text-center">
//                   <h4 className="title">
//                     <Link legacyBehavior href="/single-team">
//                       <a>Benjamin Hughes</a>
//                     </Link>
//                   </h4>
//                   <p>Senior Gardener</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               {/*====== Experience Box ======*/}
//               <div
//                 className="experience-box mt-25 mb-40 text-center wow fadeInUp"
//                 data-wow-delay=".35s"
//               >
//                 <h2 className="fill-text">25+</h2>
//                 <h4>Experience Team Member</h4>
//                 <Link legacyBehavior href="/team">
//                   <a className="btn-link">
//                     View All Member <i className="far fa-arrow-right" />
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Team Section ======*/}
//       {/*====== Start Features Section ======*/}
//       <section className="features-seciton pb-50">
//         <div className="container">
//           <div className="row align-items-xl-end">
//             <div className="col-lg-6">
//               {/*====== Features Image Box ======*/}
//               <div className="features-image-box mb-50 wow fadeInLeft">
//                 <img
//                   src="assets/images/features/features-10.png"
//                   alt="Features Image"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               {/*====== Features Content Box ======*/}
//               <div className="features-content-box mb-50 wow fadeInRight">
//                 <div className="section-title mb-20">
//                   <span className="sub-title">
//                     <i className="flaticon-plant" />
//                     Modern Gardening
//                   </span>
//                   <h2>We Offers More &amp; Tree Plantations</h2>
//                 </div>
//                 <p className="mb-35">
//                   Quis autem vel eum iure reprehenderit qui in voluptate velit
//                   esse quam nihil molestiae consequatur vel illum qui dolorem
//                 </p>
//                 <ul className="features-list">
//                   <li>
//                     <i className="fal fa-long-arrow-right" />
//                     Quality Gardening
//                   </li>
//                   <li>
//                     <i className="fal fa-long-arrow-right" />
//                     Dedicated Team Members
//                   </li>
//                   <li>
//                     <i className="fal fa-long-arrow-right" />
//                     Guarantee Service &amp; No Hidden Cost{" "}
//                   </li>
//                 </ul>
//                 <Link legacyBehavior href="/about">
//                   <a className="main-btn primary-btn">Learn More Us</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Features Section ======*/}
//       {/*====== Start Testimonial Section ======*/}
//       <section className="testimonial-section">
//         <div className="container-fluid">
//           {/*=== Testimonial Wrapper ===*/}
//           <div className="testimonial-quote-area p-r z-1 main-bg">
//             <div className="shape shape-one">
//               <span>
//                 <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
//               </span>
//             </div>
//             {/*====== Quote Area ======*/}
//             <div className="quote-wrapper wow fadeInDown">
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-10 col-lg-12">
//                     {/*=== Client Quote Box ===*/}
//                     <div className="client-quote-box">
//                       <div className="icon">
//                         <i className="fal fa-long-arrow-right" />
//                       </div>
//                       <div className="text">
//                         <h2 className="number">
//                           <Counter end={372} />+
//                         </h2>
//                         <h4>
//                           Global Clients Happy to Get Our gardening Services{" "}
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*====== Testimonial Area ======*/}
//             <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-lg-1 order-md-1 order-2">
//                     {/*=== Testimonial Dots ===*/}
//                     <div className="testimonial-dots mb-20" />
//                   </div>
//                   <div className="col-lg-11 order-md-2 order-1">
//                     {/*=== Testimonial Slider ===*/}
//                     <Slider
//                       {...sliderProps.testimonialSliderThree}
//                       className="testimonial-slider-three mb-20"
//                     >
//                       {/*=== Testimonial Item ===*/}
//                       <div className="single-testimonial-item-three d-flex">
//                         <div className="testimonial-inner-content mb-30">
//                           <ul className="ratings">
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                           </ul>
//                           <p>
//                             On the other hand we denounce with righteous
//                             indignation and dislike men who are beguiled and
//                             demoralized by the charms of pleasure
//                           </p>
//                           <div className="quote-title">
//                             <div className="icon">
//                               <img
//                                 src="assets/images/testimonial/quote3.png"
//                                 alt="Quote Image"
//                               />
//                             </div>
//                             <div className="title">
//                               <h6>Norman M. Devore</h6>
//                               <p className="position">CEO &amp; Founder</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="testimonial-author mb-30">
//                           <img
//                             src="assets/images/testimonial/img-4.jpg"
//                             className="rounded-circle"
//                             alt="testimonial image"
//                           />
//                         </div>
//                       </div>
//                       {/*=== Testimonial Item ===*/}
//                       <div className="single-testimonial-item-three d-flex">
//                         <div className="testimonial-inner-content mb-30">
//                           <ul className="ratings">
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                           </ul>
//                           <p>
//                             On the other hand we denounce with righteous
//                             indignation and dislike men who are beguiled and
//                             demoralized by the charms of pleasure
//                           </p>
//                           <div className="quote-title">
//                             <div className="icon">
//                               <img
//                                 src="assets/images/testimonial/quote3.png"
//                                 alt="Quote Image"
//                               />
//                             </div>
//                             <div className="title">
//                               <h6>Douglas D. Hall</h6>
//                               <p className="position">Senior Gardener</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="testimonial-author mb-30">
//                           <img
//                             src="assets/images/testimonial/img-4.jpg"
//                             className="rounded-circle"
//                             alt="testimonial image"
//                           />
//                         </div>
//                       </div>
//                       {/*=== Testimonial Item ===*/}
//                       <div className="single-testimonial-item-three d-flex">
//                         <div className="testimonial-inner-content mb-30">
//                           <ul className="ratings">
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                           </ul>
//                           <p>
//                             On the other hand we denounce with righteous
//                             indignation and dislike men who are beguiled and
//                             demoralized by the charms of pleasure
//                           </p>
//                           <div className="quote-title">
//                             <div className="icon">
//                               <img
//                                 src="assets/images/testimonial/quote3.png"
//                                 alt="Quote Image"
//                               />
//                             </div>
//                             <div className="title">
//                               <h6>Norman M. Devore</h6>
//                               <p className="position">CEO &amp; Founder</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="testimonial-author mb-30">
//                           <img
//                             src="assets/images/testimonial/img-4.jpg"
//                             className="rounded-circle"
//                             alt="testimonial image"
//                           />
//                         </div>
//                       </div>
//                       {/*=== Testimonial Item ===*/}
//                       <div className="single-testimonial-item-three d-flex">
//                         <div className="testimonial-inner-content mb-30">
//                           <ul className="ratings">
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                             <li>
//                               <i className="far fa-star" />
//                             </li>
//                           </ul>
//                           <p>
//                             On the other hand we denounce with righteous
//                             indignation and dislike men who are beguiled and
//                             demoralized by the charms of pleasure
//                           </p>
//                           <div className="quote-title">
//                             <div className="icon">
//                               <img
//                                 src="assets/images/testimonial/quote3.png"
//                                 alt="Quote Image"
//                               />
//                             </div>
//                             <div className="title">
//                               <h6>Douglas D. Hall</h6>
//                               <p className="position">Senior Gardener</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="testimonial-author mb-30">
//                           <img
//                             src="assets/images/testimonial/img-4.jpg"
//                             className="rounded-circle"
//                             alt="testimonial image"
//                           />
//                         </div>
//                       </div>
//                     </Slider>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*====== End Testimonial Section ======*/}
//       {/*====== Start Blog Section ======*/}
//       <section className="blog-section pt-100 pb-60">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-6 col-lg-10">
//               {/*====== Section Title ======*/}
//               <div className="section-title text-center mb-50 wow fadeInDown">
//                 <span className="sub-title">
//                   <i className="flaticon-plant" />
//                   News &amp; Blog
//                 </span>
//                 <h2>Read Latest News &amp; Blog</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6">
//               {/*====== Single Blog Post ======*/}
//               <div className="single-blog-post-four mb-40 wow fadeInLeft">
//                 <div className="entry-content">
//                   <div className="post-meta">
//                     <span className="date">
//                       <i className="far fa-calendar-alt" />
//                       <Link legacyBehavior href="/blog-details">
//                         <a>25 December 2022</a>
//                       </Link>
//                     </span>
//                   </div>
//                   <h4 className="entry-title">
//                     <Link legacyBehavior href="/blog-details">
//                       <a>Progressively an Enhanced Accessible Filterable</a>
//                     </Link>
//                   </h4>
//                   <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
//                   <Link legacyBehavior href="/blog-details">
//                     <a className="btn-link">
//                       Read More
//                       <i className="fas fa-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="post-thumbnail">
//                   <img
//                     src="assets/images/blog/blog-15.jpg"
//                     alt="Post Thumbnail"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/*====== Single Blog Post ======*/}
//               <div className="single-blog-post-four mb-40 wow fadeInRight">
//                 <div className="entry-content">
//                   <div className="post-meta">
//                     <span className="date">
//                       <Link legacyBehavior href="/blog-details">
//                         <a>25 December 2022</a>
//                       </Link>
//                     </span>
//                   </div>
//                   <h4 className="entry-title">
//                     <Link legacyBehavior href="/blog-details">
//                       <a>Build Up Progressively Enhanced Accessible</a>
//                     </Link>
//                   </h4>
//                   <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
//                   <Link legacyBehavior href="/blog-details">
//                     <a className="btn-link">
//                       Read More
//                       <i className="fas fa-arrow-right" />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="post-thumbnail">
//                   <img
//                     src="assets/images/blog/blog-16.jpg"
//                     alt="Post Thumbnail"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


      










//       {
//         <section>
//         <section className="fact-bg-section p-r z-1 main-bg pb-160">
//              <div className="circle-wrapper">
//                <span />
//                <span />
//                <span />
//              </div>
           
//            </section>
     
//            <section className="features-section pt-70 p-r z-2">
//              <div className="container">
//                <div className="row align-items-lg-center">
//                  <div className="col-xl-6">
//                    {/*====== Features Image Box ======*/}
//                    <div className="features-one_image-box mb-50 wow fadeInLeft">
//                      <img
//                        src="assets/images/features/features-4.jpg"
//                        alt="Features Image"
//                      />
//                    </div>
//                  </div>
//                  <div className="col-xl-6">
//                    {/*====== Features Content Box ======*/}
//                    <div className="features-content-box pl-lg-40 mb-50 wow fadeInRight">
//                      <div className="section-title mb-20">
//                        <span className="sub-title">
//                          <i className="flaticon-Fashion" />
//                          Modern RMG
//                        </span>
//                        <h2>We Offers More &amp; Tree Fashionations</h2>
//                      </div>
//                      <p className="mb-30">
//                        Quis autem vel eum iure reprehenderit qui in voluptate velit
//                        esse quam nihil molestiae consequatur vel illum qui dolorem
//                      </p>
//                      <div className="row no-gutters">
//                        <div className="col-lg-6">
//                          {/*====== Fancy Icon Box ======*/}
//                          <div className="fancy-icon-box">
//                            <div className="icon">
//                              <i className="flaticon-pruning-shears" />
//                            </div>
//                            <div className="text">
//                              <h5 className="title">
//                                Modern RMG &amp; Expert Team
//                              </h5>
//                              <p>Sed ut perspiciatis omnis volunteer accusan</p>
//                            </div>
//                          </div>
//                        </div>
//                        <div className="col-lg-6">
//                          {/*====== Fancy Icon Box ======*/}
//                          <div className="fancy-icon-box">
//                            <div className="icon">
//                              <i className="flaticon-RMG-1" />
//                            </div>
//                            <div className="text">
//                              <h5 className="title">
//                                Tree Fashionations &amp; More
//                              </h5>
//                              <p>Sed ut perspiciatis omnis volunteer accusan</p>
//                            </div>
//                          </div>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </section>
       
//            <section className="testimonial-section pt-100 pb-100">
//              <div className="container">
//                <div className="row justify-content-center">
//                  <div className="col-xl-6 col-lg-12">
//                    <div className="section-title text-center mb-50 wow fadeInDown">
//                      <span className="sub-title">
//                        <i className="flaticon-Fashion" />
//                        Testimonials
//                      </span>
//                      <h2>Global Clients Feedback</h2>
//                    </div>
//                  </div>
//                </div>
//                {/*====== Testimonial Slider  ======*/}
//                <Slider
//                  {...sliderProps.testimonialSliderOne}
//                  className="testimonial-slider-one wow fadeInUp"
//                >
//                  {/*====== Testimonial Item  ======*/}
//                  <div className="single-testimonial-item">
//                    <div className="testimonial-inner-content">
//                      <div className="quote-rating-box">
//                        <div className="icon">
//                          <img
//                            src="assets/images/testimonial/quote.png"
//                            alt="quote icon"
//                          />
//                        </div>
//                        <div className="ratings-box">
//                          <h6>Quality Services</h6>
//                          <ul className="ratings">
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                          </ul>
//                        </div>
//                      </div>
//                      <p>
//                        Sed ut perspiciatis unde omnis iste natus error voluptatem
//                        accusantium doloremque laudantium, totam rem aperiam eaque
//                        quae abillo inventore veritatis et quasi architecto
//                      </p>
//                      <div className="author-thumb-title">
//                        <div className="author-thumb">
//                          <img
//                            src="assets/images/testimonial/thumb-1.jpg"
//                            alt="Author Image"
//                          />
//                        </div>
//                        <div className="author-title">
//                          <h6 className="title">Douglas D. Hall</h6>
//                          <p className="position">CEO &amp; Founder</p>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  {/*====== Testimonial Item  ======*/}
//                  <div className="single-testimonial-item">
//                    <div className="testimonial-inner-content">
//                      <div className="quote-rating-box">
//                        <div className="icon">
//                          <img
//                            src="assets/images/testimonial/quote.png"
//                            alt="quote icon"
//                          />
//                        </div>
//                        <div className="ratings-box">
//                          <h6>Quality Services</h6>
//                          <ul className="ratings">
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                          </ul>
//                        </div>
//                      </div>
//                      <p>
//                        Sed ut perspiciatis unde omnis iste natus error voluptatem
//                        accusantium doloremque laudantium, totam rem aperiam eaque
//                        quae abillo inventore veritatis et quasi architecto
//                      </p>
//                      <div className="author-thumb-title">
//                        <div className="author-thumb">
//                          <img
//                            src="assets/images/testimonial/thumb-2.jpg"
//                            alt="Author Image"
//                          />
//                        </div>
//                        <div className="author-title">
//                          <h6 className="title">Douglas D. Hall</h6>
//                          <p className="position">CEO &amp; Founder</p>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  {/*====== Testimonial Item  ======*/}
//                  <div className="single-testimonial-item">
//                    <div className="testimonial-inner-content">
//                      <div className="quote-rating-box">
//                        <div className="icon">
//                          <img
//                            src="assets/images/testimonial/quote.png"
//                            alt="quote icon"
//                          />
//                        </div>
//                        <div className="ratings-box">
//                          <h6>Quality Services</h6>
//                          <ul className="ratings">
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                          </ul>
//                        </div>
//                      </div>
//                      <p>
//                        Sed ut perspiciatis unde omnis iste natus error voluptatem
//                        accusantium doloremque laudantium, totam rem aperiam eaque
//                        quae abillo inventore veritatis et quasi architecto
//                      </p>
//                      <div className="author-thumb-title">
//                        <div className="author-thumb">
//                          <img
//                            src="assets/images/testimonial/thumb-3.jpg"
//                            alt="Author Image"
//                          />
//                        </div>
//                        <div className="author-title">
//                          <h6 className="title">Brian L. Swinton</h6>
//                          <p className="position">Web Designer</p>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  {/*====== Testimonial Item  ======*/}
//                  <div className="single-testimonial-item">
//                    <div className="testimonial-inner-content">
//                      <div className="quote-rating-box">
//                        <div className="icon">
//                          <img
//                            src="assets/images/testimonial/quote.png"
//                            alt="quote icon"
//                          />
//                        </div>
//                        <div className="ratings-box">
//                          <h6>Quality Services</h6>
//                          <ul className="ratings">
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                            <li>
//                              <i className="fas fa-star" />
//                            </li>
//                          </ul>
//                        </div>
//                      </div>
//                      <p>
//                        Sed ut perspiciatis unde omnis iste natus error voluptatem
//                        accusantium doloremque laudantium, totam rem aperiam eaque
//                        quae abillo inventore veritatis et quasi architecto
//                      </p>
//                      <div className="author-thumb-title">
//                        <div className="author-thumb">
//                          <img
//                            src="assets/images/testimonial/thumb-1.jpg"
//                            alt="Author Image"
//                          />
//                        </div>
//                        <div className="author-title">
//                          <h6 className="title">Timothy V. Kim</h6>
//                          <p className="position">SR Manager</p>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                </Slider>
//              </div>
//            </section>
         
//            <section
//              className="cta-bg-section bg_cover pt-100 pb-50 p-r z-1"
//              style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
//            >
//              <div className="container">
//                <div className="row align-items-center">
//                  <div className="col-lg-5">
//                    {/*======  CTA Content Box  ======*/}
//                    <div className="cta-content-box text-black mb-50 wow fadeInLeft">
//                      <div className="section-title mb-20">
//                        <span className="sub-title text text-white">
//                          <i className="flaticon-Fashion" />
//                          Need a Expert
//                        </span>
//                        <h2 className='text text-white'>Looking For a RMG Specialist</h2>
//                      </div>
//                      <p className="mb-35 text text-white">
//                        Sed ut perspiciatis unde omnis isnatu volunteer accusantium
//                        doloremque laudantium
//                      </p>
//                      <Link legacyBehavior href="/team">
//                        <a className="main-btn golden-btn">Find Specialist</a>
//                      </Link>
//                    </div>
//                  </div>
//                  <div className="col-lg-7">
//                    {/*======  CTA Image Box  ======*/}
//                    <div className="cta-image-box mb-50 wow fadeInRight">
//                      <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </section>
     
       
//            <section className="blog-section pt-100 pb-60">
//              <div className="container">
//                <div className="row justify-content-center">
//                  <div className="col-xl-7 col-lg-12">
//                    <div className="section-title text-center mb-50 wow fadeInDown">
//                      <span className="sub-title">
//                        <i className="flaticon-Fashion" />
//                        News &amp; Blog
//                      </span>
//                      <h2>Read Latest News &amp; Blog</h2>
//                    </div>
//                  </div>
//                </div>
//                <div className="row justify-content-center">
//                  <div className="col-xl-4 col-md-6 col-sm-12">
//                    {/*====== Single Blog Post  ======*/}
//                    <div
//                      className="single-blog-post mb-40 wow fadeInUp"
//                      data-wow-delay=".2s"
//                    >
//                      <div className="post-thumbnail">
//                        <img
//                          src="assets/images/blog/blog-1.jpg"
//                          alt="Post Thumbnail"
//                        />
//                      </div>
//                      <div className="entry-content">
//                        <div className="author-meta">
//                          <div className="author">
//                            <img
//                              src="assets/images/blog/author-thumb-1.jpg"
//                              alt="Author Image"
//                            />
//                            <h6>
//                              <span>Post By</span>
//                              <Link legacyBehavior href="/blog-details">
//                                <a>Michael K. Garcia</a>
//                              </Link>
//                            </h6>
//                          </div>
//                          <Link legacyBehavior href="/blog-details">
//                            <a className="icon-btn">
//                              <i className="far fa-arrow-right" />
//                            </a>
//                          </Link>
//                        </div>
//                        <Link legacyBehavior href="/blog-details">
//                          <a className="cat-link">RMG</a>
//                        </Link>
//                        <h4 className="entry-title">
//                          <Link legacyBehavior href="/blog-details">
//                            <a>Progressively an Enhanced Accessible Filterable</a>
//                          </Link>
//                        </h4>
//                        <p>
//                          Sed ut perspiciatis unde omnis isnate volunteer accusantium
//                          dolore
//                        </p>
//                        <div className="post-meta">
//                          <span className="date">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>25 December 2022</a>
//                            </Link>
//                          </span>
//                          <span className="comment">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>5 Comments</a>
//                            </Link>
//                          </span>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  <div className="col-xl-4 col-md-6 col-sm-12">
//                    {/*====== Single Blog Post  ======*/}
//                    <div
//                      className="single-blog-post mb-40 wow fadeInDown"
//                      data-wow-delay=".25s"
//                    >
//                      <div className="post-thumbnail">
//                        <img
//                          src="assets/images/blog/blog-2.jpg"
//                          alt="Post Thumbnail"
//                        />
//                      </div>
//                      <div className="entry-content">
//                        <div className="author-meta">
//                          <div className="author">
//                            <img
//                              src="assets/images/blog/author-thumb-2.jpg"
//                              alt="Author Image"
//                            />
//                            <h6>
//                              <span>Post By</span>
//                              <Link legacyBehavior href="/blog-details">
//                                <a>Michael K. Garcia</a>
//                              </Link>
//                            </h6>
//                          </div>
//                          <Link legacyBehavior href="/blog-details">
//                            <a className="icon-btn">
//                              <i className="far fa-arrow-right" />
//                            </a>
//                          </Link>
//                        </div>
//                        <Link legacyBehavior href="/blog-details">
//                          <a className="cat-link">More</a>
//                        </Link>
//                        <h4 className="entry-title">
//                          <Link legacyBehavior href="/blog-details">
//                            <a>High Contrast Mod Forced Colors Mode Custom</a>
//                          </Link>
//                        </h4>
//                        <p>
//                          Sed ut perspiciatis unde omnis isnate volunteer accusantium
//                          dolore
//                        </p>
//                        <div className="post-meta">
//                          <span className="date">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>25 December 2022</a>
//                            </Link>
//                          </span>
//                          <span className="comment">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>5 Comments</a>
//                            </Link>
//                          </span>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  <div className="col-xl-4 col-md-6 col-sm-12">
//                    {/*====== Single Blog Post  ======*/}
//                    <div
//                      className="single-blog-post mb-40 wow fadeInUp"
//                      data-wow-delay=".3s"
//                    >
//                      <div className="post-thumbnail">
//                        <img
//                          src="assets/images/blog/blog-3.jpg"
//                          alt="Post Thumbnail"
//                        />
//                      </div>
//                      <div className="entry-content">
//                        <div className="author-meta">
//                          <div className="author">
//                            <img
//                              src="assets/images/blog/author-thumb-3.jpg"
//                              alt="Author Image"
//                            />
//                            <h6>
//                              <span>Post By</span>
//                              <Link legacyBehavior href="/blog-details">
//                                <a>Michael K. Garcia</a>
//                              </Link>
//                            </h6>
//                          </div>
//                          <Link legacyBehavior href="/blog-details">
//                            <a className="icon-btn">
//                              <i className="far fa-arrow-right" />
//                            </a>
//                          </Link>
//                        </div>
//                        <Link legacyBehavior href="/blog-details">
//                          <a className="cat-link">RMG</a>
//                        </Link>
//                        <h4 className="entry-title">
//                          <Link legacyBehavior href="/blog-details">
//                            <a>Enough Requirements For Accessible Components</a>
//                          </Link>
//                        </h4>
//                        <p>
//                          Sed ut perspiciatis unde omnis isnate volunteer accusantium
//                          dolore
//                        </p>
//                        <div className="post-meta">
//                          <span className="date">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>25 December 2022</a>
//                            </Link>
//                          </span>
//                          <span className="comment">
//                            <Link legacyBehavior href="/blog-details">
//                              <a>5 Comments</a>
//                            </Link>
//                          </span>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </section>
       
//         </section>
//     }
//     </Layout>
//   );
// };
// export default Index;



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
                        RMG &amp; More
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/">
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
                            <Counter end={1000} />+
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
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
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
                        RMG &amp; More
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
                            <Counter end={1000} />+
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
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
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
                        RMG &amp; More
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
                            <Counter end={1000} />+
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
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
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
                <Link legacyBehavior href="/">
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
                      <Link legacyBehavior href="/">
                        <a>Underwear</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <p>Underwear</p>
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
                      <Link legacyBehavior href="/">
                        <a>T-Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>T-Shirt</a>
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
                      <Link legacyBehavior href="/">
                        <a>Polo Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Polo Shirt</a>
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
                      <Link legacyBehavior href="/">
                        <a>Sweat Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Sweat Shirt</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>



            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">05</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Hoodie</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Hoodie</a>
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
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

