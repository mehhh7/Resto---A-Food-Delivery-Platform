// Firebase Configuration
const firebaseConfig = {
 //Add your Api here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Database
var ordernowDB = firebase.database().ref("ordernow");

// Event Listener for Form Submission
document.getElementById("ordernow").addEventListener("submit", ordernow); // Corrected function reference

// Function to Handle Form Submission
function ordernow(e) {
    e.preventDefault(); // Prevent default form submission behaviors
    
    // Get form values
    var name = getElementVal("name");
    var number = getElementVal("number");
    var Foodname = getElementVal("Foodname");
    var Quantity = getElementVal("Quantity"); // Corrected spacing
    var address = getElementVal("address");

    // Save form values to Firebase
    saveMessages(name, number, Foodname, Quantity, address);
}

// Function to Save Messages to Firebase
const saveMessages = (name, number, Foodname, Quantity, address) => {
    var newordernow = ordernowDB.push(); // Push a new entry into Firebase
    newordernow.set({
        name: name,
        number: number,
        Foodname: Foodname,
        Quantity: Quantity,
        address: address,
    });
};

// Function to Get Element Value by ID
const getElementVal = (id) => {
    return document.getElementById(id).value; // Get the value from the element with the specified ID
};
