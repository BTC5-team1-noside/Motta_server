const { setUpServer } = require("./server");
const app = setUpServer();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Root server:", `http://localhost:${PORT}`);
});
