<template>
    <Header></Header>

    <!--main-wrapper start-->
    <div class="main-wrapper">
	    
	    <router-view></router-view>
	    
	    <!-- Footer -->
         <Footer></Footer>
    
    </div>
    <!--main-wrapper end-->
</template>

<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>