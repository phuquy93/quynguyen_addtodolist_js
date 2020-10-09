function Validation(){
    this.kiemtrarong = function(value){
        if(value == ''){
            alert("Xin nhập giá trị!");
            return false;
        }
        return true;
    }

    this.kiemtraid = function(id, mess, arr){
        var isStatus = false;

        isStatus = arr.some(function (item) {
            return item.id === id;
          });

          if (isStatus) {
            alert(mess);
            return false;
          }

          return true;
    }
}