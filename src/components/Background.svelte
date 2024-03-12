<script>
    import { vid } from '$lib';
</script>

<div class="flex justify-center items-center h-screen">
    <video
        src={vid}
        autoplay
        muted
        loop
        playsinline
        class="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    />
</div>
