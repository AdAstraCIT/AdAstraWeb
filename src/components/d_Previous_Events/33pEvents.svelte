<script>
</script>



<div id="pr_events">
<h1>Past Events(adjust the box with image size)</h1>
<div id="outerbox">
    <div id="left_boxes">
    <div class="innerbox" id="box1"><img src="https://th.bing.com/th/id/OIP.sdjbwR1OTL0QleIcJh_tpwAAAA?w=226&h=180&c=7&r=0&o=5&pid=1.7" alt=""></div>
    <div class="innerbox" id="box5"><img src="https://th.bing.com/th/id/OIP.DkaYKj3o3NEIN6aHeUcLJQHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt=""></div>
    <div class="innerbox" id="box3"><img src="https://th.bing.com/th/id/OIP.WD-xK2m_aHjcjLTbVf0ICwHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7" alt=""></div>
    </div>
    <div id="right_boxes">
        <div class="innerbox" id="box2"><img src="https://th.bing.com/th/id/OIP.4cnHIp7Q-sKNwFbQHwovPAHaE7?w=254&h=180&c=7&r=0&o=5&pid=1.7" alt=""></div>
        <div class="innerbox" id="box4"><img src="https://th.bing.com/th/id/OIP.dhLpUkK7j7QzEjXyVv-48gHaEo?w=259&h=180&c=7&r=0&o=5&pid=1.7" alt=""></div>
    </div>
</div>
</div>

<div class="register">
    <div id="hedding">
        <h1>Start your journey with</h1> 
        <h2>Ad Astra today!</h2>
        <p> background needs to be changed ! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat corporis perspiciatis quis odit provident ipsam dignissimos dicta iusto voluptatum! Earum dolorem sed tempora veniam natus expedita repudiandae dicta reiciendis eius.</p>
    </div>
    <div id="button"><button>Register</button></div>
    
</div>

<style>

    h1{
        font-size: 280%;
    }
    h2{
        font-size: 280%;
        color: gold;
    }
    #pr_events {
        display: inline-block;
        margin-left: 5%;
        margin-right: 5%;


    }
    /* alline images 3 right side 2 left side  */
    #outerbox {
        max-height: 50%;
        margin-top: 5%;

    }
    .innerbox {
        background-color: white;
        border-radius: 10px;
        box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: transform 0.5s ease;
        cursor: pointer;
        background-color: #62666f;

    }

    .innerbox img {
        padding : 10px;
        border-radius: 10px;
        border: 1px solid rgb(255, 255, 255);
        object-fit: contain;
        object-position: 0 0;
        filter: brightness(80%);
        transition: filter 0.5s ease;

    }

    .innerbox:hover {
        transform: scale(1.1);
    }

    .innerbox:hover img {
        filter: brightness(100%);
    }

    #box1,#box3,#box5 {
        width: 60%;
        float: left;
    }
    
    .register{
        margin-top: 25px;
        margin-left: 5%;
        margin-right: 5%;
        background-color: black;
        color: white;
        border-radius: 10px;
        padding: 70px;
        text-align: left;
        font-size: 150%;
        display: flex;

    }

    .headding{
        
        width: 50%;
    }

    .register p{
        margin-top: 10px;
        margin-bottom: 10px;
        width: 70%;
        color: #62666f;
                
    }
#button{
    display: flex;
    flex-direction: row;
    align-items: center;
}
    .register button{
        float : right;
        padding : 10px;
        border-radius: 30px;
        background-color :#caff33;
        color:black;
        font-weight:bold;
        font-size: 70%;
        cursor: pointer;
        align-self: center;
    }

</style>