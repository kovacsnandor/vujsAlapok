<template>
  <div class="my-contact p-5">
    <h2>Kontakt</h2>

    <div class="row row-cols-2 g-4">
        <div class="col" v-for="(icon, i) in icons" :key="i">
            <div class="card  h-100">
                <div
                class="card-body d-flex flex-column  justify-content-center align-items-center my-card"
                >
                <h4 class="card-title">{{ icon.text }}</h4>
                <p>
                    <i class="bi my-icon-size" :class="icon.name"></i>
                </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { name: ["bi-envelope-at-fill"], text: "by email" },
        { name: ["bi-telephone"], text: "by phone" },
        { name: ["bi-mailbox"], text: "by post" },
        { name: ["bi-fire"], text: "by smoke signal" },
      ],
    };
  },
};
</script>

<style scoped>
.my-contact {
  max-width: 600px;
  margin: 0 auto;
}
.my-card {
  height: 200px;
}
.my-icon-size{
    font-size: 2rem;
}
</style>