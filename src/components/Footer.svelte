<script>
	import { Logo, twitter, linkedin, email, phone } from '$lib';
</script>

<div
	class="self-stretch mt-9 border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full w-auto"
></div>

<div id="logo_part" class="mt-1">
	<img id="logo" src={Logo} alt="" class="h-16 w-1/2 mt-24 mb-24 block mx-auto" />
</div>

<div
	class="self-stretch mt-9 border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full w-auto"
></div>
<div
	class="mx-5 h-16 flex flex-row justify-between items-center bg-zinc-900 border-neutral-800 text-white p-2 mt-10 mb-10 md:mx-24 rounded-full"
>
	<div class="w-full flex items-center justify-between gap-5 px-5">
		<div class="w-full flex gap-5">
			<a
				href="https://twitter.com/adastracit"
				target="_blank"
				rel="noopener noreferrer"
				class="p-1 rounded-full"><img src={twitter} alt="Twitter" /></a
			>
			<a
				href="https://www.linkedin.com/company/adastracit/"
				target="_blank"
				rel="noopener noreferrer"
				class="p-1 rounded-full"><img src={linkedin} alt="LinkedIn" /></a
			>
		</div>
		<a class=" w-full md:w-[250px] flex justify-center" href="mailto:adastra@cambridge.edu.in">
			<button
				class="w-full bg-[#CAFF33] py-3 md:py-4 rounded-full flex items-center justify-center gap-2 md:px-10 px-5"
			>
				<img class="w-[22px] h-[17px]" src={email} alt="Email icon" />
				<span class="text-black w-full text-sm">adastra@cambridge.edu.in</span>
			</button>
		</a>
	</div>
</div>
