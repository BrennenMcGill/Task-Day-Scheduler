var ninethHour = 9;
var tenthHour = 10;
var eleventhHour = 11;
var twelthHour = 12;
var thirteenthHour = 13;
var fourteenthHour = 14;
var fifteenthHour = 15;
var sixteenthHour = 16;
var seventeenthHour = 17;
var currentDate = moment();
var currentHour = moment().format("H");
var inputTasks = [
    "9thHour", "10thHour", "11thHour", "12thHour", "13thHour",
    "14thHour", "15thHour","16thHour", "17thHour",
];

console.log(currentHour);
// display the current date
$("#currentDay").text(currentDate.format("MMM DD, YYYY"));


//if time is in past
var timePast = function () {
    for (i = 9; i <= 17; i++) {
        if (parseInt(currentHour) > i) {
            $('#' + i + 'thHour').addClass("past");
        }
    }
};

//if current hour
var timePresent = function () {
    for (i = 9; i <= 17; i++) {
        if (parseInt(currentHour) == i) {
            $('#' + (i - 1) + 'thHour').removeClass('present future').addClass('past');
            $('#' + i + 'thHour').addClass("present").removeClass('past future');
        }
    }
};

//if time is in the future
var timeFuture = function () {
    for (i = 9; i <= 17; i++) {
        if (parseInt(currentHour) < i) {
            $('#' + i + 'thHour').addClass('future');
        }
    }
};

setInterval(function(){
    timePast();
    timePresent();
    timeFuture();
}, 600);

// saving to local storage

$('button.saveBtn').click(function () {
    var id = $(this).parent().children('textarea').attr('id');
    saveTask(id);
})

function saveTask(id) {
    var inputValue = $('#' + id).val();
    localStorage.setItem(id, inputValue);
    displaySavedTasks();
}

function displaySavedTasks() {
$(inputTasks).each(function(id) {
    $('#' + inputTasks[id]).val(localStorage.getItem(inputTasks[id]));
});
}

displaySavedTasks();





