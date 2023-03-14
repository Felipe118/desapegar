<template>
    <footer class="d-flex  footer flex-column text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-light">
        <div class="">
            <!-- Copyright -->
            <div style="text-align: center;" class=" text-dark mb-3 mb-md-0">
                Copyright © 2023. All rights reserved Desapegar.
            </div> 
            <!-- Copyright -->
        </div> 
    </footer>
    
</template>

<script>
    export default {
        name: 'FooterAuth'
    }
</script>

<style>
 @media (max-width: 1000px) {
    .footer{
        margin-top: 300px;
        background-color: gray;
    }
  }
  @media (min-width: 600px) and (max-width:993px) {
    .footer{
        margin-top: 500px;
    }
  }
  @media (max-width: 400px) {
    .footer{
        margin-top: 100px;
        background-color: gray;
    }
  }
</style>