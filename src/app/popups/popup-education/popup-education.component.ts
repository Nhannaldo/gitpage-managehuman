import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/Service/master.service';
import { Education } from 'src/model/model';

@Component({
  selector: 'app-popup-education',
  templateUrl: './popup-education.component.html',
  styleUrls: ['./popup-education.component.css'],
})
export class PopupEducationComponent implements OnInit {
  // Select form
  trinhdodaotao: string[] = ['Cử nhân', 'Thạc sĩ', 'Tiến sĩ'];

  cosodaotao: string[] = [
    'Đại học Quốc gia TP Hồ Chí Minh',
    'Đại học Bách khoa TP.HCM',
    'Đại học Đà Nẵng',
    'Đại học Bách khoa Hà Nội',
    'Đại học Công nghệ TP.HCM',
    'Đại học Quốc gia Hà Nội',
    'Đại học Sư phạm Kỹ thuật TP.HCM',
    'Đại học Huế',
    'Đại học Cần Thơ',
    'Đại học Quốc gia TP.HCM',
  ];

  hinhthucdaotao: string[] = ['Chính quy', 'Liên thông', 'Sau đại học'];

  loaidaotao: string[] = ['Đại học', 'Sau đại học', 'Tiến sĩ'];

  chuyennganhdaotao: string[] = [
    'Công nghệ thông tin',
    'Khoa học máy tính',
    'Mạng máy tính',
    'Kỹ thuật phần mềm',
    'Công nghệ phần mềm',
    'Trí tuệ nhân tạo',
  ];

  nganhdaotao: string[] = [
    'Kỹ thuật phần mềm',
    'Hệ thống thông tin',
    'Kỹ thuật máy tính',
    'Công nghệ thông tin',
    'Trí tuệ nhân tạo',
    'Khoa học máy tính',
  ];

  xeploaitotnghiep: string[] = ['Giỏi', 'Khá', 'Xuất sắc'];

  danhhieudaotao: string[] = ['Giỏi', 'Xuất sắc', 'Tiến sĩ'];

  educationObj: Education = new Education();

  constructor(
    private _dialog: MatDialogRef<PopupEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MasterService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.educationObj = this.data;
    }
    console.log(typeof this.educationObj.TuNgay);
  }

  filename: string = '';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.filename = file.name; // Extract the file name
      this.educationObj.FileDinhKem = file.name; // Store only the file name in the model
    }
  }
  closeModal() {
    this._dialog.close();
  }

  onSubmit(): void {
    if (this.data) {
      this.masterService.updateEducation(this.educationObj).subscribe(
        (res) => {
          console.log('Update thành công:', res);
          alert('Cập nhật thành công!!');
          this._dialog.close();
          this.educationObj = new Education();
        },
        (error) => {
          console.error('Lỗi khi update:', error);
        }
      );
    } else {
      if (
        this.educationObj.FileDinhKem != '' &&
        this.educationObj.TrinhDoDaoTao != '' &&
        this.educationObj.ChuyenNganhDaoTao != '' &&
        this.educationObj.NganhDaoTao != '' &&
        this.educationObj.HinhThucDaoTao != '' &&
        this.educationObj.HinhThucDaoTao != '' &&
        this.educationObj.CoSoDaoTao != '' &&
        this.educationObj.LoaiDaoTao != '' &&
        this.educationObj.XepLoaiTotNghiep != '' &&
        this.educationObj.DanhHieuDaoTao != ''
      ) {
        this.masterService.addEducation(this.educationObj).subscribe(
          (res) => {
            console.log('Thêm mới thành công:', res);
            alert('Thêm mới thành công!!');
            this._dialog.close();
            this.educationObj = new Education();
          },
          (error) => {
            console.error('Lỗi khi thêm:', error);
          }
        );
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    }
  }
}
