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
