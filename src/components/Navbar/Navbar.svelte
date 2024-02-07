<script>
  import Logo from '$lib/assets/Logo.png';
</script>
  
  <style>
    .logo-img {
    height: 25px; 
    width: auto; 
    }

    .navbar {
    height: 50px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;    
    backdrop-filter: blur(5px) brightness(75%) saturate(80%);
    box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    border-radius: 30px;
    width:90%;
    position: fixed;
    left: 5%;
}
    </style>
  
  <nav class="flex items-center justify-between px-20 navbar">
    <ul class="list-none mr-4">
      <li><img alt="AdAstraLogo" class="logo-img" src={Logo}/></li>
    </ul>
    <ul class="flex items-center ml-auto space-x-1">
      <li><a href="/about" class="px-4 py-2">About Us</a></li>
      <li><a href="/merch" class="px-4 py-2">Merch</a></li>
    </ul>
  </nav>
  