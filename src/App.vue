<template>
<div id="app">
 
 <!-- <div id="nav" class="Container">
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link> -->

<nav class="navbar navbar-inverse ">
  <div class="container-fluid" >
    <div class="navbar-header"  style="margin-top:-50px; margin-left:-700px;">
      <a class="navbar-brand" href="#" style="text-align:center">COVID19<br><small>Türkiye Web Portalı</small></a>
    </div>
    <ul class="nav navbar-nav"  style="height:80px; margin-top:-10px; margin-left:-750px;" >
    <li> <router-link to="/">Anasayfa</router-link></li>

    <li class="dropdown"> <router-link to="" class="dropdown-toggle" data-toggle="dropdown">Covid-19<span class="caret"></span></router-link>
    
     <ul class="dropdown-menu">
          <li><router-link to="/türkiyeSonDurum">Türkiye'de Son Durum</router-link></li>
          <li><router-link to="/dunyaSonDurum">Dünya'da Son Durum</router-link></li>
          <li><router-link to="/guncelGelismeler">Güncel Gelişmeler</router-link></li>      
        </ul>
      </li>
    
    
    
    <li> <router-link to="/korunma">Korunma ve Tedavi Yöntemleri</router-link> </li>
    <li> <router-link to="/questions">Sıkça Sorulan Sorular</router-link> </li>
    <li> <router-link to="/duyurular">Duyurular</router-link> </li>
    <li> <router-link to="/contact">İletişim</router-link> </li>   
       <li><router-link to="/signUp" tag="a" class="link" ><span class="glyphicon glyphicon-user"></span>Üye Ol</router-link></li>
      <li><router-link to="/login" tag="a" class="link" ><span class="glyphicon glyphicon-log-in"></span>Giriş Yap</router-link></li>
 </ul>
  </div>
  
</nav>
 <router-view/>
 <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://tugcenurozkan.com/"> tugcenurozkan.com</a>
</div>
   
   </div>

</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

};
</script>

<style lang="scss">

.navbar{
  background-color: rgb(87, 87, 87);
   color:rgb(32, 32, 32);
  height:70px;
}
body{
  background-color: rgb(196, 196, 196);
}
p{
  color:rgb(32, 32, 32);
}

h1,h2,h3,h4,h5,h6{
  color:rgb(32, 32, 32);
  text-align: center;
}


</style>