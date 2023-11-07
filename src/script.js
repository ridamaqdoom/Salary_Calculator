function calculateSalary() {
    const income = parseFloat(document.getElementById("income").value);
    const province = document.getElementById("province").value;
    let taxRate = 0;

    // Set tax rates based on selected province
    switch (province) {
        case "quebec":
            taxRate = 28.2;
            break;
        case "nova_scotia":
            taxRate = 27.5;
            break;
        case "prince_edward_island":
            taxRate = 26.6;
            break;
        case "newfoundland_and_labrador":
            taxRate = 25.9;
            break;
        case "manitoba":
            taxRate = 25.7;
            break;
        case "new_brunswick":
            taxRate = 25.3;
            break;
        case "saskatchewan":
            taxRate = 24.6;
            break;
        case "alberta":
            taxRate = 23.4;
            break;
        case "ontario":
            taxRate = 23.0;
            break;
        case "yukon":
            taxRate = 22.1;
            break;
        case "british_columbia":
            taxRate = 21.9;
            break;
        case "northwest_territories":
            taxRate = 20.5;
            break;
        case "nunavut":
            taxRate = 18.6;
            break;
        default:
            taxRate = 0; // Default tax rate if province is not selected
    }

    const taxedIncome = income * (1 - taxRate / 100); // Calculate taxed income
    const takeHome = taxedIncome.toFixed(2);
    const monthlyIncome = (taxedIncome / 12).toFixed(2);
    const weeklyIncome = (taxedIncome / 52).toFixed(2);

    const results = `
         <p>Total Take-Home: $${takeHome}</p>
        <p>Monthly Income (After Tax): $${monthlyIncome}</p>
        <p>Weekly Income (After Tax): $${weeklyIncome}</p>
    `;
   
    document.getElementById("results").innerHTML = results;
}
