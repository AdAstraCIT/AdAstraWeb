<script>
	import Navbar from '../components/a_Navbar/Navbar.svelte';
	import Homepg_Logo from '../components/b_homepage/Homepg_Logo.svelte';
	import C_Upcoming_Events from '../components/c_Upcoming_Events/33uEvents.svelte';
	import P_Upcoming_Events from '../components/d_Previous_Events/33pEvents.svelte';
	import Fotter from '../components/e.fotter/33fotter.svelte';
	import bg from '$lib/assets/bg.png';
</script>

<body class="bg-black text-white bg-cover bg-no-repeat" style="background-image: url({bg})"></body>
<header>
	<Navbar />
	
</header>
<Homepg_Logo />
<C_Upcoming_Events/>
<P_Upcoming_Events/>
<Fotter/>
<br />
<slot />

<!-- <style>
	@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
</style> -->
