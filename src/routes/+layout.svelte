<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import bg from '$lib/assets/bg.png';
</script>

<body class="bg-black text-white bg-cover bg-no-repeat" style="background-image: url({bg})"></body>
<header>
	<Navbar />
</header>
<br />
<slot />

<!-- <style>
	@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
</style> -->
