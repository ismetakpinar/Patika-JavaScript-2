// Listeye ekleme fonksiyonu
function newElement() {
    var task = document.getElementById("task").value;
    if (task == "") {
        // Eğer girdi boşsa hata mesajı göster
        document.getElementById("liveToast").classList.remove("hide");
        document.getElementById("liveToast").classList.add("error");
    } else {
        // Eğer girdi boş değilse listeye ekle
        var li = document.createElement("li");
        var t = document.createTextNode(task);
        li.appendChild(t);
        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
        // Başarı mesajı göster
        document.getElementById("liveToast").classList.remove("hide");
        document.getElementById("liveToast").classList.add("success");
        // Liste öğelerine çıkarma özelliği ekle
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}

// Sayfa yüklendiğinde saklı olan toast mesajlarını gizle
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("liveToast").classList.add("hide");
});

// Liste öğelerine çıkarma özelliği ekle
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
