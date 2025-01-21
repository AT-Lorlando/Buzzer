import { buzzes } from "../data/buzzes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Vérifiez les données envoyées
  if (!body.name || !body.roomId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Nom ou Room ID manquant",
    });
  }

  const { name, roomId, timestamp } = body;

  // Ajoutez le buzz à la room correspondante
  if (!buzzes[roomId]) {
    buzzes[roomId] = [];
  }
  buzzes[roomId].push({ name, timestamp });

  // Réponse
  return {
    success: true,
    message: "Buzz enregistré !",
  };
});
