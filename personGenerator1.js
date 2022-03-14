let femalename = new Array(
    "Анна",
    "Ирина",
    "Варвара",
    "Валентина",
    "Наталья",
    "Елена",
    "София",
    "Екатерина",
    "Алиса",
    "Юлия"
)

let malename = new Array(
    "Александр",
    "Максим",
    "Иван",
    "Артем",
    "Дмитрий",
    "Никита",
    "Михаил",
    "Даниил",
    "Егор",
    "Андрей"
)

let lastname = new Array(
    "Иванов",
    "Смирнов",
    "Кузнецов",
    "Васильев",
    "Петров",
    "Михайлов",
    "Новиков",
    "Федоров",
    "Кравцов",
    "Николаев",
    "Семёнов",
    "Славин",
    "Степанов",
    "Павлов",
    "Александров",
    "Морозов"
)

let mDate = getRandomInt();

function getRandomInt(min, max) {
    min = Math.ceil(1900);
    max = Math.floor(2022);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(mDate);

let r = 0;
let i = 0;
function RandomName(nameform) {
    r = Math.floor(Math.random() * lastname.length);
    if (nameform.gender.options[1].selected == true) {
        i = Math.floor(Math.random() * femalename.length);
        nameform.first.value = femalename[i]
        nameform.last.value = lastname[r] + 'а'
    }
    else {
        i = Math.floor(Math.random() * malename.length);
        nameform.first.value = malename[i]
        nameform.last.value = lastname[r]
    }
}
