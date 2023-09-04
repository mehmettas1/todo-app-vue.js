<template>
  <form @submit.prevent="yapilacakEkle">
    <label for="">Başlık:</label>
    <input type="text" v-model="baslik" required />
    <label for="">İçerik:</label>
    <input type="text" v-model="icerik" required />
    <button>Ekle</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      baslik: "",
      icerik: "",
    };
  },
  methods: {
    // yapilacakEkle() {
    //   console.log(this.baslik, this.icerik);
    // },
    yapilacakEkle() {
      let yapilacak = {
        baslik: this.baslik,
        icerik: this.icerik,
        yapildi: false,
        id: Math.floor(Math.random() * 1000000000),
      };
      fetch("http://localhost:3000/yapilacaklar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(yapilacak),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
