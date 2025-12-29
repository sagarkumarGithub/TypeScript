import { userEmail,validate, Test } from "./login";
import { userEmail as regEmail, validate as regValidate, Test as RegTest } from "./register";
import wow from "./login";

console.log("Login Email:", userEmail);
console.log("Register Email:", regEmail);

validate();
regValidate();
wow();