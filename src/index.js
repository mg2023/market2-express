const express = require("express");
const v1ProductsRouter = require("./v1/routes/productRoutes");
const app = express();
const PORT = process.env.PORT || 3000;


//usar JOI o express validator para comprobar los datos

app.use(express.json());
app.use("/api/v1/products", v1ProductsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
