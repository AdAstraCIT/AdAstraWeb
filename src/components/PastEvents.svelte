<script>
    import { EventBg } from "$lib";
</script>

<div id="pr_events" class="inline-block mx-10">
    <h1 class="text-7xl">Past Events</h1>
    <div id="outerbox" class="max-h-1/2 mt-10 flex flex-wrap flex-col md:flex-row mx-10">
        <div class="innerbox w-full md:w-1/2 md:px-5" id="box1">
            <img
                src={EventBg}
                alt=""
                class="p-2 rounded-lg border border-white object-contain object-left filter brightness-80 transition-all duration-500 ease-in-out w-full h-auto"
            />
        </div>
        <div class="innerbox w-full md:w-1/2 md:px-5" id="box5">
            <img
                src={EventBg}
                alt=""
                class="p-2 rounded-lg border border-white object-contain object-left filter brightness-80 transition-all duration-500 ease-in-out w-full h-auto"
            />
        </div>
        <div class="innerbox w-full md:w-1/2 md:px-5" id="box3">
            <img
                src={EventBg}
                alt=""
                class="p-2 rounded-lg border border-white object-contain object-left filter brightness-80 transition-all duration-500 ease-in-out w-full h-auto"
            />
        </div>
        <div class="innerbox w-full md:w-1/2 md:px-5" id="box2">
            <img
                src={EventBg}
                alt=""
                class="p-2 rounded-lg border border-white object-contain object-left filter brightness-80 transition-all duration-500 ease-in-out w-full h-auto"
            />
        </div>
        <div class="innerbox w-full md:w-1/2 md:px-5" id="box4">
            <img
                src={EventBg}
                alt=""
                class="p-2 rounded-lg border border-white object-contain object-left filter brightness-80 transition-all duration-500 ease-in-out w-full h-auto"
            />
        </div>
        <div
            class="innerbox w-full md:w-1/2 md:px-5 flex flex-col items-center justify-center text-center bg-gray-900 h-24 p-5 rounded-lg"
        >
            <h2 class="text-2xl mb-4 text-white">See more of the past event</h2>
            <button class="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Visit Page
            </button>
        </div>
    </div>
</div>