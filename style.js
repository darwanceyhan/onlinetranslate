function choicebutton1() {

    let first = document.getElementById("choice1");
    let second = document.getElementById("choice2");

    first.innerHTML = "SEÇİLDİ";
    second.innerHTML = "SEÇ";
    first.style.backgroundColor = "#201231";
    second.style.backgroundColor = "#614981";
    document.getElementById("package").innerText = "STANDART";
    document.getElementById("package").classList.replace("text-success", "text-secondary");


}

function choicebutton2() {

    let first = document.getElementById("choice1");
    let second = document.getElementById("choice2");

    second.innerHTML = "SEÇİLDİ";
    first.innerHTML = "SEÇ";
    second.style.backgroundColor = "#201231";
    first.style.backgroundColor = "#614981";
    document.getElementById("package").innerText = "PROFESYONEL";
    document.getElementById("package").classList.replace("text-secondary", "text-success");

}



function divHidden4() {

    document.getElementById("mainpage").classList.add("d-none");
    document.getElementById("transactions").classList.remove("d-none");
    document.getElementById("upload").classList.remove("d-none");
    document.getElementById("level_1").classList.remove("d-none");
    document.getElementById("btn1").classList.remove("d-none");
    document.getElementById("level_2").classList.add("d-none");
    document.getElementById("btnnext").classList.add("d-none");
    document.getElementById("contact_1").classList.add("d-none");
    document.getElementById("div2").classList.add("opacity-50");
    document.getElementById("div2").classList.remove("opacity-100");
    document.getElementById("div1").classList.add("opacity-100");
    document.getElementById("div3").classList.replace("opacity-100", "opacity-50");
    document.getElementById("level_3").classList.add("d-none");



}

function divHidden5() {


    document.getElementById("upload").classList.add("d-none", );
    document.getElementById("level_1").classList.add("d-none");
    document.getElementById("btn1").classList.add("d-none");
    document.getElementById("level_2").classList.remove("d-none");
    document.getElementById("btnnext").classList.remove("d-none");
    document.getElementById("div1").classList.add("opacity-50");
    document.getElementById("div1").classList.remove("opacity-100")
    document.getElementById("div2").classList.remove("opacity-50");
    document.getElementById("div2").classList.add("opacity-100");


}


function addfastcheck(){
    if (document.getElementById("package").innerText == "PROFESYONEL" && document.getElementById("btn2").classList.contains("bg-danger")) {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * Number(document.getElementById("percount").innerText) + 40;
    } else if (document.getElementById("package").innerText == "PROFESYONEL" && document.getElementById("btn2").classList.contains("bg-success")) {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * Number(document.getElementById("percount").innerText) + 90;
    } else if (document.getElementById("package").innerText == "STANDART" && document.getElementById("btn2").classList.contains("bg-danger")) {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * Number(document.getElementById("percount").innerText) + 31;

    } else if (document.getElementById("package").innerText == "STANDART" && document.getElementById("btn2").classList.contains("bg-success")) {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * Number(document.getElementById("percount").innerText) + 81;

    }

}

function divHidden6() {
   

    document.getElementById("level_2").classList.add("d-none");
    document.getElementById("btnnext").classList.add("d-none");
    document.getElementById("div2").classList.replace("opacity-100", "opacity-50");
    document.getElementById("div3").classList.replace("opacity-50", "opacity-100");
    document.getElementById("level_3").classList.remove("d-none");
    document.getElementById("prcselect").classList.remove("d-none");


}


function openMainpage() {



    document.getElementById("transactions").classList.add("d-none")
    document.getElementById("mainpage").classList.remove("d-none");
    document.getElementById("contact_1").classList.add("d-none");
    document.getElementById("prcselect").classList.add("d-none");
    document.getElementById("level_3").classList.add("d-none");
    document.getElementById("btnnext").classList.add("d-none");


}

function openContact1() {


    document.getElementById("transactions").classList.add("d-none");
    document.getElementById("mainpage").classList.add("d-none");
    document.getElementById("contact_1").classList.remove("d-none");
    document.getElementById("prcselect").classList.add("d-none");
    document.getElementById("level_3").classList.add("d-none");
    document.getElementById("btnnext").classList.add("d-none");



}


document.getElementById('inputGroupFile02')
    .addEventListener('change', function () {
        const searching = "";
        var fr = new FileReader();
        fr.onload = function () {
            let reading = fr.result

            reading = reading.split('.').join('');
            reading = reading.split(' ');
            const newArray = reading.filter((item) => item !== "" && "the")

            document.getElementById("wordcount").innerText = newArray.length;
            console.log(newArray)


        }

        fr.readAsText(this.files[0]);

    })



function ibanchange(a) {

    if (a == document.getElementById("flexRadioDefault1")) {
        document.getElementById("iban").value = "TR000000000000000000";
    } else if (a == document.getElementById("flexRadioDefault2")) {
        document.getElementById("iban").value = "TR000020302340230230";
    } else if (a == document.getElementById("flexRadioDefault3")) {
        document.getElementById("iban").value = "TR723652435234523453";
    } else if (a == document.getElementById("flexRadioDefault4")) {
        document.getElementById("iban").value = "TR326547263547263533";
    } else if (a == document.getElementById("flexRadioDefault5")) {
        document.getElementById("iban").value = "TR541545445485415413";
    }




}



