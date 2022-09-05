let btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    
    let n1b = parseFloat(document.querySelector(".n1b").value)
    let n4b = parseFloat(document.querySelector(".n2b").value)
    let n2b = parseFloat(document.querySelector(".n3b").value)
    let n3b = parseFloat(document.querySelector(".n4b").value)

    let nf = (n1b + n2b + n3b + n4b) / 4
    let nff = nf.toFixed(2)

    let tr = document.querySelector(".titulo-resultado")
    let r = document.querySelector(".resultado")
    let ar = document.querySelector(".aprovado-reprovado")

    if (nff >= 6) {
        tr.innerHTML = "sua nota foi de"
        r.innerHTML = nff
        ar.innerHTML = "Aprovado"
    }
    else {
        tr.innerHTML = "sua nota foi de"
        r.innerHTML = nff
        ar.innerHTML = "Reprovado"
    }
    setTimeout(function () {
        if (tr.innerHTML != ""){
            
            tr.innerHTML = ""
            r.innerHTML = ""
            ar.innerHTML = ""
        }
    },5000)
})
