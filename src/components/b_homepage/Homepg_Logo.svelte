<script>
	import Logo from '$lib/assets/Logo.png';
</script>

<div id="div_partA"><img id= "centerLogo" src="{Logo}" alt="ad_astra_Logo"/></div>

<div id="div_partB">
	<h1 class="sub_title">what is Ad Astra?</h1>
    <p class="sub_title_dis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nostrum accusamus? Quis minus modi molestiae dicta aliquid nulla explicabo laborum asperiores tempore veritatis reiciendis odit nam sint, facere quibusdam dolore.</p>
</div>

<div id="div_partC">
	<h1 class="sub_title">What we do?</h1>
	<div id="p">
	    <p class="sub_title_dis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nostrum accusamus? Quis minus modi molestiae dicta aliquid nulla explicabo laborum asperiores tempore veritatis reiciendis odit nam sint, facere quibusdam dolore.</p>
	</div>
	<ol id="list">
		<li>1. First item</li>
		<li>2. Second item</li>
		<li>3. Third item</li>
	</ol>
</div>

<style>
/* the space for animations is left in the form of padding u can later change it to margin as you needs  */

*{
    margin: 0;
    padding: 0;
}

#div_partB{
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 80%;
}

div{
    display: inline-block;
}

#centerLogo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

.sub_title{
    font-size: 280%;
}

.sub_title_dis{
    font-size: 140%;
    color: #8a8a8a;
    margin-top: 2%;
    width: 50%;
    float: left;

}

#div_partC{
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 50%;
    padding-bottom:20% ;
}

#list{
    font-size: 140%;
    color: #8a8a8a;

}

#p{
    display: inline-block;
}
</style>