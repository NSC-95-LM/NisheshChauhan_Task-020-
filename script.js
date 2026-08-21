emailjs.init("ah6CcCmwg1dlS2DjC");

// ================================================== Accessing the DOM Elements ==================================================
const servBtn = document.getElementById("servBtn");
const service = document.getElementById("service");

const servArr = document.getElementById("servArr");

const gtBody = document.getElementById("gtBody");
const checkOutPrice = document.getElementById("checkOutPrice");

const bkNw = document.getElementById("bkNw");
const des = document.getElementById("des");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phNoInput = document.getElementById("phno");

const subscribe = document.getElementById("subscribe");
const subNameInput = document.getElementById("subName");
const subEmailInput = document.getElementById("subEmail");
const info = document.getElementById("info");

const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;

const addState = `
    <p>Add Item</p>
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
`;

const subState = `
    <p>Remove Item</p>
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
`;

// ================================================== Arrays & Functions ==================================================
const servicesMenu = [ // Main Array of storing services to be displayed on screen
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M280-80v-240h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85h-80q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v240H280Zm-64-320h64v-40h400v40h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm0-200h240-240Z"/></svg>',
        name: 'Dry Cleaning',
        price: 200
    },
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M630.5-670.5Q600-701 600-740q0-35 23-77.5T700-920q54 60 77 102.5t23 77.5q0 39-30.5 69.5T700-640q-39 0-69.5-30.5ZM240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l330-214 20 20q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H308l77-124-207 134q-9 5-13.5 14t-4.5 20v216q0 33 23.5 56.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm240-280v-80h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480Zm0 140v-80h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480ZM320-360Z"/></svg>',
        name: 'Wash & Fold',
        price: 100
    },
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M80-240v-120q0-66 47-113t113-47h360v-40q0-17-11.5-28.5T560-600H400q-17 0-28.5 11.5T360-560h-80q0-50 35-85t85-35h160q50 0 85 35t35 85v160q17 0 28.5-11.5T720-440v-160q0-50 35-85t85-35h40v80h-40q-17 0-28.5 11.5T800-600v160q0 50-35 85t-85 35v80H80Zm80-80h440v-120H240q-33 0-56.5 23.5T160-360v40Zm440 0v-120 120Z"/></svg>',
        name: 'Ironing',
        price: 30
    },
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M750-250q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10Zm-314-50q9 0 15.5 9.5T458-264q0 17-4 32t-4 32h68q0-19-6-35t-6-35q0-17 7.5-25.5T530-304q9 0 17 3t23 11q20 11 33.5 15.5T626-270q21 0 33.5-15.5T672-318q0-14-10-22t-30-16q-17-6-24.5-12t-7.5-14q0-9 12.5-12.5T660-400q30-2 47-8t17-24q0-17-9.5-30.5T690-476q-7 0-36 10-11 5-17 6.5t-11 1.5q-8 0-13-5.5t-5-14.5q0-14 13-25.5t51-28.5q41-18 54.5-32t13.5-28q0-20-17.5-40T690-652q-14 0-26.5 13T622-584q-20 29-34.5 39.5T558-534q-14 0-27-11t-27-41q-12-27-21.5-38.5T458-636q-18 0-30 7.5T416-612q0 9 20 42 9 14 12.5 21t3.5 15q0 8-9.5 14t-18.5 6q-11 0-21-5.5T376-542q-18-17-26-22.5t-20-5.5q-15 0-25.5 10.5T294-538q0 6 2 11.5t8 14.5q6 9 9 15.5t3 12.5q0 9-8 14t-22 10q-17 6-23.5 13t-6.5 19q0 8 2.5 17.5T268-396q10 8 25 9t27 1q23 0 29.5 8.5T356-352q0 12-5 24t-17 26q-14 15-17 21t-3 11q0 14 12.5 23t23.5 9q12 0 22.5-6.5T400-272q15-18 21.5-23t14.5-5ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>',
        name: 'Stain Removal',
        price: 500
    },
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M306-100q-57 0-103-9t-65-29q-18-19-28-66t-10-106q0-115 40.5-220.5T252-708q71-71 177.5-111.5T654-860q57 0 103 9t65 29q18 19 28 66t10 106q0 115-40.5 220.5T708-252q-71 71-177.5 111.5T306-100ZM182-326q33-72 80-140.5T366-594q57-57 125.5-104T632-778q-91 3-178.5 37.5T310-650q-59 57-92.5 143T182-326Zm146 144q91-3 178.5-37.5T650-310q59-57 92.5-143T778-634q-33 72-79.5 140.5T594-366q-57 57-125.5 104T328-182Zm-100-46q80-27 163-80t145-116q66-65 119-148t77-160q-80 27-163 80T424-536q-66 65-119 148t-77 160Zm252-252Z"/></svg>',
        name: 'Leather & Suede Cleaning',
        price: 999
    },
    {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M80-80v-320l160-71v-129l200-100v-60h-80v-80h80v-80h80v80h80v80h-80v60l200 100v129l160 71v320H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H80Zm80-80h200v-82q0-51 35-86.5t85-35.5q50 0 85 35.5t35 86.5v82h200v-192l-160-72v-134l-160-82-160 82v134l-160 72v192Zm362.5-277.5Q540-455 540-480t-17.5-42.5Q505-540 480-540t-42.5 17.5Q420-505 420-480t17.5 42.5Q455-420 480-420t42.5-17.5ZM480-400Z"/></svg>',
        name: 'Wedding Dress Cleaning',
        price: 2800
    }
];

