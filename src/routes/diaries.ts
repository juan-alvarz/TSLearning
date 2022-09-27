import express from "express"; //ESModules
// const express = require('express'); commonjs
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  /* const diary = diaryServices.findById(+req.params.id); //pass id to number
  return diary !== null
    ? res.send(diary)
    : res.status(404).send("id inexistent"); */
  try {
    const diary = diaryServices.findById(+req.params.id);
    diary !== null ? console.log(diary) : null;
    return diary !== null
      ? res.status(200).send(diary)
      : res.status(404).send("inexistene");
  } catch (error) {
    console.log(error);
  }
  return undefined;
});

router.post("/", (req, res) => {
  const { date, weather, visibility, comment } = req.body;
  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment,
  });

  res.json(newDiaryEntry);
});

export default router;
