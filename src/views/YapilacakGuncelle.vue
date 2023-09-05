<template>
  <h1>Yapılacak Güncelle{{ id }}</h1>
  <form @submit.prevent="handleSubmit">
    <label for="">Başlık:</label>
    <input type="text" v-model="baslık" />
    <label for="">icerik:</label>
    <input type="text" v-model="icerik" />
    <button>Güncelle</button>
  </form>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      baslık: "",
      icerik: "",
      uri: "http://localhost:3000/yapilacaklar/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.baslık = data.baslık;
        this.icerik = data.icerik;
      });
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ baslık: this.baslık, icerik: this.icerik }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
