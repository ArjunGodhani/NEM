const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    last_name: String,
    email: String,
    contact_no: Number,
    city: String,
    pincode: Number,
});
module.exports = mongoose.model("listing", dataSchema);