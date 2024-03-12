<script>
	import { Logo } from '$lib';

	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="z-50 flex items-center justify-between px-10 backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-150 shadow-lg mt-6 rounded-full w-11/12 fixed left-1/2 transform -translate-x-1/2 h-12"
>
	<a href="/" class="sm:hidden w-full text-center"
		><img alt="AdAstraLogo" class="h-5 w-auto mx-auto" src={Logo} /></a
	>
	<a href="/" class="hidden sm:block"><img alt="AdAstraLogo" class="h-5 w-auto" src={Logo} /></a>
	<button on:click={toggleNav} class="sm:hidden">
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
	<div class={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
		<ul class="flex flex-col items-center space-y-2">
			<li>
				<a href="/about" class="px-1 py-2">About Us</a>
			</li>
			<li>
				<a href="/merch" class="px-1 py-2">Merch</a>
			</li>
		</ul>
	</div>
	<div class="hidden sm:block">
		<ul class="flex items-center ms-auto space-x-2">
			<li>
				<a href="/about" class="px-1 py-2">About Us</a>
			</li>
			<li><span class="text-gray-400 px-2">|</span></li>
			<li>
				<a href="/merch" class="px-1 py-2">Merch</a>
			</li>
		</ul>
	</div>
</nav>
