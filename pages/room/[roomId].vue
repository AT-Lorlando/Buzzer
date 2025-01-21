<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div
      id="error"
      class="text-red-500 p-4 rounded transition-all"
      v-if="errors.length > 0"
    >
      <ul>
        <li
          v-for="error in errors"
          :key="error"
          class="mb-2 transition-all animate-pulse bg-red-200 p-2 rounded"
        >
          {{ error }}
        </li>
      </ul>
    </div>
    <h1 class="text-4xl font-bold mb-6">Buzzer</h1>
    <div v-if="!buzzed" class="flex flex-col items-center space-y-4">
      <p class="text-sm text-gray-500">Room: {{ roomId }}</p>
      <input
        v-model="name"
        type="text"
        placeholder="Votre nom"
        class="px-4 py-2 border border-gray-300 rounded focus:outline-none"
      />
      <button
        @click="buzz"
        class="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
      >
        Buzzer
      </button>

      <p class="text-sm text-gray-500">
        Appuyez sur la touche <kbd>Enter</kbd> pour buzzer
      </p>
    </div>
    <div v-else class="flex flex-col items-center space-y-4">
      <h2 class="text-2xl font-semibold text-green-600">Buzz envoyé !</h2>
      <button
        @click="buzzed = false"
        class="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "#app";

const name = ref("");
const buzzed = ref(false);
const route = useRoute();
const roomId = route.params.roomId;
const errors = ref([]);

const buzz = async () => {
  if (!name.value || !roomId) {
    errors.value.push("Veuillez remplir votre nom et/ou aller dans une Room");
    setTimeout(() => {
      errors.value.shift();
    }, 5000);
    return;
  }

  try {
    await useFetch("/api/buzzer", {
      method: "POST",
      body: {
        timestamp: Date.now(),
        name: name.value,
        roomId: roomId,
      },
    });
    buzzed.value = true;
  } catch (error) {
    console.error("Erreur lors de l'envoi du buzz", error);
  }
};

const handleKeyDown = (event) => {
  if (event.code === "Enter" && !buzzed.value) {
    buzz();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
