<script>
	import { Logo, something } from '$lib';
	import { Background, Infinity } from './components.js';
</script>

<div class="relative w-full flex justify-center items-center h-screen overflow-hidden">
	<img class="w-64 md:w-96 duration-300" src={Logo} alt="ad_astra_Logo" />
	<Background />
</div>

<section class="w-full h-64"></section>

<div class="px-10 md:px-20 flex w-full h-full">
	<div class="flex gap-10 w-full h-full items-center justify-center">
		<div class="flex flex-col w-full lg:w-3/5">
			<h2 class="text-4xl font-medium leading-10 text-white">What is Ad Astra?</h2>
			<p class="mt-10 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
				Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
				graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
				century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
				use in a type specimen book. It usually begins with:
			</p>
		</div>
		<div class="w-2/5 hidden lg:block">
			<Infinity />
		</div>
	</div>
</div>

<section class="w-full h-64"></section>

<section class="w-full px-10 md:px-20">
	<div class="flex gap-5 flex-col md:flex-row items-center justify-center md:gap-0">
		<div class="w-full">
			<div
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
			</div>
		</div>
		<div
			class="hidden lg:block flex-col w-full md:ml-5 items-center justify-center overflow-hidden"
			style="background-image: linear-gradient(to right, black, transparent);"
		>
			<img loading="lazy" src={something} alt="" class="w-full aspect-[0.98] scale-[210%]" />
		</div>
	</div>
</section>
