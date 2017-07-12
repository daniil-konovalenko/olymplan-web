const data = {
    contests: [
        {
            Name: "Турнир Городов",
            Level: 0,
            Subject: "Math",
            USE: " ",
            Bonus: " ",
            Grades: [],
            Stages: ["Турнир Городов первый день", "Турнир Городов второй день"]

        },
        {
            Name: "Московская математическая олимпиада ",
            Level: 1,
            Subject: "Math",
            USE: "Math",
            Bonus: " ",
            Grades: [8, 9, 10, 11],
            Stages: ["ММО день 1", "ММО день 2"]
        },
    ],
    stages: [
        {
            "Name": "Турнир Городов первый день",
            "Place": "",
            "Date": "08.10.2017",
            "Type": "Письменный",
            "Form": "Очная",
        },
        {
            "Name": "Турнир Городов второй день",
            "Place": "",
            "Date": "22.10.2017",
            "Type": "Письменный",
            "Form": "Очная",
        }
    ]
};

module.exports = data;
