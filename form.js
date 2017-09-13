    function kiemtra() {

        var ho = document.right1.txtHo.value;
  
        if (ho == "") {

            alert("Nhap tên ");
        }
        var ten = document.right1.txtHo.value;
        if (ten == "") {

            alert("Nhap noi dung! ");
        }
		 var email = document.right1.txtHo.value;
        if (email == "") {

            alert("Nhap email! ");
        }
		
		  var ngay = document.right1.cboNgay.value;

        if (ngay == "chonngay") {
            alert("Bạn Chưa chọn ngày");
        }

        var thang = document.right1.cboThang.value;

        if (thang == "chonthang") {
            alert("Bạn Chưa chọn tháng");
        }

        var nam = document.right1.cboNam.value;

        if (nam == "chonnam") {
            alert("Bạn Chưa chọn năm");
        }
        var nam =document.right1.optGioiTinhNam.checked; 
        var nu = document.right1.optGioiTinhNu.checked;

     
        if (nam == false && nu == false) {  
            alert("Bạn Chưa chọn giới tính");
        }

        if( nam==true && nu==true)
        {
             alert("Bạn đã chọn 2 giới tính");
         }
         var sdt = document.right1.txtSdt.value;
         var chieudai = sdt.length;

         if (isNaN(sdt) == true) {                   
             alert("Số điện thoại phải là số");
         }
         if (chieudai != 10 || chieudai != 11) {
             alert("Bạn chưa nhập số diện thoại");
         }
    }
