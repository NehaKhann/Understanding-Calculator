const calculate = () => {
    let name1 = document.forms["myForm"]["name1"].value;
    let name2 = document.forms["myForm"]["name2"].value;
    if(name1=='' || name2==''){
      alert("Names are Required!");
      return false;
    }
    var lovescore= Math.random() * 100;
    lovescore = Math.floor(lovescore) +1;
    if(lovescore>70){
      document.getElementById("result").innerHTML = 'Your Compatibility Score is : ' + lovescore + "%" + " Woah!!!! You love each other,like I love chocolates.";
      document.getElementById("result").style.display = "block";
    }
    if(lovescore>30 && lovescore<= 70)
    {
      document.getElementById("result").innerHTML = 'Your Compatibility Score is : ' + lovescore + "%";
      document.getElementById("result").style.display = "block";
    }
    if(lovescore<=30){
      document.getElementById("result").innerHTML = 'Your Compatibility Score is : ' + lovescore + "%" + " You got together like oil and water!";
      document.getElementById("result").style.display = "block";
    }
    return false;
}
