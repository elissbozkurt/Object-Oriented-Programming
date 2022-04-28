
       function Student() {
          
       }
     
       Student.prototype.ekle = function (info) {
         
           info["fullName"] = info.name + " " + info.surname;
           localStorage[info.number] = JSON.stringify(info);

       }

       Student.prototype.olustur = function (obj) {

           return `
        <table class="tblsize" border="1">
        <tbody>
            <tr>
                <td>${obj.name}</td>
                <td>${obj.surname}</td> 
                <td>${obj.number}</td>
                <td>${obj.sinif}</td>
                <td>${obj.favlesson}</td>
                <td>${obj.adress}</td>
                <td>${obj.phone}</td>
                <td>${obj.email}</td>
                <td>${obj.gender}</td>
            </tr>
        </tbody>
    </table>
        `
       }

       Student.prototype.listele = function () {

           for (key in localStorage) {
               if (localStorage.hasOwnProperty(key)) {
                   var myobj = JSON.parse(localStorage.getItem(key));
                   console.log(myobj);
                   var stdHTML = this.olustur(myobj);
                   document.querySelector("body").insertAdjacentHTML("afterend", stdHTML);
               }
           }
       }