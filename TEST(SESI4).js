const userProfile = {
  // Properti dan Nilai
  firstName: "Budi",
  lastName: "Santoso",
  age: 30,
  email: "budi.santoso@example.com",
  isActive: true,

  // Metode (Function sebagai properti)
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },

  // Metode menggunakan shorthand ES6
  greet() {
    return "Halo, saya " + this.getFullName() + ".";
  }
};

console.log("Nama lengkap: ", userProfile.getFullName())
console.log("Usia: ", userProfile.age)

console.log("Status aktif: ", userProfile['isActive']);
console.log(userProfile.greet());