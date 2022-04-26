import { Router } from "express";
const router = Router();

router.get("/api/fetchUser", (req, res) => {
    res.send({ data: req.session.username})
});

router.get("/api/logout", (req,res) => {
    req.session.destroy(() => {
        res.send({ data: "You just logged out" })
    })
    
})

router.post("/api/registerUser", (req, res) => {
    const user = req.body
    req.session.username = user.username;
    res.redirect("/")
});

export default router;