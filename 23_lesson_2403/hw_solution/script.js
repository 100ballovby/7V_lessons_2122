let salary = {
    '2001': {
        'fee': 123021,
        'denominated': false,
        'dollar_rate': 1183
    },
    '2002': {
        'fee': 189232,
        'denominated': false,
        'dollar_rate': 1580
    },
    '2003': {
        'fee': 250686,
        'denominated': false,
        'dollar_rate': 1930
    },
    '2004': {
        'fee': 347519,
        'denominated': false,
        'dollar_rate': 2156
    },
    '2005': {
        'fee': 463741,
        'denominated': false,
        'dollar_rate': 2170
    },
    '2006': {
        'fee': 582166,
        'denominated': false,
        'dollar_rate': 2152
    },
    '2007': {
        'fee': 694045,
        'denominated': false,
        'dollar_rate': 2140
    },
    '2008': {
        'fee': 868169,
        'denominated': false,
        'dollar_rate': 2150
    },
    '2009': {
        'fee': 981584,
        'denominated': false,
        'dollar_rate': 3077
    },
    '2010': {
        'fee': 1217313,
        'denominated': false,
        'dollar_rate': 3000
    },
    '2011': {
        'fee': 1899782,
        'denominated': false,
        'dollar_rate': 11340
    },
    '2012': {
        'fee': 3676083,
        'denominated': false,
        'dollar_rate': 8570
    },
    '2013': {
        'fee': 5061000,
        'denominated': false,
        'dollar_rate': 9510
    },
    '2014': {
        'fee': 6052367,
        'denominated': false,
        'dollar_rate': 11850
    },
    '2015': {
        'fee': 6714967,
        'denominated': false,
        'dollar_rate': 19608
    },
    '2016': {
        'fee': 722.7,
        'denominated': true,
        'dollar_rate': 1.952
    },
    '2017': {
        'fee': 822.8,
        'denominated': true,
        'dollar_rate': 1.958
    },
    '2018': {
        'fee': 1125,
        'denominated': true,
        'dollar_rate': 1.972
    },
    '2019': {
        'fee': 1218,
        'denominated': true,
        'dollar_rate': 2.158
    },
    '2020': {
        'fee': 1474,
        'denominated': true,
        'dollar_rate': 2.41
    },
    '2021': {
        'fee': 1675,
        'denominated': true,
        'dollar_rate': 2.57
    },
    '2022': {
        'fee': 1477,
        'denominated': true,
        'dollar_rate': 3.77
    },
}


function fill_table(data) {
    let table = document.querySelector('.table');
    for (let year in data) {
        let tr = document.createElement('tr');
        let salary = data[year]['fee']; // ???????????????? ????????????????
        let fee_dollar = salary / data[year]['dollar_rate']
        if (data[year]['denominated'] === false) {
            salary += (', ????????????????????????????????: ' + salary / 1000)  // ???????????????????????? ???????????????? ?? ?????????? ???????????? ?? ?????????????????? ?? ???? ???? ????????????????????
        }
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerHTML = year;
        td2.innerHTML = salary;
        td3.innerHTML = fee_dollar

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
}

fill_table(salary);
