// 📱 Basic Example - Social Media Context
// const user1 = {
//     name: "Alice",
//     followers: 1000
// };

// const user2 = {
//     name: "Bob",
//     followers: 5000
// };

// function introduce(platform, content) {
//     return `Hi! I'm ${this.name}
//     with ${this.followers} 
//     followers on ${platform}. ${content}`;
// }

// 🎯 CALL Example
// console.log("1️⃣ CALL Example:");
// console.log(introduce.call(user1,
//      "YouTube", "Subscribe for tech tips!")
//     );
// console.log(introduce.call(user2, "Instagram",
//      "Follow for daily motivation!")
//     );
// console.log();

// 🎯 APPLY Example  
// console.log("2️⃣ APPLY Example:");
// const args1 = ["TikTok", "Watch my coding videos!"];
// const args2 = ["Twitter", "RT if you love JavaScript!"];
// console.log(introduce.apply(user1, args1));
// console.log(introduce.apply(user2, args2));
// console.log();

// 🎯 BIND Example
// console.log("3️⃣ BIND Example:");
// const aliceIntro = introduce.bind(user1);
// const bobIntro = introduce.bind(user2, "LinkedIn"); // Partial application

// console.log(aliceIntro("YouTube", "Like this video!"));
// console.log(bobIntro("Check out my programming posts!"));
// console.log();

// 🚀 Advanced Example - Calculator
// console.log("=== ADVANCED EXAMPLES ===\n");

const calculator = {
    brand: "MathPro",
    add: function(a, b) {
     return `${this.brand}: ${a} + ${b} 
     = ${a + b}`;
    }
};

const scientificCalc={ brand: "Scientific Pro" };
const basicCalc = { brand: "Basic Calc" };

// console.log("4️⃣ Calculator with CALL:");
// console.log(calculator.add
//     .call(scientificCalc, 15, 25));

// console.log("5️⃣ Calculator with APPLY:");
// const numbers = [10, 30];
// console.log(calculator.add
//     .apply(basicCalc, numbers));

// console.log("6️⃣ Calculator with BIND:");
// const scientificAdd = calculator.add
//     .bind(scientificCalc);
// console.log(scientificAdd(100, 200));
// console.log();

// // 🌟 Memory Trick
// console.log("=== MEMORY TRICK ===");
console.log("🎯 CALL = 'C'omma separated arguments");
console.log("🎯 APPLY = 'A'rray of arguments");  
console.log("🎯 BIND = 'B'inds and returns new function");

