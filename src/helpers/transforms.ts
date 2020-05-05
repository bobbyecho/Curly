export function omitKey(object: any, key: string) {
  delete object[key];
  return object;
}

export function objsToArray(objs: {}) {
  return Object.keys(objs)
    .map((v) => {
      return objs[v];
    })
    .reduce((result, singleObj) => {
      return [...result, singleObj];
    }, []);
}

export function moneyConverter(money: number): string {
  if (money && !isNaN(money)) {
    return `Rp${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }

  throw 'Invalid parameter assign';
}

export function formatDate(resDate: string) {
  resDate = resDate.replace(' ', 'T');
  let d = new Date(resDate);
  let day = d.getDate().toString();
  let month = getMonthName(d.getMonth() + 1);
  let year = d.getFullYear();

  if (day.length < 2) {
    day = '0' + day;
  }

  return [day, month, year].join(' ');
}

function getMonthName(monthNumber: number) {
  switch (monthNumber) {
    case 1:
      return 'Januari';
    case 2:
      return 'Februari';
    case 3:
      return 'Maret';
    case 4:
      return 'April';
    case 5:
      return 'Mei';
    case 6:
      return 'Juni';
    case 7:
      return 'Juli';
    case 8:
      return 'Agustus';
    case 9:
      return 'September';
    case 10:
      return 'Oktober';
    case 11:
      return 'November';
    case 12:
      return 'Desember';
  }
}

export function search(arr: [], q: string) {
  return arr.filter((v) => {
    if (
      v.amount.toString().toLowerCase().includes(q) ||
      v.sender_bank.toString().toLowerCase().includes(q) ||
      v.beneficiary_bank.toString().toLowerCase().includes(q) ||
      v.beneficiary_name.toString().toLowerCase().includes(q)
    ) {
      return v;
    }
  });
}

export function sortByKey(arr: [], alias: string) {
  const split = alias.split(' ');
  const key = split[0];
  const order = split[1];

  return arr.sort(function (a, b) {
    var x = a[key];
    var y = b[key];

    if (order === 'desc') {
      x = b[key];
      y = a[key];
    }

    return x < y ? -1 : x > y ? 1 : 0;
  });
}
