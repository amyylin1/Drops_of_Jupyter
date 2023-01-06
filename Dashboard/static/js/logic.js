// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
//     // Use the list of sample names to populate the select options
//     d3.json("static/js/dataframe.json").then((data) => {
//     //   var colNames = data.General_Health_Status;
        
//       console.log("working...");
//     //   colNames.forEach((value) => {
//     //     selector
//     //       .append("option")
//     //       .text(value)
//     //       .property("value");
//     //   });

//       data = [
//         { name: "Diabetes", category: ["yes", "no"]},
//         { name: "Prediabetes", category: ["yes", "no"]},
//         { name: "Weight_Lbs", category: []},
//         { name: "Categorical_BMI", category: ["Obese", 
//                                             "Overweight", 
//                                             "Healthy_Weight", 
//                                             "Underweight"]},
//         { name: "Age", category: [] },
//         { name: "Gender", category: ["Male", "Female"]},
//         { name: "Race", category: ['White_Only',
//                                     'African_American_Only',
//                                     'Asian_Only',
//                                     'AIAN_Only',
//                                     'AIAN_AND_other',
//                                     'Other']},
//         { name: 'Education', category: ['Grade_1-11', 
//                                         '12th_Grade_no_diploma', 
//                                         'GED_Equivalent', 
//                                         'High_School_Graduate', 
//                                         'Some_College_no_degree',
//                                         'Associates_Occupational_Technical_Vocational',
//                                         'Associates_Academic_Program',
//                                         'Bachelor',
//                                         'Masters',
//                                         'Greater_Than_Master']},
//         { name: "Poverty_Ratio", category: ""}
//       ];
    
//       // Get the unique values in the "category" column
//       let categories = [...new Set(data.map(item => item.category))];
    
//       // Create buttons for each unique value
//       let buttons = categories.map(category => {
//         let button = document.createElement("button");
//         button.innerText = category;
//         button.addEventListener("click", () => filterData(category));
//         return button;
//       });
    
//       // Add the buttons to the page
//       let selectors = document.getElementById("selDataset");
//       buttons.forEach(button => selectors.appendChild(button));
  
//       // Use the first sample from the list to build the initial plots
//     //   var firstSample = sampleNames[0];
//     //   buildCharts(firstSample);
//     //   buildMetadata(firstSample);
//     });
//   }
  
  // Initialize the dashboard
//   init();


// function that converts input to poverty ratio for ML
// function povertyRatio(householdIncome, numInHh) {
//     let povertyRatio = householdIncome / 8340 + (numInHh * 4540);
//     return povertyRatio;
//   }
  

// try{
// let householdIncome = parseFloat(prompt("Enter the total income: "));
// let numInHh = parseFloat(prompt("Enter the number of people in the household: "));

// let povertyRatio = povertyRatio(householdIncome, numInHh);
// console.log(`The poverty ratio is ${povertyRatio}`);
// } catch(error) {    
// console.log(error.message);
// }


// function that converts age input to integer for ML
// function toInt(input) {
//     return parseInt(input, 10);
//   }

// // age conversion
// let age = prompt("Enter age: ");
// let ageValue = toInt(age);
// console.log(`The integer value is: ${ageValue}`);

// // weight conversion
// let weight = prompt("Enter weight in pounds: ")
// let weightValue = toInt(weight);
// console.log(`The integer value is: ${weightValue}`);




function saveDataToPickle() {
    // Create an empty list
    var data = [];
  
    // Retrieve the data from the input fields

    data.push(document.querySelector('#prediabetes').value);
    data.push(document.querySelector('#weightlbs').value);
    data.push(document.querySelector('#height').value);
    data.push(document.querySelector('#age').value);
    data.push(document.querySelector('#gender').value);
    data.push(document.querySelector('#education').value);
    data.push(document.querySelector('#race').value);
    data.push(document.querySelector('#hhincome').value);
    data.push(document.querySelector('#hhsize').value);

    return data;
    // Serialize the list and write it to a file using the pickle module
    // var pickleData = pickle.dumps(data);
    // fs.writeFileSync("data.pkl", pickleData);
  }

function handleClick() {
    let submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener('click', function(event) {
        // Collect form data and store it in a list
        event.preventDefault();
        var data = saveDataToPickle();

        // Define the object with predetermined keys
        var dataObj = {
            Prediabetes: data[0],
            Weight_Lbs: data[1],
            height: data[2],
            Age: data[3],
            Gender: data[4],
            Education: data[5],
            Race: data[6],
            HHincome: data[7],
            HHcount: data[8]
        };

        // Log the object to the console
        console.log(dataObj);
        // console.log(data);
    });
};

// console.log(data);
handleClick();
