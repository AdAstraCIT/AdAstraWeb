<script>
	import bg from '$lib/assets/bg.png';
</script>

<body
	class="bg-black text-white bg-cover bg-no-repeat"
	style="background-image: url('{bg}')"
></body>
<header>
	<nav class="w-full flex justify-center items-center fixed top-5 z-50 font-thin tracking-widest">
		<div
			class="backdrop-blur-sm w-[85%] h-14 flex justify-center px-10 items-center rounded-full bg-[#10101050] md:justify-between"
		>
			<div class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
				<a href="/" class="font-mono text-transparent font-bold text-xl cursor-pointer">AD ASTRA</a>
			</div>
			<div class="justify-center items-center space-x-5 hidden md:flex duration-500">
				<ul class="flex justify-center items-center space-x-3 uppercase">
					<li>
						<a
							href="/about"
							class="p-1 border-b-2 border-transparent hover:border-white hover:border-b-2 duration-200 cursor-pointer"
							>About Us</a
						>
					</li>
					<li>
						<a
							href="/merch"
							class="p-1 border-b-2 border-transparent hover:border-white hover:border-b-2 duration-200 cursor-pointer"
							>Merch</a
						>
					</li>
				</ul>
			</div>
			<div class="hidden gap-1 cursor-pointer md:hidden duration-500">
				<div
					class="navbar w-5 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
				></div>
				<div
					class="navbar w-5 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
				></div>
				<div
					class="navbar w-5 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
				></div>
			</div>
		</div>
		<div></div>
	</nav>
</header>
<br />
<slot />
