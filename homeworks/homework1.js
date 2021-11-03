/*JavaScript ile istediğiniz kadar sayı parametre 
gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak 
asal olup olmadığını yazınız.*/

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 2; j < numbers[i]; j++)
      if (numbers[i] % j == 0) {
        count += 1;
      }
    if (numbers[i] == 1) {
      count += 1;
    }
    if (count > 0) {
      console.log(numbers[i] + " not prime number");
    } else {
      console.log(numbers[i] + " prime number");
    }
  }
}

findPrime(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

/*2- Parametre olarak girilen iki sayının 
    arkadaş sayılar olup olmadığını bulan 
    programı yazınız.*/
function findNumberOfFriends(number1, number2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
        sum1 += i;
    }
  }

  for (let j = 1; j < number2; j++) {
    if (number2 % j == 0) {
        sum2 += j;
    }
  }

  if (sum1 == number2 && sum2 == number1) {
    console.log("friend number");
  } else {
    console.log("not friend number");
  }
}
findNumberOfFriends(220, 284);

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumberThousand(number = 1000) {
  for (let i = 1; i < number; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        count += j;
      }
    }
    if (count == i) {
      console.log(i);
    }
  }
}
perfectNumberThousand();

// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeThousand(number = 1000) {
  for (let i = 1; i < number; i++) {
    let count = 0;
    for (let j = 2; j < i; j++)
      if (i % j == 0) {
        count += 1;
      }

    if (count < 1) {
      console.log(i);
    }
  }
}

findPrimeThousand();
