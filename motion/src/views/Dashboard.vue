<template>
  <navbar />
  <div></div>
  <section
    id="dashboard-banner"
    class="h-96 grid lg:grid-cols-2 px-14 lg:px-48 pt-16"
  >
    <div>Kiri</div>
    <div class="flex flex-col justify-center">
      <div>
        <div class="flex flex-row items-center">
          <div
            class="rounded-full bg-gradient-to-r from-purple-400 to-purple-500 h-8 w-8"
          ></div>
          <div class="ml-2">
            <h3>@davahamka</h3>
          </div>
        </div>
        <h1 class="my-4">Selamat datang di Motion 👋</h1>
        <div class="grid grid-cols-2 divide-x my-8 -ml-4">
          <div class="px-4">
            <h3>Inbox</h3>
            <h2>89</h2>
            <p>Belum dibaca</p>
          </div>
          <div class="px-4">Outbox</div>
        </div>
        <div>
          <motion-button>Create new message</motion-button>
        </div>
      </div>
    </div>
  </section>

  <section id="inbox-section" class="lg:px-48 px-14">
    <div class="">
      <div class="flex flex-row justify-between items-center py-2">
        <h3>Menu</h3>
        <h3 class="text-gray-500"></h3>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 pt-8">
        <menu-box
          class="bg-gradient-to-r from-purple-100 to-red-100 shadow-lg select-none"
          total="82"
          title="Yepp, that's your total message in <b>inbox</b> "
          @click="goToInbox"
        ></menu-box>
        <menu-box
          class="bg-gradient-to-r from-red-100 to-green-100 shadow-lg select-none"
          total="42"
          title="Woww, you have a lot of message that has sent"
          @click="goToOutbox"
        ></menu-box>
        <menu-box
          class="bg-gradient-to-r from-green-100 to-blue-50 shadow-lg select-none"
          total="88"
          title="Total <b>agencies</b>"
          @click="goToAgency"
        ></menu-box>
        <menu-box
          class="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg select-none"
          total="X"
          title="Coming soon 👻"
        ></menu-box>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import MenuBox from '../components/MenuBox.vue';
import MotionButton from '../components/MotionButton.vue';
import Navbar from '../components/Navbar.vue';
export default {
  components: { MotionButton, MenuBox, Navbar, Footer },
  methods: {
    goToInbox() {
      this.$router.push('/inbox');
    },
    goToOutbox() {
      this.$router.push('/outbox');
    },
    goToAgency() {
      this.$router.push('/agency');
    },
  },
};
</script>

<style></style>
