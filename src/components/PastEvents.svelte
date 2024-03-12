<script>
	import { EventBg1, EventBg2, EventBg3, EventBg4 } from '$lib';
</script>

<div class="flex flex-col px-5 mt-4 w-full max-w-[1206px] max-md:max-w-full ">
	<div class="text-3xl font-medium leading-10 text-white max-md:max-w-full">Past Events</div>
	<div class="mt-10 max-md:max-w-full">
		<div class="flex gap-5 max-md:flex-col max-md:gap-0">
			<div class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
				<div class="flex flex-col grow text-white max-md:mt-5 max-md:max-w-full">
					<img
						loading="lazy"
						srcset={EventBg1}
						alt="Event Background 1"
						class="w-full aspect-[2.63] max-md:max-w-full"
					/>
					<img
						loading="lazy"
						srcset={EventBg3}
						alt="Event Background 3"
						class="mt-6 w-full aspect-[2.44] max-md:max-w-full"
					/>
					<div
						class="flex flex-col items-start py-6 pr-20 pl-5 mt-4 rounded-2xl bg-white bg-opacity-10 max-md:pr-5 max-md:max-w-full"
					>
						<div class="text-2xl font-medium leading-7 whitespace-nowrap">
							See more of Past Events
						</div>
						<div
							class="justify-center px-4 py-2 mt-2 text-xs leading-4 text-center bg-black rounded-[32.853px]"
						>
							Visit Page
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
				<div class="flex flex-col grow max-md:mt-5 max-md:max-w-full">
					<img
						loading="lazy"
						srcset={EventBg2}
						alt="Event Background 2"
						class="w-full aspect-[1.14] max-md:max-w-full"
					/>
					<img
						loading="lazy"
						srcset={EventBg4}
						alt="Event Background 4"
						class="mt-4 w-full aspect-[2] max-md:max-w-full"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
