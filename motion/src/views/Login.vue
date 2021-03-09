<template>
  <section class="grid sm:grid-cols-5">
    <div class="col-span-3">
      <div class="flex flex-col justify-center h-screen">
        <div class="lg:px-24 px-8">
          <h1
            class="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-purple-500 text-5xl font-black"
          >
            MOTION
          </h1>
          <p class="mt-2 mb-4">
            Intergrated Mailing System
            <span class="bg-purple-400 text-white rounded-sm p-1 ml-2"
              >BETA Version</span
            >
          </p>
          <div class="flex flex-col md:w-1/2">
            <form @submit="goToDashboard">
              <p class="text-red-500">{{ error }}</p>
              <div class="my-2 w-full">
                <MotionInput
                  placeholder="Username"
                  v-model="credentials.username"
                ></MotionInput>
              </div>
              <div class="mb-8 mt-1 w-full">
                <MotionInput
                  placeholder="Password"
                  type="password"
                  v-model="credentials.password"
                ></MotionInput>
              </div>
              <MotionButton type="submit">Login</MotionButton>
              <div class="my-4">Belum punya akun?</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden md:block col-span-2 bg-gradient-to-r from-purple-400 to-red-500"
    >
      <div class="h-screen flex flex-col items-center justify-center">
        <h1></h1>
      </div>
    </div>
  </section>
</template>

<script>
import MotionButton from '../components/MotionButton.vue';
import MotionInput from '../components/MotionInput.vue';
export default {
  components: {
    MotionButton,
    MotionInput,
  },
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      error: '',
    };
  },
  methods: {
    goToDashboard() {
      if (
        this.credentials.username !== '' &&
        this.credentials.password !== ''
      ) {
        this.$router.push('/');
      } else {
        if (this.credentials.username === '') {
          this.error = 'Username anda kosong';
        }
      }
    },
  },
};
</script>

<style></style>
