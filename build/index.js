"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const diaries_1 = __importDefault(require("./routes/diaries"));
/* MINUTE = 27:36 */
const PORT = 3001;
app.use("/api/diaries", diaries_1.default);
app.get("/ping", (_req, res) => {
    console.log(`Today is ${new Date().toLocaleDateString()}`);
    res.send("pong");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
