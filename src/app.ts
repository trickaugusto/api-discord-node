import express from "express";
import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
routes(app);

export default app;
