function LetsDoMath(type)
            {
                var numberA = parseInt(document.getElementById("numA").value);
                var numberB = parseInt(document.getElementById("numB").value);
                
                var total = document.getElementById("total");

                switch(type)
                {
                    case "add":
                        total.innerHTML = "Total is: " + (numberA + numberB);
                        break;
                    case "subtract":
                        total.innerHTML = "Total is: " + (numberA - numberB);
                        break;
                    case "multiply":
                        total.innerHTML = "Total is: " + (numberA * numberB);
                        break;
                    case "divide":
                        var decimal = parseFloat(numberA / numberB).toFixed(2);
                        total.innerHTML = "Total is: " + decimal;
                        break;
                }
            }
            LetsDoMath();