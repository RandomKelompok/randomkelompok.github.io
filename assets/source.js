document.getElementById("year").innerHTML = new Date().getFullYear()

function kelompokResult() {
    document.getElementById("output").innerHTML = ""
    names = document.getElementById("name").value
    names = names.split(/\n/)
    names = shuffle(names)
    
    kel = document.getElementById("kelompok").value
    if (names.length < kel){
        alert("Kelompok Terlalu Banyak!!")
    }else if(kel == 0){
        alert("Kelompok tidak boleh 0!!")
    }else if(kel < 0){
        alert("Kelompok tidak boleh negatif!!")
    }else{
        anggota = Math.floor(names.length/kel)
        a = 1
        buat = true
        while (names.length > 0) {
            if (a-1 == kel){
                a = 1
                buat = false
                i = 1
            }
            if (buat){
                addKelompok(a)
                i = anggota
            }
            if (i == 0){
                i = 1
            }
            while (i > 0){
                nama = get_random(names)
                addAnggota(nama, a)
                i-=1
            }
            a+=1
        }
    }
}

function addAnggota(nama, no) {
    para = document.createElement("p");
    node = document.createTextNode(`${nama}`);
    para.appendChild(node);
    element = document.getElementById(`kel-${no}`);
    element.appendChild(para);
}

function addKelompok(no) {
    nomor = document.createAttribute("id")
    nomor.value = `kel-${no}`
    kelas = document.createAttribute("class")
    kelas.value = "kelompok"
    div = document.createElement("div")
    para = document.createElement("h2");
    node = document.createTextNode(`Kelompok ${no}`);
    para.appendChild(node);
    div.setAttributeNode(nomor)
    div.setAttributeNode(kelas)
    div.appendChild(para)
    element = document.getElementById("output");
    element.appendChild(div);
}

function get_random(list) {
    index = Math.floor(Math.random() * list.length)
    result = list[index]
    list.splice(index, 1)
    return result;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}