<script>

</script>

<!-- 33 is a random number just for the sake of naming -->

<div id="uc_events">
    <h1>Upcoming Events</h1>
    <div id="boxes">
        <div id="box1" class="box"><img src="https://www.rate-ai.com/wp-content/uploads/Gemini-DeepMinds.jpg" alt=""></div>
        <div id="box2" class="box"><img src="https://cdn.openart.ai/stable_diffusion/0655365e337cc79b12a2b12b3051a4984c759d28_2000x2000.webp" alt=""></div>
        <div id="box3" class="box"><img src="https://th.bing.com/th/id/OIP.zFfEWexCpH6mZZLtJVFh5QHaEt?rs=1&pid=ImgDetMain" alt=""></div>            
    </div>
</div>


<style>
    #uc_events{
        margin-left: 5%;
        margin-right:5%;
        margin-bottom: 50%;
    }

    h1{
        font-size: 280%;
    }

    #boxes{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 5%;
    }

    .box{
        width: 30%;
        height: 300px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: transform 0.5s ease;
        cursor: pointer;
        background-color: #62666f;      
    }

    .box img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid rgb(255, 255, 255);
        object-fit: contain;
        object-position: 0 0;
        filter: brightness(80%);
        transition: filter 0.5s ease;
        
    }
</style>
