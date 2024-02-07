<script>
	import Navbar from "../components/Navbar/Navbar.svelte"; 
</script>

<body
	class="bg-black text-white bg-cover bg-no-repeat"
	style="background-image: url('src/lib/images/bg.png')"
></body>
<header>
	<Navbar />
</header>
<br />
<slot />