function printServArr(){ // Function to print the services array on screen
    for(let i = 0; i<servicesMenu.length; i++){
        servArr.innerHTML += `
            <tr>
                <td>${servicesMenu[i].svg}</td>
                <td>${servicesMenu[i].name}</td>
                <td>₹ ${servicesMenu[i].price.toFixed(2)} /-</td>
                <td><button class = "addBtn">${addState}</button></td>
            </tr>
        `;
    };
};

printServArr(); // First call to display the services from the array on screen load

const cart = [];

function displayCart(){ // Function to hold the services which are added to be booked
    if(cart.length===0){
        gtBody.classList.add("djcai");
        gtBody.innerHTML = `
            <div class="emptyBanner">
                ${infoIcon}
                <h4>No Items Added</h4>
                <p>Add Items to the Cart from the Services Bar</p>
            </div>
        `;
    }
    else {
        gtBody.classList.remove("djcai");
        gtBody.innerHTML = "";
        cart.forEach((item, index) => {
            gtBody.innerHTML += `
                <div class="tableBod ${cart.length > 1 ? "sep":""}">
                    <p>${index+1}</p>
                    <p>${item.servName}</p>
                    <p>₹ ${item.servPrice.toFixed(2)} /-</p>
                </div>
            `;
        });
    };
};

displayCart(); // First call to display the cart items onto screen

function updateCheckOutPrice(){ // Function to calculate the total price of all services added into cart
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice +=item.servPrice
    });
    checkOutPrice.innerHTML = `
        ₹ ${totalPrice.toFixed(2)} /-
    `;
};

updateCheckOutPrice(); // First call to maintain track of total price

function bkNwChecker(){ // Main function to track the book button eligibility, only to be clicked when everything is valid
    if(cart.length===0 && !nameInput.checkValidity() && !emailInput.checkValidity() && !phNoInput.checkValidity()){
        bkNw.classList.add("disabled");
    }
    else if(cart.length===0){
        bkNw.classList.add("disabled");
    }
    else if (cart.length>0 && (!nameInput.checkValidity() || !emailInput.checkValidity() || !phNoInput.checkValidity())){
        des.innerHTML = "";
        bkNw.classList.add("disabled");
    }
    else if (cart.length>0 && nameInput.checkValidity() && emailInput.checkValidity() && phNoInput.checkValidity()){
        des.innerHTML = "";
        bkNw.classList.remove("disabled");
    }
};

bkNwChecker(); // First call to maintain valid state of book now button

function subscribeBtnChecker(){ // Function to check the subscribe button state and proceed upon eligibility
    if(subNameInput.checkValidity() && subEmailInput.checkValidity()){
        info.innerHTML = "";
        subscribe.classList.remove("disabled")
    }
    else{
        subscribe.classList.add("disabled")
    }
};

subscribeBtnChecker(); // First call to maintain valid state for subscribe now button

// ================================================== Event Listeners ==================================================
servBtn.addEventListener("click", () => { // event listener for book now button from home section
    service.scrollIntoView();
});

