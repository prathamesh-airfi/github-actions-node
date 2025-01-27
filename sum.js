function sum(a, b) {
  console.log("PRINTING SECRET ===>>>", process.env.SECRET_KEY);
  return a + b;
}
module.exports = sum;
