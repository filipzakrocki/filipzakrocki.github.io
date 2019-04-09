//iife
// BUDGET CONTROLLER}
let budgetController = (function () {
    
    
    //Expense Class and associated Methods
    class Expense {
        constructor (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
        }
        
        calcPercentage(totalIncome) {
            if (totalIncome > 0) {
                this.percentage = Math.round(this.value / totalIncome * 100);
            } else {
                this.percentage = -1;
            }
        }
        
        getPercentage() {
            return this.percentage;
        }
    }
    
    //Income Class and associated Methods
    class Income {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
        
    }
    
    const calculateTotal = (type) => {
            let sum = 0;
            data.allItems[type].forEach(cur => {
                sum += cur.value;
            });
            data.totals[type] = sum;
    }
    
        
    //Storage Objects
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    
    return {
        
        //returned functions
        
        addItem(type, des, val) {
            let newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }
            
            data.allItems[type].push(newItem);
            
            return newItem;
        },
        
        deleteItem (type, id) {
            let ids, index;
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            
            index = ids.indexOf(id);
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        
        calculateBudget() {
            calculateTotal("exp");
            calculateTotal("inc");
            
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round(data.totals.exp / data.totals.inc * 100);
            } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        
        getPercentages: function() {
            const allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            
            return allPerc;
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function() {
            console.log(data);
        }
  };
})();


// UI CONTROLLER
const UIController = (function() {
    
  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: ".item__percentage",
    dateLabel: ".budget__title--month"
  };

  let formatNumber = function(num, type) {
    var numSplit, int, dec, type;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split(".");

    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    dec = numSplit[1];

    return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
  };

  let nodeListForEach = function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
      
      //Returned functions
      
    getInput() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem(obj, type) {
      let html, newHtml, element;
        
      if (type === "inc") {
          
        element = DOMstrings.incomeContainer;

        html = `<div class="item clearfix" id="inc-${obj.id}"> <div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
          
      } else if (type === "exp") {
          
        element = DOMstrings.expensesContainer;

        html = `<div class="item clearfix" id="exp-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
      }


      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", html);
        
    },

    deleteListItem(selectorID) {
      let el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      let fields, fieldsArr;

      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ", " + DOMstrings.inputValue
      );

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---";
      }
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
    },

    displayMonth: function() {

      const now = new Date();

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const month = now.getMonth();

      const year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${year}`;
    },

    changedType: function() {
      let fields = document.querySelectorAll(
        DOMstrings.inputType +
          "," +
          DOMstrings.inputDescription +
          "," +
          DOMstrings.inputValue
      );

      nodeListForEach(fields, function(cur) {
        cur.classList.toggle("red-focus");
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle("red");
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();


// GLOBAL APP CONTROLLER
const controller = (function(budgetCtrl, UICtrl) {
    
  let setupEventListeners = function() {
    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener("change", UICtrl.changedType);
  };

  let updateBudget = function() {
    budgetCtrl.calculateBudget();

    let budget = budgetCtrl.getBudget();

    UICtrl.displayBudget(budget);
  };

  let updatePercentages = function() {
    budgetCtrl.calculatePercentages();

    let percentages = budgetCtrl.getPercentages();

    UICtrl.displayPercentages(percentages);
  };

  let ctrlAddItem = function() {
    let input, newItem;
      
      
      // get input
    input = UICtrl.getInput();

      // check for nonempty description + numeric value + value greater than 0;
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        
        //create an object from class
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      UICtrl.addListItem(newItem, input.type);

      UICtrl.clearFields();

      updateBudget();

      updatePercentages();
    }
  };

  let ctrlDeleteItem = function(event) {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      //inc-1
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      budgetCtrl.deleteItem(type, ID);

      UICtrl.deleteListItem(itemID);

      updateBudget();

      updatePercentages();
    }
  };

  return {
    init: function() {
      console.log("Application has started.");
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
        
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
