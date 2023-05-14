"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount_json_1 = __importDefault(require("./serviceAccount.json"));
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount_json_1.default)
});
const db = (0, firestore_1.getFirestore)();
exports.default = db;
