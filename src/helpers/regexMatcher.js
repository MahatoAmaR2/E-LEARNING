export function isEmail(string) {
  return string.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
export function isValidPassword(string) {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // Check if the password is valid
  if (regex.test(string)) {
    return true; // Valid password
  } else {
    return "Password must be 6-16 characters long, contain at least one number and one special character."; // Invalid password
  }
}
