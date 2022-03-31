const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const languange = prompt("Bisa bahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName
    },
    languange: languange
};

if (user.languange === "English") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
}

else if (user.languange === "Indonesia") {
    alert("Senang berjumpa dengamu, " + user.name.first + " " + user.name.last + "!");
}

else if (user.languange === "Jawa") {
    alert("Muantap rek " + user.name.first + " " + user.name.last + "!");
}
