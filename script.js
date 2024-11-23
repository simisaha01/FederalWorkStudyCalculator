// script.js
document.getElementById('calculate-btn').addEventListener('click', () => {
    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const hoursPerWeek = parseFloat(document.getElementById('hours-per-week').value);
    const weeksWorked = parseFloat(document.getElementById('weeks-worked').value);
  
    if (!hourlyRate || !hoursPerWeek || !weeksWorked) {
      alert('Please fill in all fields.');
      return;
    }
  
    const totalWages = hourlyRate * hoursPerWeek * weeksWorked;
    const workType = document.getElementById('work-type').value;
  
    // FWS calculations
    const fwsDepartmentContribution = totalWages * 0.25;
    const fwsERE = fwsDepartmentContribution * 0.02;
    const fwsServiceFee = totalWages * 0.10;
    const fwsTotalCost = fwsDepartmentContribution + fwsERE + fwsServiceFee;
  
    // Non-FWS calculations
    const nonFwsDepartmentContribution = totalWages;
    const nonFwsERE = nonFwsDepartmentContribution * 0.02;
    const nonFwsTotalCost = nonFwsDepartmentContribution + nonFwsERE;
  
    // Update FWS results
    document.getElementById('fws-total-wages').textContent = `$${totalWages.toFixed(2)}`;
    document.getElementById('fws-department-contribution').textContent = `$${fwsDepartmentContribution.toFixed(2)}`;
    document.getElementById('fws-ere').textContent = `$${fwsERE.toFixed(2)}`;
    document.getElementById('fws-service-fee').textContent = `$${fwsServiceFee.toFixed(2)}`;
    document.getElementById('fws-total-cost').textContent = `$${fwsTotalCost.toFixed(2)}`;
  
    // Update Non-FWS results
    document.getElementById('nonfws-total-wages').textContent = `$${totalWages.toFixed(2)}`;
    document.getElementById('nonfws-department-contribution').textContent = `$${nonFwsDepartmentContribution.toFixed(2)}`;
    document.getElementById('nonfws-ere').textContent = `$${nonFwsERE.toFixed(2)}`;
    document.getElementById('nonfws-total-cost').textContent = `$${nonFwsTotalCost.toFixed(2)}`;
  
    // Update Comparison
    const savings = nonFwsTotalCost - fwsTotalCost;
    document.getElementById('savings').textContent = `$${savings.toFixed(2)}`;
  });
  