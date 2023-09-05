<template>
  <nav class="filter-nav">
    <button @click="filterGuncelle('hepsi')">Bütün Yapılacaklar</button>
    <button @click="filterGuncelle('Tamamlandı')">
      Tamamlanan Yaapılacaklar
    </button>
    <button @click="filterGuncelle('yapilıyor')">
      Devam eden Yapılacaklar
    </button>
  </nav>
</template>
<script>
export default {
  methods: {
    filterGuncelle() {
      this.$emit("filterDurum", durum);
    },
  },
};
</script>
<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
