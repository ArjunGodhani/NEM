const router = require("express").Router();
const Listing = require("../model/Listing");
// Add New listing
router.post("/", async (req, res) => {
    const listing = new Listing({
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        contact_no: req.body.contact_no,
        city: req.body.city,
        pincode:req.body.pincode,
    });
    try {
        const savedListing = await listing.save(); res.send(savedListing);
    } catch (error) {
        res.status(400).send(error);
    }
});
// .Router() handle routing
router.get("/", (req, res) => {
    res.send("All listings");
});
// Single listing
router.get("/:listingId", (req, res) => {
    res.send("Single listing");
});
// Update listing
router.put("/:listingId", (req, res) => {
    res.send("Update listing");
});
// Delete listing
router.delete("/:listingId", (req, res) => {
    res.send("Delete listing");
});
module.exports = router;