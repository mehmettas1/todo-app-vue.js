<template>
  <div class="home">TODO APP</div>
</template>

<script>


// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      yapilacaklar:[]
    }
  },
  mounted(){
fetch('http://localhost:3000/yapilacaklar')
.then((res)=>res.json())
.then((data)=>this.yapilacaklar=data)
.catch(())
  }
  ,
};
</script>
