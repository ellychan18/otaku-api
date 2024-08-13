import request from "request";
import * as cheerio from "cheerio";
import baseUrl from "../utils/baseUrl.js";
import { extractData } from "../utils/extractData.js";

const baseURL = baseUrl.anime;

export const getOngoingAnime = (req, res) => {
  const page = req.query.page || 1;
  const order_by = req.query.order_by || "updated";

  request(
    `${baseURL}/quick/ongoing?order_by=${order_by}&page=${page}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      let data = [];

      const prevPage =
        $("a.gray__color .fa-angle-left").length > 0 ? false : true;
      const nextPage =
        $("a.gray__color .fa-angle-right").length > 0 ? false : true;

      $("#animeList > div > div").each((i, e) => {
        const title = $(e).find("div > h5").text().trim();
        const image = $(e).find("a > div").attr("data-setbg");
        const episode = $(e).find("a > div > div.ep > span").text().trim();
        const id = $(e)
          .find("div > a")
          .attr("href")
          ?.replace(baseURL, "")
          .trim();
        const type = $(e)
          .find("div > ul > a")
          .map((i, e) => $(e).text().trim())
          .get();

        if (title && image && episode && id && type.length > 0) {
          data.push({
            title,
            image,
            episode,
            id,
            type,
          });
        }
      });

      res.json({ data, prevPage, nextPage });
    }
  );
};

export const getFinishedAnime = (req, res) => {
  const page = req.query.page || 1;
  const order_by = req.query.order_by || "updated";

  request(
    `${baseURL}/quick/finished?order_by=${order_by}&page=${page}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      let data = [];

      const prevPage =
        $("a.gray__color .fa-angle-left").length > 0 ? false : true;
      const nextPage =
        $("a.gray__color .fa-angle-right").length > 0 ? false : true;

      $("#animeList > div > div").each((i, e) => {
        const title = $(e).find("div > h5").text().trim();
        const image = $(e).find("a > div").attr("data-setbg");
        const score = $(e).find("a > div > div.ep > span").text().trim();
        const id = $(e)
          .find("div > a")
          .attr("href")
          ?.replace(baseURL, "")
          .trim();
        const type = $(e)
          .find("div > ul > a")
          .map((i, e) => $(e).text().trim())
          .get();

        if (title && image && score && id && type.length > 0) {
          data.push({
            title,
            image,
            score,
            id,
            type,
          });
        }
      });

      res.json({ data, prevPage, nextPage });
    }
  );
};

export const getMovieAnime = (req, res) => {
  const page = req.query.page || 1;
  const order_by = req.query.order_by || "updated";

  request(
    `${baseURL}/quick/movie?order_by=${order_by}&page=${page}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      let data = [];

      const prevPage =
        $("a.gray__color .fa-angle-left").length > 0 ? false : true;
      const nextPage =
        $("a.gray__color .fa-angle-right").length > 0 ? false : true;

      $("#animeList > div > div").each((i, e) => {
        const title = $(e).find("div > h5").text().trim();
        const image = $(e).find("a > div").attr("data-setbg");
        const score = $(e).find("a > div > div.ep > span").text().trim();
        const id = $(e)
          .find("div > a")
          .attr("href")
          ?.replace(baseURL, "")
          .trim();
        const type = $(e)
          .find("div > ul > a")
          .map((i, e) => $(e).text().trim())
          .get();

        if (title && image && score && id && type.length > 0) {
          data.push({
            title,
            image,
            score,
            id,
            type,
          });
        }
      });

      res.json({ data, prevPage, nextPage });
    }
  );
};

export const getSearchAnime = (req, res) => {
  const page = req.query.page || 1;
  const order_by = req.query.order_by || "updated";
  const query = req.query.query;

  request(
    `${baseURL}/anime?order_by=${order_by}&search=${query}&page=${page}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      let data = [];

      let prevPage =
        $("a.gray__color .fa-angle-left").length > 0 ? false : true;
      if (!$(".product__pagination").length) {
        prevPage = false;
      }

      let nextPage =
        $("a.gray__color .fa-angle-right").length > 0 ? false : true;
      if (!$(".product__pagination").length) {
        nextPage = false;
      }

      $("#animeList > div > div").each((i, e) => {
        const title = $(e).find("div > h5").text().trim();
        const image = $(e).find("a > div").attr("data-setbg");
        const score = $(e).find("a > div > div.ep > span").text().trim();
        const id = $(e)
          .find("div > a")
          .attr("href")
          ?.replace(baseURL, "")
          .trim();
        const type = $(e)
          .find("div > ul > a")
          .map((i, e) => $(e).text().trim())
          .get();

        if (title && image && score && id && type.length > 0) {
          data.push({
            title,
            image,
            score,
            id,
            type,
          });
        }
      });

      res.json({ data, prevPage, nextPage });
    }
  );
};