servArr.addEventListener("click", (e) => { // add and remove services button event listener
    const button = e.target.closest(".addBtn, .subBtn");
    if (!button) return;

    const row = button.closest("tr");
    const servName = row.cells[1].textContent.trim();
    const servPrice = parseFloat(row.cells[2].textContent.replace(/[^0-9.]/g, ''));

    if(button.classList.contains("addBtn")){
        cart.push({servName, servPrice});
        button.classList.remove("addBtn");
        button.classList.add("subBtn");
        button.innerHTML = `${subState}`;
    }
    else if(button.classList.contains("subBtn")){
        const targetIndex = cart.findIndex((item) => {
            return item.servName === servName;
        });
        cart.splice(targetIndex, 1);
        button.classList.remove("subBtn");
        button.classList.add("addBtn");
        button.innerHTML = `${addState}`;
    };

    displayCart();
    updateCheckOutPrice();
    bkNwChecker();
})

bkNw.addEventListener("click", () => { // book now button event listener
    if(cart.length===0){
        des.classList.remove("orange", "green");
        des.classList.add("red");
        des.innerHTML = `
            ${infoIcon}
            <p>Add the Item(s) to the Cart to Book!</p>
        `;
    }
    else if (!nameInput.checkValidity() || !emailInput.checkValidity() || !phNoInput.checkValidity()){
        des.classList.remove("red", "green");
        des.classList.add("orange");
        des.innerHTML = `
        ${infoIcon}
        <p>Please Fill out the Form Field(s) correctly!</p>`;
    }
    else {
        des.classList.remove("red", "orange");
        des.classList.add("green");
        des.innerHTML = `
            ${infoIcon}
            <p>Processing your booking... Please Wait!</p>
        `;

        let cartItems = `Sr.No. <b>Service Name:</b> <i>Price</i><br>`;
        let j = 0;
        cart.forEach((item, index) => {
            j += item.servPrice;
            cartItems += `${index+1}. <b>${item.servName}:</b> <i>₹ ${item.servPrice.toFixed(2)} /-</i><br>`;
        });
        cartItems += `<hr><b>Total Amount:</b> <i>₹ ${j.toFixed(2)} /-</i><hr>`;

        const emailTemp = {
            user_name: nameInput.value,
            user_email: emailInput.value,
            user_phone: phNoInput.value,
            cart_summary: cartItems
        };

        emailjs.send("service_pm0n67h", "template_lkdtzpp", emailTemp)
            .then(() => {                
                    des.innerHTML = `
                    ${infoIcon}
                    <p>Thank you for Contacting, we will get back to you soon!</p>
                    `;

                setTimeout(() => {
                    location.reload();
                }, 3000);
            })
            .catch(() => {                
                des.classList.remove("green", "orange");
                des.classList.add("red");
                des.innerHTML = `<p>Booking failed. Please check your connection.</p>`;
            });
    }
});

nameInput.addEventListener("input", bkNwChecker);   // book now button active checkers to keep on updating the valid state
emailInput.addEventListener("input", bkNwChecker); // book now button active checkers to keep on updating the valid state
phNoInput.addEventListener("input", bkNwChecker); // book now button active checkers to keep on updating the valid state

subscribe.addEventListener("click", () => { // subscribe now button event listener
    if(subNameInput.checkValidity() && subEmailInput.checkValidity()){
        info.classList.remove("red");
        info.classList.add("green");
        info.innerHTML = `
            ${infoIcon}
            <p>Subscribing to newsletter... Please Wait!</p>
        `;

        const emailTemp = {
            user_name: subNameInput.value,
            user_email: subEmailInput.value,
        };

        emailjs.send("service_pm0n67h", "template_u7cmkjn", emailTemp)
            .then(() => {                
                    info.innerHTML = `
                    ${infoIcon}
                    <p>Thank you for Subscribing, we will get back to you soon!</p>
                `;

                setTimeout(() => {
                    location.reload();
                }, 3000);
            })
            .catch(() => {                
                info.classList.remove("green");
                info.classList.add("red");
                info.innerHTML = `<p>Subscription Failed. Please check your connection.</p>`;
            });
        
    }
    else{
        info.classList.remove("green");
        info.classList.add("red");
        info.innerHTML = `
            ${infoIcon}
            <p>Please Fill out the Form Field(s) correctly!</p>
        `;
    }
});

subNameInput.addEventListener("input", subscribeBtnChecker);    // subscribe now button active listener to keep checking its valid state
subEmailInput.addEventListener("input", subscribeBtnChecker);  // subscribe now button active listener to keep checking its valid state