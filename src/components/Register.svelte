<script>
	import { RegisterBg } from '$lib';
</script>

<div
	class="register mt-6 mx-24 text-white rounded-xl p-18 text-left text-3xl flex bg-black"
	style="background: url({RegisterBg}) no-repeat center center / cover;"
>
<div id="hedding" class="mx-16 mt-24 mb-24">
    <h1 class="text-7xl">Start your journey with</h1>
    <div class="flex flex-row items-center">
        <h2 class="text-7xl text-green-logo mr-4">Ad Astra</h2>
        <h1 class="text-7xl">today!</h1>
    </div>

		<p class="mt-2 mb-2 w-7/10 text-gray-500">
			background needs to be changed ! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Repellat corporis perspiciatis quis odit provident ipsam dignissimos dicta iusto voluptatum!
			Earum dolorem sed tempora veniam natus expedita repudiandae dicta reiciendis eius.
		</p>
	</div>
	<div id="button" class="flex flex-row items-center">
		<button
			class="float-right px-2 py-1 rounded-full bg-green-logo text-black font-bold text-sm cursor-pointer self-center"
			>Register</button
		>
	</div>
</div>

<style>
	.bg-green-logo {
		--tw-bg-opacity: 1;
		background-color: rgb(202 255 51 / var(--tw-bg-opacity));
	}
	.text-green-logo {
		--tw-text-opacity: 1;
		color: rgb(202 255 51 / var(--tw-text-opacity));
	}
</style>
