function expense(){
    var totalSalary = 0;
    var totalExpenditure = 0;
    var total = 0;

    var name = document.getElementById("name").value;
    var salary1 = Number(document.getElementById("sal1").value);
    var salary2 = Number(document.getElementById("sal2").value);

    totalSalary = salary1 + salary2;
    document.getElementById("namePrint").innerHTML = "Hi " + name;
    document.getElementById("sumSal").innerHTML = "Your Total Amount = " + totalSalary;

    var spent1 = Number(document.getElementById("exp1").value);
    var spent2 = Number(document.getElementById("exp2").value);
    var spent3 = Number(document.getElementById("exp3").value);
    var spent4 = Number(document.getElementById("exp4").value);
    var spent5 = Number(document.getElementById("exp5").value);
   
    totalExpenditure = spent1 + spent2 + spent3 + spent4 + spent5;
    document.getElementById("sumExp").innerHTML = "Your Total Expenditure = " + totalExpenditure;
    total = totalSalary - totalExpenditure;
    
    var calText = "Your total Amount is = "
    document.getElementById("output").innerHTML = calText + total; 
}