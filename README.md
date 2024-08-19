# Аналіз коду

## Task 1: Інтерактивний робочий стіл

### 1. Бібліотеки та ресурси

* **React:** Основна бібліотека для побудови інтерфейсу.
* **react-draggable:** Бібліотека для створення переміщуваних елементів.
* **react-resizable:** Бібліотека для створення елементів, що змінюють розмір.
* **react-resizable/css/styles.css:** CSS для `react-resizable`.

### 2. Обґрунтування використаних алгоритмів та структур даних

* **`useState` та `useEffect`:**
  * Використовуються для управління станом компонентів та їх життєвим циклом.
  * `useState` дозволяє зберігати локальний стан (наприклад, блоки).
  * `useEffect` дозволяє виконувати побічні ефекти, такі як збереження даних у localStorage або очищення WebSocket при демонтажі компонента.

* **Масиви та об’єкти:**
  * **`blocks`**: Масив об’єктів, що представляють блоки з параметрами (ширина, висота, позиція, колір фону, zIndex).
  * **Функції для оновлення стану:**
    * **`handleResize`**: Оновлює розмір блоку.
    * **`handleStop`**: Оновлює позицію блоку після переміщення.
    * **`handleDelete`**: Видаляє блок з масиву.
    * **`handleBringToFront`**: Змінює `zIndex`, щоб блок був на передньому плані.

### 3. Стилі

* **CSS Файли:**
  * **`Task1.css`**: Включає стилі для компонента Task1.
  * **`react-resizable/css/styles.css`**: Необхідний для коректного відображення компонентів `ResizableBox`.

## Task 2: Взаємодія із сервером за протоколом websocket

### 1. Бібліотеки та ресурси

* **React:** Основна бібліотека для побудови інтерфейсу.

### 2. Обґрунтування використаних алгоритмів та структур даних

* **`useState` та `useEffect`:**
  * Використовуються для управління станом компонентів і виконання побічних ефектів.
  * `useState` дозволяє зберігати локальний стан транзакцій та загальної суми.
  * `useEffect` для очищення WebSocket при демонтажі компонента.

* **WebSocket:**
  * Використовується для підписки на нові непідтверджені біткоін-транзакції в реальному часі.
  * Функції:
    * **`handleStart`**: Створює нове WebSocket з’єднання та підписується на транзакції.
    * **`handleStop`**: Відключає WebSocket з’єднання.
    * **`handleReset`**: Очищає список транзакцій і загальну суму.

### 3. Стилі

* **CSS Файли:**
  * **`Task2.css`**: Включає стилі для компонента Task2.
