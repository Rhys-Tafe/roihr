import { router } from "expo-router";
import saveUser from "./form";
function validateForm() {
  if (id === 0) {
    alert("ID cannot be nothing.");
    router.push("/screens/signup");
  } else {
    saveUser();
  }
}
export { validateForm };
