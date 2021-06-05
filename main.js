
document.getElementById('btnTinh').onclick = function () {
    var nhapSo1 = Number(document.getElementById('nhapSo1').value) ;
    var nhapSo2 = Number(document.getElementById('nhapSo2').value) ;
    var nhapSo3 = Number(document.getElementById('nhapSo3').value) ;

    temp = 0;
    if (nhapSo1 > nhapSo2){
        temp = nhapSo1;
        nhapSo1 = nhapSo2;
        nhapSo2 = temp;
    }
    if (nhapSo1 > nhapSo3){
        temp = nhapSo1;
        nhapSo1 = nhapSo3;
        nhapSo3 = temp;
    }
    if (nhapSo2 > nhapSo3){
        temp = nhapSo2;
        nhapSo2 = nhapSo3;
        nhapSo3 = temp;
    }
    console.log('thứ tự nhỏ đến lớn:', (+nhapSo1) + "" + (+nhapSo2) + "" + (+nhapSo3))
}


// bài 2: Viết chương trình "Chào hỏi" các thành viên trong gia đình.
/*
Input: 
    - 4 thành viên gồm : Bố(B), Mẹ(M), Anh Trai, Em gái. 
Handle:
    - Tạo ra biến : Bo ,me ,anhTrai, emGai
    
Output:
    - xuất ra câu trả lời và đưa ra lời chào.
*/

document.getElementById('btnKetQua').onclick = function () {
    var thanhVienGiaDinh = document.getElementById('thanhVienGiaDinh').value;
    
    switch (thanhVienGiaDinh) {
        case "B": 
            console.log('Xin chào Bố!');
            break;
        case "M": 
            console.log('Xin chào Mẹ!');
            break;
        case "A": 
            console.log('Xin chào Anh trai!');
            break;
        case "E": 
            console.log('Xin chào Em gái!');
            break;
        default:
            console.log('Dù bạn là ai,chúc mạn ngày mới vui vẻ!');
            break;
    }
}


// Bài 3: Nhập 3 số nguyên.Viết chương trình xuất ra có bao nhiêu só chẳng,bao nhiêu số lẻ.

/*
Input: 
    - 3 số nguyên.
Handle:
    - Tạo 3 biến nhapSo1, nhapSo2, nhapSo3, soChan, soLe
    - Thực hiện if...esle với từng biến nhập số vào.
Output:
    - xuất ra có bao nhiêu số chẵn và số lẻ.
*/

document.getElementById('btnThucHien').onclick = function () {
    var nhapSo1 = Number(document.getElementById('nhapSo1').value);
    var nhapSo2 = Number(document.getElementById('nhapSo2').value);
    var nhapSo3 = Number(document.getElementById('nhapSo3').value);
    var soChan = 0;
    var soLe = 0;
   
    if (nhapSo1 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }

    if (nhapSo2 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }

    if (nhapSo3 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    console.log('sl số chẳng:' + soChan + ' ' + 'sl số lẻ:' + soLe );
}
