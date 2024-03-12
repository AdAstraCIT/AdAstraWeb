<script>
	import { Logo, something } from '$lib';
	import { Background, Infinity } from './components.js';
</script>

<div class="flex justify-center items-center h-screen">
	<img class="max-sm:w-64 md:w-128 mx-auto self-center" src={Logo} alt="ad_astra_Logo" />
	<Background />
</div>
<div class="mx-20 flex justify-between items-center mt-64 max-md:mt-10 max-md:max-w-full">
	<div class="flex gap-5 max-md:flex-col max-md:gap-0 w-full max-md:ml-0 max-md:w-full">
		<div class="flex flex-col w-6/12 max-md:mt-10 max-md:max-w-full">
			<h2 class="text-4xl font-medium leading-10 text-white max-md:max-w-full">
				What is Ad Astra?
			</h2>
			<p class="mt-10 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
				Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
				graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
				century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
				use in a type specimen book. It usually begins with:
			</p>
		</div>
		<div class="hidden md:block">
			<Infinity />
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
		<aside class="hidden md:block flex-col w-full md:w-6/12 md:ml-5">
			<img loading="lazy" src={something} alt="" class="grow w-full aspect-[0.98]" />
		</aside>
	</div>
</section>
