<script>
	import { Logo, something } from '$lib';
</script>

<div class="flex justify-center items-center h-screen">
	<img
		class="sm:flex-1 md:flex-none md:w-auto mx-auto self-center"
		src={Logo}
		alt="ad_astra_Logo"
	/>
</div>

<div class="mx-20 mt-80 flex justify-between items-center">
	<div class="mt-96 max-md:mt-10 max-md:max-w-full">
		<div class="flex gap-5 max-md:flex-col max-md:gap-0">
			<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
				<div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
					<div class="text-4xl font-medium leading-10 text-white max-md:max-w-full">
						What is Ad Astra?
					</div>
					<div class="mt-10 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
						graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
						century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
						for use in a type specimen book. It usually begins with:
					</div>
				</div>
			</div>
			<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
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
		</div>
	</div>
</div>

<section class="max-w-full mx-20">
	<div class="flex gap-5 flex-col md:flex-row md:gap-0">
		<aside class="flex flex-col w-full md:w-6/12">
			<header
				class="z-10 flex flex-col self-stretch my-auto text-xl leading-8 text-white text-opacity-60 mt-10 md:mt-0"
			>
				<h1 class="text-4xl font-medium leading-10 text-white">What we do?</h1>
				<p class="mt-10">
					Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
					graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
					century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
					for use in a type specimen book. It usually begins with:
				</p>
				<ul class="mt-9 list-disc ml-5">
					<li>Robotics</li>
					<li>Drones</li>
					<li>Programming</li>
				</ul>
			</header>
		</aside>
		<aside class="flex flex-col w-full md:w-6/12 md:ml-5">
			<img loading="lazy" src={something} alt="" class="grow w-full aspect-[0.98]" />
		</aside>
	</div>
</section>

<style>
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