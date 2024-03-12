<script>
	import { Logo, twitter, linkedin, email, phone } from '$lib';
</script>

<div
	class="self-stretch mt-9 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full"
></div>

<div id="logo_part" class="mt-1">
	<img id="logo" src={Logo} alt="" class="h-16 w-auto mt-24 mb-24 block mx-auto" />
</div>
<div
	class="shrink-0 mt-20 max-w-full h-px border border-solid bg-neutral-800 border-neutral-800 w-[1116px] max-md:mt-10 mx-auto"
></div>

<div
	id="footbar"
	class="flex flex-row justify-between items-center bg-zinc-900 border-neutral-800 text-white p-2 mt-10 mb-36 mx-24 rounded-full"
>
	<div class="flex items-center space-x-4">
		<a
			href="https://twitter.com/adastracit"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 rounded-full text-white mx-3 object-contain"><img src={twitter} alt="Twitter" /></a
		>
		<a
			href="https://www.linkedin.com/company/adastracit/"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 rounded-full text-white mx-3 object-contain"><img src={linkedin} alt="LinkedIn" /></a
		>
		<div class="flex items-center space-x-4">
			<a class="text-sm inline-flex" href="mailto:adastra@cambridge.edu.in">
				<img class="text-white mx-3 object-contain" src={email} alt="Email icon" />
				<span class="text-white hidden md:block">adastra@cambridge.edu.in</span>
			</a>
			<a href="tel:+910000000000">
				<img class="text-white mx-3 object-contain" src={phone} alt="Phone icon" />
				<span class="text-white hidden md:block">+91 00000 00000</span>
			</a>
		</div>
	</div>	
	<ul class="flex items-center ms-auto space-x-2 mr-4 text-white hidden md:block">
		<li><a href="/Privacy" class="px-1 py-2 hover:text-gray-300 text-white hidden md:block">Privacy Policy</a></li>
		<li><span class="text-gray-400 px-2 hidden md:block">|</span></li>
		<li><a href="/tos" class="px-1 py-2 hover:text-gray-300 text-white hidden md:block">Terms of Service</a></li>
	</ul>
</div>
