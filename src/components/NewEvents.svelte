<script>
	import { EventBg5, EventBg6, EventBg7, Between } from '$lib';
</script>

<div class="mx-10 mb-10">
	<div class="mt-20 text-3xl font-medium leading-10 text-white max-md:mt-10 max-md:max-w-full">
		Upcoming Events
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center mt-5 gap-10">
		<div class="box w-full md:w-1/4 h-58 rounded-2x shadow-lg overflow-hidden duration-500 cursor-pointer">
			<img
				class="w-full h-full object-contain object-top duration-500"
				src={EventBg5}
				alt=""
			/>
		</div>
		<div class="box w-full md:w-1/4 h-58 rounded-2x shadow-lg overflow-hidden duration-500 cursor-pointer">
			<img
				class="w-full h-full object-contain object-top duration-500"
				src={EventBg6}
				alt=""
			/>
		</div>
		<div class="box w-full md:w-1/4 h-58 rounded-2x shadow-lg overflow-hidden duration-500 cursor-pointer">
			<img
				class="w-full h-full object-contain object-top duration-500"
				src={EventBg7}
				alt=""
			/>
		</div>
	</div>
	<div class="flex justify-center items-center">
		<div class="box w-full rounded-lg shadow-lg overflow-hidden duration-500 cursor-pointer">
			<img
				class="w-full h-full rounded-lg object-contain object-top duration-500"
				src={Between}
				alt=""
			/>
		</div>
	</div>
</div>
