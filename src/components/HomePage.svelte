<script>
	import { Logo, video } from '$lib';
</script>

<div class="flex justify-center items-center h-screen">
	<video
		src={video}
		autoplay
		muted
		loop
		playsinline
		class="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
	/>
	<img
		class="sm:flex-1 md:flex-none md:w-auto mx-auto self-center"
		src={Logo}
		alt="ad_astra_Logo"
	/>
</div>

<div class="mx-5 mt-80 flex justify-between items-center">
	<div>
		<h1 class="text-7xl">what is Ad Astra?</h1>
		<p class="text-3xl text-gray-500 mt-2 w-1/2">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nostrum accusamus? Quis minus
			modi molestiae dicta aliquid nulla explicabo laborum asperiores tempore veritatis reiciendis
			odit nam sint, facere quibusdam dolore.
		</p>
	</div>
	<svg
		class="infinity-loop"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width="500"
		height="500"
	>
		<path
			d="M4.4 1c1.8 0 3.6.6 5 1.7l2.3 1.5 2.3-1.5a7 7 0 0 1 10 0l2.3 1.5-2.3 1.5a7 7 0 0 1-10 0l-2.3-1.5-2.3 1.5a7 7 0 0 1-10 0L2 4.7a7 7 0 0 1 2.4-3.7z"
		></path>
		<path
			d="M9.6 22.3a7 7 0 0 1-5-1.7l-2.3-1.5 2.3-1.5a7 7 0 0 1 10 0l2.3 1.5 2.3-1.5a7 7 0 0 1 5 1.7l2.3 1.5-2.3 1.5a7 7 0 0 1-5 1.7l-2.3-1.5-2.3 1.5z"
		></path>
	</svg>
</div>

<div class="mx-5 custom-margin mb-20">
	<h1 class="text-7xl">What we do?</h1>
	<div>
		<p class="text-3xl text-gray-500 mt-2 w-1/2">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nostrum accusamus? Quis minus
			modi molestiae dicta aliquid nulla explicabo laborum asperiores tempore veritatis reiciendis
			odit nam sint, facere quibusdam dolore.
		</p>
		<ul class="list-disc list-inside mt-2 w-full">
			<li class="text-2xl text-gray-500">Item 1</li>
			<li class="text-2xl text-gray-500">Item 2</li>
			<li class="text-2xl text-gray-500">Item 3</li>
		</ul>
	</div>
</div>

<style>
	.custom-margin {
		margin-top: 40rem; /* Adjust this value as needed */
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.infinity-loop {
		animation: rotate 2s linear infinite;
		fill: green;
		margin-right: 20rem; /* Adjust this value as needed */
	}
</style>
