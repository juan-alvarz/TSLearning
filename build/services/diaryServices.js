"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const data = [
    {
        id: 1,
        date: "2017-01-01",
        weather: "rainy",
        visibility: "poor",
        comment: "Pretty scary flight, I'm glad I'm alive",
    },
    {
        id: 2,
        date: "2017-04-01",
        weather: "sunny",
        visibility: "good",
        comment: "Everything went better than expected, I'm learning much",
    },
    {
        id: 3,
        date: "2017-04-15",
        weather: "windy",
        visibility: "good",
        comment: "I'm getting pretty confident although I hit a flock of birds",
    },
    {
        id: 4,
        date: "2017-05-11",
        weather: "cloudy",
        visibility: "good",
        comment: "I almost failed the landing but I survived",
    },
];
const diaries = data;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaries.find((d) => d.id === id);
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility,
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = () => undefined;
exports.addEntry = addEntry;
