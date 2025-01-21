import { buzzes } from "../../data/buzzes";

export default defineEventHandler((event) => {
  const { roomId } = event.context.params;

  if (!buzzes[roomId]) {
    return { success: true, buzzes: [] }; // Aucune donnée pour la room
  }

  return {
    success: true,
    buzzes: buzzes[roomId],
  };
});
