import express from "express";
import {
  getOngoingAnime,
  getFinishedAnime,
  getMovieAnime,
  getSearchAnime,
  getDetailAnime,
  getEpisodeAnime,
} from "../controllers/animeController.js";
import {
  getMangaKomik,
  getManhwaKomik,
  getManhuaKomik,
  getSearchKomik,
  getDetailKomik,
  getChapterKomik,
} from "../controllers/komikController.js";

const router = express.Router();

router.get("/anime/ongoing", getOngoingAnime);
router.get("/anime/finished", getFinishedAnime);
router.get("/anime/movie", getMovieAnime);
router.get("/anime/search", getSearchAnime);
router.get("/anime/:number/:id", getDetailAnime);
router.get("/anime/:number/:id/episode/:episode", getEpisodeAnime);
router.get("/komik/manga", getMangaKomik);
router.get("/komik/manhwa", getManhwaKomik);
router.get("/komik/manhua", getManhuaKomik);
router.get("/komik/search", getSearchKomik);
router.get("/komik/:id", getDetailKomik);
router.get("/komik/chapter/:id", getChapterKomik);

export default router;
