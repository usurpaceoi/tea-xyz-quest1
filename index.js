// index.js

const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm nhập vào số và in ra từ 0 đến số đó
function printNumbersUpTo(inputNumber) {
  for (let i = 0; i <= inputNumber; i++) {
    console.log(i);
  }
}

// Nhập số từ người dùng
rl.question('Nhập vào một số: ', (input) => {
  const userInput = parseInt(input);

  // Kiểm tra xem đầu vào có phải là số hợp lệ hay không
  if (!isNaN(userInput)) {
    console.log(`Các số từ 0 đến ${userInput}:`);
    printNumbersUpTo(userInput);
  } else {
    console.log('Vui lòng nhập một số hợp lệ.');
  }

  // Đóng interface đọc dữ liệu
  rl.close();
});
