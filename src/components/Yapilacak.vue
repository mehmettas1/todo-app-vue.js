<template>
  <div class="yapilacak">
    <div class="baslik">
      <h3 @click="detayGoster = !detayGoster">{{ yapilacak.baslık }}</h3>
      <div class="icon">
        <span class="material-icons"> edit </span>
        <span @click="yapilacakSil" class="material-icons"> delete </span>
        <span @click="toggle" class="material-icons"> done </span>
      </div>
    </div>
    <div v-if="detayGoster" class="detay">
      <p>{{ yapilacak.icerik }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["yapilacak"],

  data() {
    return {
      detayGoster: false,
      uri: "http://localhost:3000/yapilacaklar/" + this.yapilacak.id,
    };
  },
  methods: {
    yapilacakSil() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("sil", this.yapilacak.id))
        .catch((err) => console.log(err));
    },
    toggle() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yapıldı: !this.yapilacak.yapıldı }),
      })
        .then(() => this.$emit("yapıldı", this.yapilacak.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
.yapilacak {
  margin: 20px auto;
  background-color: #4b4b4b;
  padding: 10px 20px;
  border-radius: 15px;
  border: 3px solid #b33939;
  color: #f7f1e3;
}

.yapilacak:hover {
  box-shadow: 8px 10px 10px rgba(2, 2, 2, 0, 3);
}
h3 {
  cursor: pointer;
}
.baslik {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.material-icons {
  font-size: 25px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #2f3542;
}
</style>
