import { buzzes } from "../../../data/buzzes";

export default defineEventHandler((event) => {
  const { roomId } = event.context.params;

  if (buzzes[roomId]) {
    delete buzzes[roomId];
  }

  return {
    success: true,
    message: `Les buzz de la room '${roomId}' ont été effacés.`,
  };
});
