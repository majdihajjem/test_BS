import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import "../homeCss.css";
const Home = () => {
  return <div >
    <div className="container1">
		      <div className="c1-dv1">
					<img src="https://www.docplanner.com/icons/icon-patients.svg"/>
					<h1>For Visitors</h1>
					<h2>Find an agence,to get a services </h2>
					</div>
					<div className="c1-dv2">
					<img src="https://www.docplanner.com/icons/icon-doctors.svg"/>
					<h1>For Clients</h1>
					<h2>Save time managing visits and cut no-shows by half</h2>
					</div>
					<div className="c1-dv3">
					<img src="https://www.docplanner.com/icons/icon-clinics.svg"/>
					<h1>For Agences</h1>
					<h2>Deliver an exceptional patient experience in your clinic</h2>
					</div>
		</div>
    <div className="container2">
				<header className="c2-dv1">
					<h1>
						The world's biggest
						<br/>
						healthcare platform
					</h1>
					<p>
						We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.
					</p>
				</header>
	      <div className="c2-dv2">
										<img scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"/>
										<h3>Leader in 13 countries</h3>
										<p>
											Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
										</p>
									</div>
								<div className="c2-dv3">
										<img scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"/>
										<h3>15,000,000 <br/> appointments</h3>
										<p>
											booked last month
										</p>
									</div>
                  <div className="c2-dv4">
										<img scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"/>
										<h3>90,000,000 <br/> patients</h3>
										<p>
											visit our websites each month
										</p>
									</div>
									<div className="c2-dv5">
										<img scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"/>
										<h3>210,000<br/> active doctors</h3>
										<p>
											trust our solutions
										</p>
									</div>
		</div>
    <div className="footr" >
      <div>
      <p>
      We are leaders in 13 countries:  Poland, Turkey, Spain, Italy, Germany, Czech Republic, Portugal, Mexico, Colombia, Brazil, Argentina, Peru and Chile
      </p>
      </div>
	<div>
		www.BSGA.com © 2023
	</div>
</div>
	</div>

};

export default Home;