function payingchange(b) {

    if (b.value == document.getElementById("option1").value) {

        document.getElementById("credit").classList.remove("d-none");
        document.getElementById("ibanselect").classList.add("d-none");


    } else if (b.value == document.getElementById("option2").value) {

        document.getElementById("credit").classList.add("d-none");
        document.getElementById("ibanselect").classList.remove("d-none");

    }

}


function openlevel1() {

    document.getElementById("level_1").classList.remove("d-none");
    document.getElementById("level_2").classList.add("d-none");
    document.getElementById("level_3").classList.add("d-none");
    document.getElementById("btnnext").classList.add("d-none");
    document.getElementById("prcselect").classList.add("d-none");
    document.getElementById("upload").classList.remove("d-none");
    document.getElementById("btn1").classList.remove("d-none");
    document.getElementById("div1").classList.replace("opacity-50", "opacity-100");
    document.getElementById("div2").classList.replace("opacity-100", "opacity-50");
    document.getElementById("div3").classList.replace("opacity-100", "opacity-50");

}


function openlevel2() {
    document.getElementById("level_1").classList.add("d-none");
    document.getElementById("level_2").classList.remove("d-none");
    document.getElementById("level_3").classList.add("d-none");
    document.getElementById("btnnext").classList.remove("d-none");
    document.getElementById("prcselect").classList.add("d-none");
    document.getElementById("upload").classList.add("d-none");
    document.getElementById("btn1").classList.add("d-none");
    document.getElementById("div1").classList.replace("opacity-100", "opacity-50");
    document.getElementById("div2").classList.replace("opacity-50", "opacity-100");
    document.getElementById("div3").classList.replace("opacity-100", "opacity-50");


}


function openlevel3() {
    document.getElementById("level_1").classList.add("d-none");
    document.getElementById("level_2").classList.add("d-none");
    document.getElementById("level_3").classList.remove("d-none");
    document.getElementById("btnnext").classList.add("d-none");
    document.getElementById("prcselect").classList.remove("d-none");
    document.getElementById("upload").classList.add("d-none");
    document.getElementById("btn1").classList.add("d-none");
    document.getElementById("div1").classList.replace("opacity-100", "opacity-50");
    document.getElementById("div2").classList.replace("opacity-100", "opacity-50");
    document.getElementById("div3").classList.replace("opacity-50", "opacity-100");


}



function controllang() {

    if (opt1.value == "1" && opt2.value == "2") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.5;
        document.getElementById("percount").innerText = "0.5";
    } else if (opt1.value == "1" && opt2.value == "3") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.8;
        document.getElementById("percount").innerText = "0.8";
    } else if (opt1.value == "1" && opt2.value == "4") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.75;
        document.getElementById("percount").innerText = "0.75";
    } else if (opt1.value == "2" && opt2.value == "1") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.5;
        document.getElementById("percount").innerText = "0.5";
    } else if (opt1.value == "2" && opt2.value == "3") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.9;
        document.getElementById("percount").innerText = "0.9";

    } else if (opt1.value == "2" && opt2.value == "4") {
        document.getElementById("total1").innerText = Number(document.getElementById("wordcount").innerText) * 0.7;
        document.getElementById("percount").innerText = "0.7";

    }



}















function checkfast() {

    if (document.getElementById("btn2").classList.contains("bg-danger") == true) {

        document.getElementById("btn2").classList.replace("bg-danger", "bg-success");

        document.getElementById("checkfast1").classList.replace("text-danger", "text-success");
        document.getElementById("checkfast1").innerText = "Var";
    } else if (document.getElementById("btn2").classList.contains("bg-success") == true) {
        document.getElementById("btn2").classList.replace("bg-success", "bg-danger");
        document.getElementById("checkfast1").classList.replace("text-success", "text-danger");
        document.getElementById("checkfast1").innerText = "Yok";
    }

}



function selectlng() {

    if (document.getElementById("opt1").value == "1") {
        document.getElementById("lng1").innerText = "İNGİLİZCE";
    } else if (document.getElementById("opt1").value == "2") {
        document.getElementById("lng1").innerText = "ALMANCA";
    } else if (document.getElementById("opt1").value == "3") {
        document.getElementById("lng1").innerText = "FRANSIZCA";
    } else if (document.getElementById("opt1").value == "4") {
        document.getElementById("lng1").innerText = "İTALYANCA";
    }


}

function selectlng2() {

    if (document.getElementById("opt2").value == "1") {
        document.getElementById("lng2").innerText = "İNGİLİZCE";
    } else if (document.getElementById("opt2").value == "2") {
        document.getElementById("lng2").innerText = "ALMANCA";
    } else if (document.getElementById("opt2").value == "3") {
        document.getElementById("lng2").innerText = "FRANSIZCA";
    } else if (document.getElementById("opt2").value == "4") {
        document.getElementById("lng2").innerText = "İTALYANCA";
    }


}
