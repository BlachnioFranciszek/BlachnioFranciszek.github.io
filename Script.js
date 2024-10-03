let Gra = function(nazwa, pokonuje){
    this.nazwa = nazwa
    this.pokonuje = pokonuje
}

function losuj(){
    let losowaLiczba = Math.floor(Math.random()*3)+1
    switch (losowaLiczba)
    {
        case 1:
            return scissors.nazwa;
        case 2:
            return paper.nazwa;
        case 3:
            return rock.nazwa;
    }
}


let scissors = new Gra("scissors", "paper")
let paper = new Gra("paper", "rock")
let rock = new Gra("rock", "scissors")

function rock1(){
    if (losuj() == rock.pokonuje) {
        let a = document.getElementById("czyWygrales")
        a.innerHTML = "Komputer wybrał nożyce. WYGRAŁEŚ"
        }   
    else if (losuj() == rock.nazwa) {
        let b = document.getElementById("czyWygrales")
        b.innerHTML = "Komputer wybrał kamień. REMIS"
        }
    else {
        let c = document.getElementById("czyWygrales")
        c.innerHTML = "Komputer wybrał papier. PRZEGRAŁEŚ"
        }
}
function paper1(){
    if (losuj() == paper.pokonuje) {
        let a = document.getElementById("czyWygrales")
        a.innerHTML = "Komputer wybrał kamień. WYGRAŁEŚ"
        }   
    else if (losuj() == paper.nazwa) {
        let b = document.getElementById("czyWygrales")
        b.innerHTML = "Komputer wybrał papier. REMIS"
        }
    else {
        let c = document.getElementById("czyWygrales")
        c.innerHTML = "Komputer wybrał nożyce. PRZEGRAŁEŚ"
        }
}
function scissors1(){
    if (losuj() == scissors.pokonuje) {
        let a = document.getElementById("czyWygrales")
        a.innerHTML = "Komputer wybrał papier. WYGRAŁEŚ"
        }   
    else if (losuj() == scissors.nazwa) {
        let b = document.getElementById("czyWygrales")
        b.innerHTML = "Komputer wybrał nożyce. REMIS"
        }
    else {
        let c = document.getElementById("czyWygrales")
        c.innerHTML = "Komputer wybrał kamień. PRZEGRAŁEŚ"
        }
}