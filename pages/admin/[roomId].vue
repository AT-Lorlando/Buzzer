<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-4xl font-bold mb-6">Admin - Room {{ roomId }}</h1>
    <div class="bg-white shadow-md rounded p-4 w-3/4">
      <h2 class="text-xl font-semibold mb-4">Buzzes :</h2>
      <ul v-if="buzzes.length > 0">
        <li
          v-for="(buzz, index) in buzzes"
          :key="index"
          class="border-b last:border-b-0 py-2"
        >
          <strong>{{ buzz.name }}</strong> - {{ formatDate(buzz.timestamp) }}
        </li>
      </ul>
      <p v-else class="text-gray-500">Aucun buzz pour cette room.</p>
      <button
        @click="clearBuzzes"
        class="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none"
      >
        Clear Buzzes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "#app";

const route = useRoute();
const roomId = route.params.roomId;
const buzzes = ref([]);

const fetchBuzzes = async () => {
  try {
    const response = await $fetch(`/api/buzzes/${roomId}`);
    buzzes.value = response.buzzes.sort((a, b) => a.timestamp - b.timestamp);
  } catch (error) {
    console.error("Erreur lors du chargement des buzzes :", error);
  }
};

const clearBuzzes = async () => {
  try {
    await $fetch(`/api/buzzes/${roomId}/clear`, { method: "POST" });
    buzzes.value = [];
    alert(`Les buzzes pour la room '${roomId}' ont été effacés.`);
  } catch (error) {
    console.error("Erreur lors de l'effacement des buzzes :", error);
  }
};

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getHours()}h${date.getMinutes()} - ${date.getSeconds()}:${date.getMilliseconds()}`;
}

onMounted(() => {
  fetchBuzzes();
  setInterval(fetchBuzzes, 1000);
});
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
