<script>
	import Navbar from '../components/a_Navbar/Navbar.svelte';
	import Homepg_Logo from '../components/b_homepage/Homepg_Logo.svelte';
	import Fotter from '../components/e.fotter/33fotter.svelte';
	import bg from '$lib/assets/bg.png';
</script>

<body class="bg-black text-white bg-cover bg-no-repeat" style="background-image: url({bg})"></body>
<header>
	<Navbar />
</header>
<Homepg_Logo />
<slot />
<Fotter />
