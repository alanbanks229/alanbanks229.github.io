<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<?php
			$page_name = "Alan Banks (about)";
		?>
		<title><?php echo $page_name; ?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<?php
		function visitor($record) {
			$db_host = "localhost";
			$db_username = "username"; 
			$db_password = "password";
			$db_name = "database-name";
			$db_table = "table-name";
			$counter_page = "access_page";
			$counter_field = "access_counter";

			$db = mysqli_connect ($db_host, $db_username, $db_password, $db_name) or die("Host or database not accessible");

			$sql_call = "INSERT INTO ".$db_table." (".$counter_page.", ".$counter_field.") VALUES ('".$record."', 1) ON DUPLICATE KEY UPDATE ".$counter_field." = ".$counter_field." + 1"; 
			mysqli_query($db, $sql_call) or die("Error while entering");

			$sql_call = "SELECT ".$counter_field. " FROM ".$db_table." WHERE ".$counter_page. " = '".$record. "'";
			$sql_result = mysqli_query($db, $sql_call) or die("SQL request failed ");
			$row = mysqli_fetch_assoc($sql_result);
			$x = $row[$counter_field];

			mysqli_close($db);
			return $x;
		}
	?>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper" class="fade-in">

				<!-- Intro -->
					<div id="intro">
						<img class="profile-top-page" src="images/portrait_cover.jpg">
						<div class="top-profile-down-logo-div">
							<a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a>
						</div>
					</div>

				<!-- Header -->
					<header id="header">
						<a href="index.html" class="logo">My Portfolio</a>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul class="links">
							<li class="active"><a href="index.html">About</a></li>
							<li><a href="resume.html">Resumé</a></li>
							<li><a href="project.html">Projects</a></li>
							<li><a href="blog.html">Blogs</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
						<ul class="icons">
							<li><a target="_blank" href="https://github.com/alanbanks229" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
							<li><a target="_blank" href="https://www.linkedin.com/in/alan-banks/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a target="_blank" href="https://medium.com/@alanbanks229" class="icon brands fa-medium"><span class="label">Twitter</span></a></li>
							<li><a target="_blank" href="https://www.instagram.com/alan_got_banks/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
						</ul>
					</nav>

				<!-- Main -->
				<div id="main">

					<!-- Post -->
						<section class="post">
							<header class="major">
								<div class="image main">
									<ul class="inline-block">
										<li><img src="images/missions_1.jpg" alt="" /></li>
										<li><img src="images/majestic.jpg" alt="" /></li>
										<li><img class="make_imgbigger" src="images/singing.jpg" alt="" width="800" height="400"/></li>
									</ul>
								</div>
							</header>
							<?php
								echo "You are the", $access_number, " visitor on this site!";
								?>
							</p>
							<p>I am a full-stack engineer specializing in creating engaging digital experiences. I am currently seeking a position where I can leverage my background in communications, marketing, and product management to achieve impactful goals.

								I spent the last few years at More Vang where I coded PDFs from scratch on a daily basis while overseeing the product team. Before that, I worked at Apple and managed a print shop. When I'm not writing code I can be found ouside enjoying nature or playing guitar in my basement.
								
								Check out my projects & blog to see what I have been up to lately.</p>
						</section>

				</div>

			<!-- Footer -->

			<!-- Copyright -->
				<div id="copyright">
					<ul><li>&copy; 2020 All rights reserved.</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
				</div>

			</div>

		<!-- Scripts -->
			<script src="../assets/js/jquery.min.js"></script>
			<script src="../assets/js/jquery.scrollex.min.js"></script>
			<script src="../assets/js/jquery.scrolly.min.js"></script>
			<script src="../assets/js/browser.min.js"></script>
			<script src="../assets/js/breakpoints.min.js"></script>
			<script src="../assets/js/util.js"></script>
			<script src="../assets/js/main.js"></script>

	</body>
</html>