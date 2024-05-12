// Массив для хранения транзакций
let transactions = [];

// Функция добавления транзакции
function addTransaction(event) {
    event.preventDefault(); // Предотвращаем отправку формы и перезагрузку страницы

    // Получаем значения из формы
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const date = new Date().toLocaleString(); // Используем текущую дату и время

    // Создаем объект транзакции
    const transaction = {
        id: generateId(),
        date,
        amount,
        category,
        description
    };

    // Добавляем транзакцию в массив
    transactions.push(transaction);

    // Отображаем транзакцию в таблице
    displayTransaction(transaction);

    // Пересчитываем общую сумму
    calculateTotal();

    // Очищаем поля формы после добавления транзакции
    document.getElementById('amount').value = '';
    document.getElementById('category').value = 'food';
    document.getElementById('description').value = '';
}

// Функция генерации уникального ID для транзакции
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Функция отображения транзакции в таблице
function displayTransaction(transaction) {
    const tableBody = document.querySelector('#transactionTable tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.date}</td>
        <td>${transaction.category}</td>
        <td>${transaction.description.split(' ').slice(0, 4).join(' ')}</td>
         <td><button onclick="deleteTransaction('${transaction.id}')">Удалить</button></td>
    `;

    // Определяем цвет строки в зависимости от суммы
    if (transaction.amount >= 0) {
        row.style.backgroundColor = 'lightgreen';
    } else {
        row.style.backgroundColor = 'salmon';
    }

    tableBody.appendChild(row);
}

// Функция удаления транзакции
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    renderTransactions();
    calculateTotal();
}

// Функция отображения всех транзакций
function renderTransactions() {
    const tableBody = document.querySelector('#transactionTable tbody');
    tableBody.innerHTML = '';

    transactions.forEach(transaction => {
        displayTransaction(transaction);
    });
}

// Функция подсчета общей суммы транзакций
function calculateTotal() {
    const totalAmount = transactions.reduce((total, transaction) => {
        return total + transaction.amount;
    }, 0);

    document.getElementById('totalAmount').textContent = `Общая сумма: ${totalAmount}`;
}

// Обработчик события отправки формы
document.getElementById('transactionForm').addEventListener('submit', addTransaction);

// Инициализация при загрузке страницы
renderTransactions();
calculateTotal();
