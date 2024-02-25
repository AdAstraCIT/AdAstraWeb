<script>
	import Logo from '$lib/assets/Logo.png';
</script>

<div id="logo_part" class="mt-1">
    <img id="logo" src={Logo} alt="" class="h-10 w-auto mt-6 mb-6 block mx-auto" />
</div>

<div id="footbar" class="flex flex-row justify-between items-center bg-gray-950 text-white p-3 mb-6 mx-10">
    <div class="flex items-center space-x-4">
        <a href="https://twitter.com/adastracit" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter text-white"></i></a>
        <a href="https://www.linkedin.com/company/adastracit/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin text-white"></i></a>
        <i class="fas fa-envelope text-white"></i><span class="text-white">hello@example.com</span>
        <i class="fas fa-phone text-white"></i><span class="text-white">+91 00000 00000</span>
    </div>
    <ul class="flex items-center ms-auto space-x-2">
        <li><a href="/Privacy" class="px-1 py-2 hover:text-gray-300">Privacy Policy</a></li>
        <li><span class="text-gray-400 px-2">|</span></li>
        <li><a href="/tos" class="px-1 py-2 hover:text-gray-300">Terms of Service</a></li>
    </ul>
</div>