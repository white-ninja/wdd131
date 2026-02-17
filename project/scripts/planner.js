// ================================
// DOM ELEMENTS
// ================================

const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const typeSelect = document.querySelector("#type");
const addBtn = document.querySelector("#add-transaction");
const list = document.querySelector("#transaction-list");

const incomeDisplay = document.querySelector("#total-income");
const expenseDisplay = document.querySelector("#total-expense");
const balanceDisplay = document.querySelector("#balance");

// ================================
// TRANSACTION DATA & STORAGE
// ================================

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// ================================
// CALCULATE TOTALS
// ================================

function calculateTotals() {
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    incomeDisplay.textContent = income.toFixed(2);
    expenseDisplay.textContent = expense.toFixed(2);
    balanceDisplay.textContent = (income - expense).toFixed(2);
}

// ================================
// RENDER TRANSACTIONS
// ================================

function renderTransactions() {
    list.innerHTML = "";

    if (transactions.length === 0) {
        list.innerHTML = "<li style='text-align: center; padding: 2rem; color: #999;'>No transactions yet. Add one to get started!</li>";
        calculateTotals();
        return;
    }

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.classList.add(transaction.type === "income" ? "income" : "expense");
        li.dataset.index = index;

        li.innerHTML = `
            <span>${transaction.description}</span>
            <span>$${transaction.amount.toFixed(2)}</span>
        `;

        li.addEventListener("click", () => {
            transactions.splice(index, 1);
            saveTransactions();
            renderTransactions();
        });

        list.appendChild(li);
    });

    calculateTotals();
}

// ================================
// ADD TRANSACTION
// ================================

if (addBtn) {
    addBtn.addEventListener("click", () => {
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const type = typeSelect.value;

        // Validation
        if (!description || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid description and positive amount.");
            return;
        }

        // Add transaction
        const newTransaction = {
            description: description,
            amount: amount,
            type: type,
            date: new Date().toLocaleDateString()
        };

        transactions.push(newTransaction);
        saveTransactions();
        renderTransactions();

        // Clear inputs
        descriptionInput.value = "";
        amountInput.value = "";
        typeSelect.value = "expense";
        descriptionInput.focus();
    });

    // Allow Enter key to add transaction
    descriptionInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addBtn.click();
        }
    });
}

// ================================
// INITIALIZE
// ================================

renderTransactions();
