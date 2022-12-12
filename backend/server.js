const express = require("express");
const router = require("./routes/jobRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cors = require("cors");

//creates express app
const app = express();
app.use(express.json());
app.use(cors());

//middleware
app.use((req,res,next) => {
    console.log("req.path", req.method);
    next();
})

app.get("/status", (req, res, next) => {
    res.send("connected");
  });

// for every other request
app.use('/api/jobs', jobRoutes);

// more middleware
app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message;
    console.error(err);
    return res.status(status).json({
        error: { message, status },
    });
});

//listen for requests
app.listen(4000, () => {
    console.log("listening on port 4000")
});

