<script>
	export let title;
	export let image;
	export let date;
	export let link;
</script>

<div class="event-card rounded-lg shadow-md overflow-hidden">
	<div
		class="image-container h-48 w-48 bg-cover bg-center"
		style="background-image: url({image})"
	></div>
	<div class="card-content p-4">
		<h2 class="text-xl font-bold">{title}</h2>
		<p class="text-gray-600">{date}</p>
		<a href={link} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">Register Now</a
		>
	</div>
</div>