export const getDetailAnime = (req, res) => {
  const { number, id } = req.params;
  let page = 1;
  const allEpisodes = new Map();

  const details = {
    title: "",
    alternativeTitle: "",
    image: "",
    synopsis: "",
    type: "",
    totalEpisodes: "",
    status: "",
    release: "",
    season: "",
    duration: "",
    quality: "",
    country: "",
    adaptation: "",
    genres: [],
    eksplisit: "",
    demographic: "",
    theme: "",
    studio: "",
    score: "",
    enthusiast: "",
    ratings: "",
    credit: "",
  };

  function fetchPage(page) {
    return new Promise((resolve, reject) => {
      request(
        `${baseURL}/anime/${number}/${id}?page=${page}`,
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return reject(error || new Error("Failed to fetch data"));
          }

          const $ = cheerio.load(body);

          details.title = $(".anime__details__title h3").text().trim();
          details.alternativeTitle = $(".anime__details__title span")
            .text()
            .trim();
          details.image = $(".anime__details__pic").attr("data-setbg");
          details.synopsis = $("#synopsisField")
            .html()
            .replace(/(<br\s*\/?>|<\/?i>)+/gi, " ")
            .trim();
          details.type = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(1) > div > div > a"
          )
            .text()
            .trim();
          details.totalEpisodes = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(2) > div > div > a"
          )
            .text()
            .trim();
          details.status = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(3) > div > div > a"
          )
            .text()
            .trim();
          details.release = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(4) > div > div > a"
          )
            .text()
            .trim();
          details.season = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(5) > div > div > a"
          )
            .text()
            .trim();
          details.duration = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(6) > div > div > a"
          )
            .text()
            .trim();
          details.quality = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(7) > div > div > a"
          )
            .text()
            .trim();
          details.country = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(8) > div > div > a"
          )
            .text()
            .trim();
          details.adaptation = $(
            ".anime__details__widget > div > div:nth-child(1) > ul > li:nth-child(9) > div > div > a"
          )
            .text()
            .trim();
          details.genres = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(1) > div > div > a"
          )
            .map((i, e) => $(e).text().replace(/,/g, "").trim())
            .get();
          details.eksplisit = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(2) > div > div > a"
          )
            .text()
            .trim();
          details.demographic = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(3) > div > div > a"
          )
            .text()
            .trim();
          details.theme = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(4) > div > div > a"
          )
            .text()
            .trim();
          details.studio = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(5) > div > div > a"
          )
            .text()
            .trim();
          details.score = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(6) > div > div > a"
          )
            .text()
            .trim();
          details.enthusiast = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(7) > div > div > a"
          )
            .text()
            .trim();
          details.ratings = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(8) > div > div > a"
          )
            .text()
            .trim();
          details.credit = $(
            ".anime__details__widget > div > div:nth-child(2) > ul > li:nth-child(9) > div > div > a"
          )
            .text()
            .replace("\n\n", " ")
            .trim();
          const episodeContent = $("#episodeLists").attr("data-content");
          const $$ = cheerio.load(episodeContent);

          $$("a").each((i, e) => {
            const episodeId = $$(e).attr("href").replace(baseURL, "").trim();
            const episode = $$(e).text().trim();
            if (episodeId && episode) {
              allEpisodes.set(`${episodeId}_${episode}`, {
                id: episodeId,
                episode,
              });
            }
          });

          const nextPageMatch = $$("a.page__link__episode i.fa-forward")
            .parent()
            .attr("href")
            ?.match(/page=(\d+)/);
          page = nextPageMatch ? nextPageMatch[1] : null;

          if (page) {
            fetchPage(page).then(resolve).catch(reject);
          } else {
            resolve();
          }
        }
      );
    });
  }

  fetchPage(page)
    .then(() => {
      res.json({
        ...details,
        episodeList: Array.from(allEpisodes.values()),
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    });
};

export const getEpisodeAnime = (req, res) => {
  const { number, id, episode } = req.params;
  const servers = ["kuramadrive", "archive", "archive-v2"];
  const promises = servers.map((server) => {
    return new Promise((resolve, reject) => {
      request(
        `${baseURL}/anime/${number}/${id}/episode/${episode}`,
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return reject(new Error("Failed to fetch episode data"));
          }

          const getKps = cheerio.load(body);
          const kps = getKps("div.mt-3:nth-child(2)").attr("data-kps");

          request(`${baseURL}/assets/js/${kps}.js`, (error, response, body) => {
            if (error || response.statusCode !== 200) {
              return reject(new Error("Failed to fetch JS data"));
            }

            const getData = extractData(body);

            if (!getData) {
              return reject(new Error("Failed to extract data from JS"));
            }

            request(
              `${baseURL}/assets/${getData.MIX_AUTH_ROUTE_PARAM}`,
              (error, response, body) => {
                if (error || response.statusCode !== 200) {
                  return reject(new Error("Failed to fetch auth data"));
                }

                const auth = body.trim();

                request(
                  `${baseURL}/anime/${number}/${id}/episode/${episode}?${getData.MIX_PAGE_TOKEN_KEY}=${auth}&${getData.MIX_STREAM_SERVER_KEY}=${server}`,
                  (error, response, body) => {
                    if (error || response.statusCode !== 200) {
                      return reject(new Error("Failed to fetch video data"));
                    }

                    const $ = cheerio.load(body);
                    const title = $("#episodeTitle").text().trim();
                    const id = $(".center__nav")
                      .attr("href")
                      .replace(baseURL, "");
                    const prevEpisode = $(".before__nav.ep-button")
                      .attr("href")
                      ?.replace(baseURL, "");
                    const nextEpisode = $(".after__nav.ep-button")
                      .attr("href")
                      ?.replace(baseURL, "");
                    const videoList = $("#player > source")
                      .map((i, e) => ({
                        url: $(e).attr("src"),
                        type: $(e).attr("type"),
                        size: `${$(e).attr("size")}p (${server})`,
                      }))
                      .get();

                    resolve({ title, id, prevEpisode, nextEpisode, videoList });
                  }
                );
              }
            );
          });
        }
      );
    });
  });

  Promise.all(promises)
    .then((results) => {
      const combinedVideoList = results.flatMap((result) => result.videoList);
      const title = results[0].title;
      const id = results[0].id;
      const prevEpisode = results[0].prevEpisode;
      const nextEpisode = results[0].nextEpisode;
      res.json({
        title,
        id,
        prevEpisode,
        nextEpisode,
        videoList: combinedVideoList,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    });
};
