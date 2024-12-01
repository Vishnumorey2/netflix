import express from "express";
import { searchPerson, searchMovie, searchTv } from "../Controller/search.controller.js";

const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

//router.get("/history",getSearchHistory);
//router.get("/history/:id",removeItemfromSeachHistory)

export default router;
