<template>
    <header class="header text-center">	    
	    <h1 class="blog-name pt-lg-4 mb-0"><a class="no-text-decoration" href="index.html">Maaz Blog</a></h1>
        
	    <nav class="navbar navbar-expand-lg navbar-dark" >
           
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column" >

				<ul class="navbar-nav flex-column text-start">
					<li class="nav-item">
						<router-link :to="{name: 'Home'}" class="nav-link active">
							<i class="fas fa-home fa-fw me-2"></i>Home <span class="sr-only">(current)</span>
						</router-link>
					</li>
					<li class="nav-item">
					    <a class="nav-link" href="blog-post.html"><i class="fas fa-bookmark fa-fw me-2"></i>Blog Post</a>
					</li>
					<li class="nav-item">
						<router-link :to="{name: 'About'}" class="nav-link">
							<i class="fas fa-user fa-fw me-2"></i>About Me
						</router-link>
					</li>
                    <li class="nav-item">
					    <a class="nav-link" href="about.html"><i class="fas fa-envelope fa-fw me-2"></i>Contact</a>
					</li>
				</ul>

				<div class="profile-section pt-3 pt-lg-0">
				    <img class="profile-image mb-3 rounded-circle mx-auto" src="../images/profile.png" alt="image" >			
					
					<div class="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br><a href="about.html">Find out more about me</a></div><!--//bio-->
					<ul class="social-list list-inline py-3 mx-auto">
			            <li class="list-inline-item"><a href="#"><i class="fa-brands fa-x-twitter fa-fw"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="fa-brands fa-linkedin-in fa-fw"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="fa-brands fa-github-alt fa-fw"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="fa-brands fa-stack-overflow fa-fw"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="fa-brands fa-codepen fa-fw"></i></a></li>
			        </ul><!--//social-list-->
			        <hr> 
				</div><!--//profile-section-->
			</div>
		</nav>
    </header>
</template>