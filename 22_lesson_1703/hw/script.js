let rates = {
    "provider": "https://www.exchangerate-api.com",
    "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
    "terms": "https://www.exchangerate-api.com/terms",
    "base": "USD",
    "date": "2022-03-17",
    "time_last_updated": 1647475202,
    "rates": {
        "USD": 1,
        "AED": 3.67,
        "AFN": 87.31,
        "ALL": 111.97,
        "AMD": 497.78,
        "ANG": 1.79,
        "AOA": 459.92,
        "ARS": 109.22,
        "AUD": 1.38,
        "AWG": 1.79,
        "AZN": 1.7,
        "BAM": 1.78,
        "BBD": 2,
        "BDT": 85.53,
        "BGN": 1.78,
        "BHD": 0.376,
        "BIF": 2026.33,
        "BMD": 1,
        "BND": 1.36,
        "BOB": 6.87,
        "BRL": 5.14,
        "BSD": 1,
        "BTN": 76.15,
        "BWP": 11.65,
        "BYN": 3.13,
        "BZD": 2,
        "CAD": 1.27,
        "CDF": 1995.24,
        "CHF": 0.942,
        "CLP": 811.11,
        "CNY": 6.36,
        "COP": 3847.65,
        "CRC": 641.84,
        "CUP": 24,
        "CVE": 100.24,
        "CZK": 22.46,
        "DJF": 177.72,
        "DKK": 6.78,
        "DOP": 54.8,
        "DZD": 142.85,
        "EGP": 15.7,
        "ERN": 15,
        "ETB": 51.15,
        "EUR": 0.909,
        "FJD": 2.11,
        "FKP": 0.763,
        "FOK": 6.78,
        "GBP": 0.763,
        "GEL": 3.23,
        "GGP": 0.763,
        "GHS": 7.86,
        "GIP": 0.763,
        "GMD": 53.45,
        "GNF": 8937.35,
        "GTQ": 7.69,
        "GYD": 209.09,
        "HKD": 7.82,
        "HNL": 24.55,
        "HRK": 6.85,
        "HTG": 106.34,
        "HUF": 336.91,
        "IDR": 14214.05,
        "ILS": 3.27,
        "IMP": 0.763,
        "INR": 76.15,
        "IQD": 1459.1,
        "IRR": 41969.43,
        "ISK": 131.19,
        "JEP": 0.763,
        "JMD": 152.95,
        "JOD": 0.709,
        "JPY": 118.61,
        "KES": 114.4,
        "KGS": 103.46,
        "KHR": 4038.67,
        "KID": 1.38,
        "KMF": 447.23,
        "KRW": 1229.25,
        "KWD": 0.3,
        "KYD": 0.833,
        "KZT": 509.71,
        "LAK": 12190.93,
        "LBP": 1507.5,
        "LKR": 262.85,
        "LRD": 153.52,
        "LSL": 14.98,
        "LYD": 4.66,
        "MAD": 9.54,
        "MDL": 18.45,
        "MGA": 3291.6,
        "MKD": 56.09,
        "MMK": 1769.43,
        "MNT": 2914.22,
        "MOP": 8.06,
        "MRU": 36.37,
        "MUR": 44.15,
        "MVR": 15.42,
        "MWK": 816.92,
        "MXN": 20.7,
        "MYR": 4.19,
        "MZN": 64.02,
        "NAD": 14.98,
        "NGN": 415.36,
        "NIO": 37.28,
        "NOK": 8.92,
        "NPR": 121.84,
        "NZD": 1.47,
        "OMR": 0.384,
        "PAB": 1,
        "PEN": 3.73,
        "PGK": 3.52,
        "PHP": 52.2,
        "PKR": 179.37,
        "PLN": 4.25,
        "PYG": 6902.13,
        "QAR": 3.64,
        "RON": 4.49,
        "RSD": 106.99,
        "RUB": 104.53,
        "RWF": 1039.93,
        "SAR": 3.75,
        "SBD": 7.91,
        "SCR": 14.51,
        "SDG": 445.59,
        "SEK": 9.47,
        "SGD": 1.36,
        "SHP": 0.763,
        "SLL": 11633.13,
        "SOS": 578.43,
        "SRD": 20.61,
        "SSP": 430.05,
        "STN": 22.27,
        "SYP": 2515.29,
        "SZL": 14.98,
        "THB": 33.41,
        "TJS": 12.35,
        "TMT": 3.5,
        "TND": 2.82,
        "TOP": 2.23,
        "TRY": 14.65,
        "TTD": 6.77,
        "TVD": 1.38,
        "TWD": 28.4,
        "TZS": 2317.82,
        "UAH": 30.4,
        "UGX": 3585.73,
        "UYU": 42.64,
        "UZS": 10904.09,
        "VES": 4.27,
        "VND": 22867.09,
        "VUV": 113.47,
        "WST": 2.57,
        "XAF": 596.3,
        "XCD": 2.7,
        "XDR": 0.725,
        "XOF": 596.3,
        "XPF": 108.48,
        "YER": 250.12,
        "ZAR": 14.98,
        "ZMW": 17.74,
        "ZWL": 134.15
    }
}

function fill_table(data) {
    let table = document.querySelector('table');  // нахожу таблицу, которую буду наполнять
    for (let rate in data['rates']) {  // для каждой валюты
        let tr = document.createElement('tr');  //  создаю строку таблицы
        let code = document.createElement('td');
        let d_rate = document.createElement('td');

        code.innerHTML = rate;  // вписываю код валюты в ячейку
        d_rate.innerHTML = data['rates'][rate];  // вписываю курс валюты в ячейку

        tr.appendChild(code);  // добавляю ячейку с кодом валюты в строку таблицы
        tr.appendChild(d_rate); // добавляю ячейку с курсом валюты в строку таблицы
        table.appendChild(tr);  // добавляю строку в таблицу
    }
}

fill_table(rates)