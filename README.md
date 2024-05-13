# JS_individual_work_3_DOM

Взаимодействия JS с DOM-деревом на основе веб-приложения для учета личных финансов.

JS interaction with a DOM-tree based web application for personal finance accounting.

## 1.Инструкции по запуску проекта

1. Убедитесь, что у вас есть подключение к интернету.

2. Клонируйте репозиторий проекта.
   
```  
git clone https://github.com/zabudico/JS_individual_work_2_Asynchronous_JS.git
```

3. Перейдите в каталог проекта.
```
cd IndivWork3JS
```

4. Откройте страницу `index.html` в браузере.
   
   Перейдите по ссылке `http://localhost:3000` в вашем браузере.

   * У меня это `http://127.0.0.1:5500/`, так как я испольузую Live Server. У вас может отличаться , в зависимости от сервера, который вы используете для тестирования приложения.

## 2.Описание лабораторной работы

Цель: Ознакомить студентов с основами взаимодействия JS с DOM-деревом на основе веб-приложения для учета личных финансов.

Задача: Разработать мини-приложение, которое будет реализовывать дабавление/удаление записей о транзакциях (тратах) на категории (различные цели : еда, транспорт, шопинг, другое)

Условия работы - https://github.com/MSU-Courses/javascript_typescript/blob/main/lab/LI3/JS03.md

## 3.Краткая документация к проекту

   `index.html` - Этот файл содержит разметку основной страницы проекта "Учет личных финансов".
Включает форму для добавления новых транзакций, таблицу для отображения существующих транзакций и общую сумму всех транзакций.
Использует CSS стили из файла style.css и JavaScript из файла script.js.

   `style.css` - Содержит стили для элементов на странице "Учет личных финансов".
Определяет внешний вид таблицы, формы, кнопок и других элементов интерфейса.

  `script.js` - Определяет логику работы с транзакциями.
Включает функции для добавления, удаления, отображения транзакций и вычисления общей суммы.
Использует события DOM для обработки формы и обновления таблицы с транзакциями.

### Описание функций в `script.js`

`addTransaction(event)`

Обработчик события для добавления новой транзакции из формы.
Извлекает значения полей формы, создает объект транзакции и добавляет его в массив транзакций.
Обновляет таблицу с транзакциями и общую сумму.

`generateId()`

Генерирует уникальный идентификатор для транзакции.

`displayTransaction(transaction)`

Отображает переданную транзакцию в виде строки в таблице.
Раскрашивает строки таблицы в зависимости от значения суммы транзакции.

`deleteTransaction(id)`

Удаляет транзакцию из массива по её идентификатору.
Перерисовывает таблицу с транзакциями и пересчитывает общую сумму.

`renderTransactions()`

Перерисовывает все транзакции в таблице.

`calculateTotal()`

Вычисляет общую сумму всех транзакций и отображает её на странице.

## 4.Примеры использования проекта

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/720cc227-5e28-49ee-8aed-a72091425e5e)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/294db36b-136a-4c0c-9fe9-624d37c547f4)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/b01bb7a4-f5e9-4c30-818d-77e5f64e0271)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/7d46455b-4b4b-4045-a997-5db41795229d)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/1b6ffa90-9995-45fa-81c7-367c6e891010)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/cbe97121-fc91-48a2-a53e-84482536b55f)

![image](https://github.com/zabudico/JS_individual_work_3_DOM/assets/112975702/b7bffec3-3307-4c64-b2c3-c4b481b5e9c6)

## 5.Ответы на контрольные вопросы

1. Какое значение возвращает функция fetch?

      Функция `fetch` возвращает объект `Promise`, который представляет собой асинхронную операцию.

2. Что представляет собой Promise?
 
      `Promise` - это объект JavaScript, который представляет собой асинхронную операцию с неизвестным результатом в данный момент.

3. Какие методы доступны у объекта Promise?

      `then(onFulfilled, onRejected)` : позволяет указать функции, которые будут вызваны при успешном `(onFulfilled)` или неудачном `(onRejected)` завершении асинхронной операции.
      `catch(onError)` : позволяет указать функцию, которая будет вызвана при возникновении ошибки во время асинхронной операции.

4. Каковы основные различия между использованием `async` / `await` и `Promise`?

      `async/await` - это более лаконичный и читаемый синтаксис для работы с `Promise`.
      `Promise` - более низкоуровневый подход, требующий больше кода для обработки асинхронных операций.

## 6.Использованные источники

   Документация Node.js: https://nodejs.org/docs/

   MDN Web Docs: https://developer.mozilla.org/en-US/

## 7.Дополнительные важные аспекты

   * Семантическая разметка: Использование семантической разметки HTML5 (например, элементов header, nav, main, article, section, footer) улучшит доступность приложения для пользователей с ограниченными                возможностями.

   * Атрибуты ARIA: Добавление атрибутов ARIA к элементам HTML позволит вспомогательным технологиям (например, экранным ридерам) правильно интерпретировать содержимое страницы.

   * Контрастность: Обеспечение достаточной контрастности между текстом и фоном позволит сделать текст читаемым для людей с нарушениями зрения.
