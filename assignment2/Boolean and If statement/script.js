const evaluateConditions = (obj) => {
  if (obj.age >= 18 && obj.hasLicense === true) {
    return "Eligible to drive.";
  }
  if (obj.temperature > 30 || obj.humidity > 70) {
    return "Warning: High discomfort level.";
  }
  if (
    (obj.role === "admin" || obj.role === "editor") &&
    obj.isActive === true
  ) {
    return "access granted";
  }
  if (
    obj.isLogged === true &&
    (obj.isAdmin === true || obj.isMember === true)
  ) {
    return "access granted";
  }
  if (obj.isStudent === true && obj.onLeave === false) {
    return "Eligible for student discount.";
  }
  if (
    obj.isOnline === true &&
    (obj.isActive === true || obj.isLogged === true)
  ) {
    return "User is active online.";
  }
};

const obj = {
  age: 19,
  hasLicense: true,
  temperature: 30,
  humidity: 70,
  role: "SEL",
  isActive: true,
  isLogged: false,
  isAdmin: true,
  isMember: false,
  isStudent: true,
  onLeave: false,
  isOnline: true,
};

const result = evaluateConditions(obj);
console.log(result); // "Eligible to drive."
