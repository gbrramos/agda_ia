"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = require('./routes');
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes);
app.listen(8000, function () {
    console.log('Server started');
});
//# sourceMappingURL=index.js.map