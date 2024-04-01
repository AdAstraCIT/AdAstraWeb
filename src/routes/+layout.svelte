<script>
	import { Navbar, Footer } from '../components/components.js';
	import { bg } from '$lib';
	import './app.css';
</script>

<body class="bg-black text-white bg-cover bg-no-repeat" style="background-image: url({bg})"></body>
<header>
	<Navbar />
</header>
<slot />

<Footer />
