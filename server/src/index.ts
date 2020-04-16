const express = require("express")

const app = express();

app.get("/", (req: any, res: any, next: any) => {
    res.json(["test"]);
});

app.listen(3001, () => {
    console.log('server  is listening on port 3000')
})

//test