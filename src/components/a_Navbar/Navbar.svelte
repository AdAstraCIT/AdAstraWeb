<script>
	import Logo from '$lib/assets/Logo.png';

	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<nav class="flex items-center justify-between px-10 navbar">
	<a class="navbar-brand" href="/"><img alt="AdAstraLogo" class="logo-img" src={Logo} /></a>
</nav>

<nav class="flex items-center justify-between px-10 navbar navbar-expand-md">
	<a class="navbar-brand" href="/"><img alt="AdAstraLogo" class="logo-img" src={Logo} /></a>
	<button class="navbar-toggler" type="button" on:click={toggleNav}>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class:collapse={isOpen} class="navbar-collapse">
		<ul class="flex items-center ms-auto space-x-2 md:flex">
			<li class="nav-item">
				<a class="nav-link" href="/about">About Us</a>
			</li>
			<li class="nav-item"><span class="nav-link text-gray-400 px-2">|</span></li>
			<li class="nav-item">
				<a href="/merch" class="nav-link px-1 py-2">Merch</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.logo-img {
		height: 25px;
		width: auto;
	}

	.navbar {
		height: 50px;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
		backdrop-filter: blur(2.5px) brightness(75%) saturate(80%);
		box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, 0.2);
		margin-top: 25px;
		border-radius: 30px;
		width: 85%;
		position: fixed;
		left: 7.5%;
	}

	@media screen and (max-width: 768px) {
		.logo-img {
			height: 20px;
			width: auto;
		}
	}

	@media screen and (max-width: 360px) {
		.logo-img {
			height: 15px;
			width: auto;
		}
	}

	@media screen and (max-width: 300px) {
		.logo-img {
			height: 12px;
			width: auto;
		}
	}
</style>
