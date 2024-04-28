function convert() {
    const celsius = document.getElementById("temp_celsius").value;
    const fahrenheit = (celsius * (9/5)+ 32);
    document.getElementById("temp_fahr").innerHTML = fahrenheit;
}


function now(){
    let year = "";

    let startYear = 2022;

    let endYear = 2050;
    
    for (let a = startYear; a <= endYear; a += 4) {
        year += "World Cup  Soccer in" + " " + a + "<br>";
        document.getElementById("anos_copa").innerHTML = year;
    }
}
now();

function calc(){
    let grade_1 = document.getElementById("grade1").value;
    let grade_2 = document.getElementById("grade2").value;
    let sum_of_grades = (parseFloat(grade_1) + parseFloat(grade_2)) / 2;
    let absence = document.getElementById("absences").value;
    const total_class = 20;
    let percentage_absence = total_class - parseFloat(absence);

    if (sum_of_grades < 6.5 && percentage_absence < 14){
        document.getElementById("result").innerHTML = "you are not approved because your grades were below average and you had below 70% presence";
    } 
    else if (sum_of_grades >= 6.5 && percentage_absence >= 14){
        document.getElementById("result").innerHTML = "you are approved";
    }
    else if (percentage_absence < 14) {
        document.getElementById("result").innerHTML = "you are not approved because you had below 70% presence";
    }
    else if (sum_of_grades < 6.5){
        document.getElementById("result").innerHTML = "you are not approved because your grades were below average";
    }
    else {
        document.getElementById("result").innerHTML = "you have not entered your grades or absences";
    }
}
calc();

function fill(){
    var sales = [

        {
            'student': 'Jason Gomes',
            'date': '10/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        },

        {
            'student': 'Carlos Blue',
            'date': '10/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Martin Heyes',
            'date': '11/06/2018',
            'amount': 39.99,
            'refundRequested': '13/06/2018'
            
        },

        {
            'student': 'Isabella Hopkins',
            'date': '11/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Andrew Walt',
            'date': '12/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        }
    
    ];
    const students = [sales[0]['student'], sales[1]['student'], sales[2]['student'], sales[3]['student'], sales[4]['student'] ];
    document.getElementById("table").innerHTML =  students;

    const date_s = [sales[0]['date'], sales[1]['date'], sales[2]['date'], sales[3]['date'], sales[4]['date'] ];
    document.getElementById("datee").innerHTML =  date_s;

    const amount_s = [sales[0]['amount'], sales[1]['amount'], sales[2]['amount'], sales[3]['amount'], sales[4]['amount'] ];
    document.getElementById("amount_").innerHTML =  amount_s;
}

fill();

