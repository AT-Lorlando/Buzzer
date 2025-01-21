import { buzzes } from "../data/buzzes";

export default defineEventHandler((event) => {
  return {
    success: true,
    buzzes: buzzes,
  };
});
