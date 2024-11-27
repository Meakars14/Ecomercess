import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
	<div className="h-75">
    <div class="top-header-area" id="sticker">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-sm-12 text-center">
					<div class="main-menu-wrap">
						<div class="site-logo">
							<a href="index.html">
								<img src="assets/img/logo.png" alt=""/>
							</a>
						</div>
						<nav class="main-menu">
						<ul>
								<li class="current-list-item">
									<a href="/">Home</a>
								</li>
								<li class="current-list-item">
								    <a href="products">Products</a>
								</li>
								<li class="current-list-item">
								    <a href="products">Contact</a>
								</li>
								<li class="current-list-item">
								    <a href="products">About</a>
								</li>
								<li class="current-list-item">
								    <a href="products">Cart</a>
								</li>
								<li class="current-list-item">
								    <a href="products">CheckOut</a>
								</li>
						</ul>
						</nav>
						<a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
  );
};

export default AppNavbar;
