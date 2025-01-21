<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-2xl font-bold mb-4">Enter Room Number</h1>
    <div class="flex items-center space-x-4">
      <input
        v-model="roomNumber"
        placeholder="Enter room number"
        class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="goToRoom"
        class="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Go
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomNumber: "",
    };
  },
  methods: {
    goToRoom() {
      if (this.roomNumber) {
        this.$router.push(`/room/${this.roomNumber}`);
      }
    },
  },
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
