"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('AgentClinic is open for business');
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`AgentClinic server is running on http://localhost:${port}`);
    });
}
exports.default = app;
