<template>
    <header-component></header-component>
    <section>
        <router-view></router-view>
    </section>

    <footer-component></footer-component>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
    name: 'BaseTemplate',

    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>