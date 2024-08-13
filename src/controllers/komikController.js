import request from "request";
import * as cheerio from "cheerio";
import baseUrl from "../utils/baseUrl.js";

const baseURL = baseUrl.komik;

export const getMangaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manga&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getManhwaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manhwa&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getManhuaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manhua&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getSearchKomik = (req, res) => {
  const page = req.query.page || 1;
  const query = req.query.query;

  request(`${baseURL}/page/${page}/?s=${query}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);
    const data = [];

    const prevPage = $(".l").length > 0 || $(".prev").length > 0;
    const nextPage = $(".r").length > 0 || $(".next").length > 0;

    $(".listupd .bs").each((i, e) => {
      const title = $(e).find("a").attr("title");
      const image = $(e).find("img").attr("src");
      const chapter = $(e).find(".epxs").text().trim();
      const score = $(e).find(".numscore").text();
      const type = $(e).find("span.type").attr("class").split(" ").pop();
      const id = $(e).find("a").attr("href").split("/")[4];

      data.push({
        title,
        image,
        chapter,
        score,
        type,
        id,
      });
    });
    res.json({
      data,
      prevPage,
      nextPage,
    });
  });
};

export const getDetailKomik = (req, res) => {
  const id = req.params.id;

  request(`${baseURL}/manga/${id}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);

    const title = $(".entry-title").text();
    const alternativeTitle = $(".seriestualt").text().trim();
    const image = $(".thumb img").attr("src");
    const score = $(".num").text();
    const synopsis = $(".entry-content").text().trim();
    const status = $(".infotable tr:contains('Status')")
      .text()
      .replace("Status", "")
      .trim();
    const type = $(".infotable tr:contains('Type')")
      .text()
      .replace("Type", "")
      .trim();
    const released = $(".infotable tr:contains('Released')")
      .text()
      .replace("Released", "")
      .trim();
    const author = $(".infotable tr:contains('Author')")
      .text()
      .replace("Author", "")
      .trim();
    const artist = $(".infotable tr:contains('Artist')")
      .text()
      .replace("Artist", "")
      .trim();
    const serialization = $(".infotable tr:contains('Serialization')")
      .text()
      .replace("Serialization", "")
      .trim();
    const postedBy = $(".infotable tr:contains('Posted By')")
      .text()
      .replace("Posted By", "")
      .trim();
    const postedOn = $(".infotable tr:contains('Posted On')")
      .text()
      .replace("Posted On", "")
      .trim();
    const updatedOn = $(".infotable tr:contains('Updated On')")
      .text()
      .replace("Updated On", "")
      .trim();
    const genres = $(".seriestugenre a")
      .map((i, e) => $(e).text())
      .get();
    const chapterList = $("#chapterlist ul li")
      .map((i, e) => ({
        id: $(e).find("a").attr("href")?.split("/")[3],
        chapter: $(e).find(".chapternum").text(),
        date: $(e).find(".chapterdate").text(),
      }))
      .get();

    res.json({
      title,
      alternativeTitle,
      image,
      score,
      synopsis,
      status,
      type,
      released,
      author,
      artist,
      serialization,
      postedBy,
      postedOn,
      updatedOn,
      genres,
      chapterList,
    });
  });
};

export const getChapterKomik = (req, res) => {
  const id = req.params.id;

  request(`${baseURL}/${id}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);

    const script = $("script:contains('ts_reader.run')").html();
    const data = JSON.parse(script.match(/ts_reader\.run\((\{.*?\})\);/)[1]);

    const title = $(".entry-title").text();
    const komikId = $(".allc a").attr("href").split("/")[4];
    const prevChapter = data.prevUrl.split("/")[3];
    const nextChapter = data.nextUrl.split("/")[3];
    const downloadUrl = $(".dlx a").attr("href");
    const images = data.sources[0].images;

    res.json({
      title,
      komikId,
      prevChapter,
      nextChapter,
      downloadUrl,
      images,
    });
  });
};
