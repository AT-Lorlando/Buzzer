import { buzzes } from "../data/buzzes";

export default defineEventHandler((event) => {
  for (const roomId in buzzes) {
    delete buzzes[roomId];
  }

  return {
    success: true,
    message: `Les buzz de la room '${roomId}' ont été effacés.`,
  };
});
