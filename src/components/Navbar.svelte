<script>
	import { Logo } from '$lib';

	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="z-50 flex items-center justify-between px-10 backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-150 shadow-lg mt-6 rounded-full w-11/12 fixed left-1/2 transform -translate-x-1/2 h-16"
>
	<!-- Logo -->
	<a href="/" class="flex justify-center md:justify-start w-full md:w-auto">
		<img alt="AdAstraLogo" class="h-5 w-auto" src={Logo} />
	</a>
	<!-- Navigation items -->
	<div class="hidden md:flex items-center space-x-2">
		<ul class="flex items-center space-x-2">
			<li>
				<a href="/about" class="px-1 py-2">About Us</a>
			</li>
			<li><span class="text-gray-400 px-2">|</span></li>
			<li>
				<a href="/merch" class="px-1 py-2">Merch</a>
			</li>
		</ul>
	</div>
	<!-- Toggle button for small screens -->
	<button on:click={toggleNav} class="block md:hidden">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		</svg>
	</button>
	<!-- Dropdown window for small screens -->
	{#if isOpen}
		<button
			class="fixed inset-0 bg-black bg-opacity-50 z-40"
			on:click={toggleNav}
			aria-label="Close navigation"
		></button>
		<div class="absolute top-0 left-0 right-0 bg-black z-50 mt-16 p-4 rounded-lg shadow-md">
			<ul class="flex flex-col space-y-2">
				<li>
					<a href="/about" class="px-2 py-1 text-white">About Us</a>
				</li>
				<li>
					<a href="/merch" class="px-2 py-1 text-white">Merch</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>
