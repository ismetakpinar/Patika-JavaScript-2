function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      showToast("error");
    } else {
      document.getElementById("list").appendChild(li);
      showToast("success");
    }
    document.getElementById("task").value = "";
  }
  
  function showToast(type) {
    var toast = document.getElementById("liveToast");
    toast.classList.remove("hide");
    toast.classList.add("show");
    toast.classList.remove("error");
    toast.classList.remove("success");
    toast.classList.add(type);
    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 4000);
  }
  