// Ипотечный калькулятор, вычисляющий ежемесячный платеж

estate_input = document.getElementById('estate_input')
estate_range = document.getElementById('estate_range')
contrib_input = document.getElementById('contrib_input')
contrib_range = document.getElementById('contrib_range')
credit_sum = document.getElementById('credit_sum')
percent_range = document.getElementById('percent_range')
percent_input = document.getElementById('percent_input')
years_range = document.getElementById('years_range')
years_input = document.getElementById('years_input')
result = document.getElementById('result')
button = document.getElementById('button')


function get_result() {
    let percent = percent_input.value / 100 / 12
    let month = years_input.value * 12
    let temp = Math.pow(1 + percent, month)
    let answer = credit_sum.innerText * percent * temp / (temp - 1)
    result.innerText = answer.toFixed(2).toString()
}

function check_values() {
    if (estate_input.value <= contrib_input.value) {
        contrib_range.value = estate_range.value;
        contrib_input.value = estate_range.value;
        credit_sum.innerText = (estate_input.value - contrib_input.value).toString()
    }
}

function get_credit_sum() {
    if (estate_input.value - contrib_input.value > 0) {
        credit_sum.innerText = (estate_input.value - contrib_input.value).toString()
    }
    else {
        credit_sum.innerText = '0'
    }
}

function check(range, input) {
    let lim = range.getAttribute('max')
    if (Number(input.value) > lim) {
        input.value = lim
    }
    range.value = input.value
}

contrib_range.setAttribute('max', estate_input.value)
get_credit_sum()
get_result()

estate_input.onchange = function() {
    check_values()
    check(estate_range, estate_input)
    contrib_range.setAttribute('max', estate_input.value);
    get_credit_sum()
}
estate_range.onchange = function() {
    check_values()
    estate_input.value = estate_range.value;
    contrib_range.setAttribute('max', estate_input.value);
    get_credit_sum()
}

contrib_input.onchange = function() {
    check(contrib_range, contrib_input)
    get_credit_sum()
}
contrib_range.onchange = function() {
    contrib_input.value = contrib_range.value;
    get_credit_sum()
}

percent_input.onchange = function() {
    check(percent_range, percent_input)
}
percent_range.onchange = function() {
    percent_input.value = percent_range.value;
}

years_input.onchange = function() {
    check(years_range, years_input)
}
years_range.onchange = function() {
    years_input.value = years_range.value;
}

button.onclick = function() {
    get_result()
}
