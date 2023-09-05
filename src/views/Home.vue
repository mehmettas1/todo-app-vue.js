<template>
  <div class="home">
    <NavbarFilter @filterDurum="aktifSekme = $event" />
    <div v-if="yapilacaklar.length">
      <div v-for="yap in yapilacaklar" :key="yap.id">
        <Yapilacak :yapilacak="yap" @sil="silHandle" @yapildi="yapildiHandle" />
      </div>
    </div>
    <div v-else>
      <p>yapilacaklar yükleniyor</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarFilter from "@/components/NavbarFilter.vue";
import Yapilacak from "../components/Yapilacak";
export default {
  name: "Home",
  components: { Yapilacak, NavbarFilter },
  data() {
    return {
      yapilacaklar: [],
      aktifSekme: "hepsi",
    };
  },
  mounted() {
    fetch("http://localhost:3000/yapilacaklar")
      .then((res) => res.json())
      .then((data) => (this.yapilacaklar = data))
      .catch((err) => console.log(err));
  },
  methods: {
    silHandle(id) {
      this.yapilacak = this.yapilacak.filter((yap) => {
        return yap.id !== id;
      });
    },
    yapildiHandle(id) {
      let yap = this.yapilacaklar.find((yapilacak) => {
        return yapilacak.id == id;
      });
      yap.yapildi = !yap.yapildi;
    },
  },
};
</script>
