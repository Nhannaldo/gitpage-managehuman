import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/Service/master.service';
import { Certificate } from 'src/model/model';

@Component({
  selector: 'app-popup-certificate',
  templateUrl: './popup-certificate.component.html',
  styleUrls: ['./popup-certificate.component.css'],
})
export class PopupCertificateComponent implements OnInit {
  // Select form
  loaichungchi: string[] = ['Chứng Chỉ', 'Bằng', 'Ngôn Ngữ'];
  linhvucchungchi: string[] = [
    'Công Nghệ Thông Tin',
    'Tiếng Anh',
    'Quản Lý Dự Án',
    'Quản Trị Kinh Doanh',
    'An Toàn Thông Tin',
  ];
  mucchungchi: string[] = [
    'Đại Học',
    'Nâng Cao',
    'Chuyên Nghiệp',
    'Sau Đại Học',
  ];
  cosodaotao: string[] = [
    'Đại Học Thủ Dầu Một',
    'Hội Đồng Anh',
    'Viện PMI',
    'Đại Học Quốc Gia',
    'Hội Đồng EC',
  ];
  diadiemdaotao: string[] = [
    'Bình Dương, Việt Nam',
    'TP. Hồ Chí Minh, Việt Nam',
    'Online',
    'Hà Nội, Việt Nam',
  ];
  ketquaxeploai: string[] = ['Xuất Sắc', 'Khá'];

  certificateObj: Certificate = new Certificate();

  constructor(
    private _dialog: MatDialogRef<PopupCertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MasterService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.certificateObj = this.data;
    }
  }

  filename: string = '';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.filename = file.name; // Extract the file name
      this.certificateObj.FileDinhKem = file.name; // Store only the file name in the model
    }
  }
  closeModal() {
    this._dialog.close();
  }

  onSubmit(): void {
    if (this.data) {
      this.masterService.updateCertificate(this.certificateObj).subscribe(
        (res) => {
          console.log('Update thành công:', res);
          alert('Cập nhật thành công!!');
          this._dialog.close();
          this.certificateObj = new Certificate();
        },
        (error) => {
          console.error('Lỗi khi update:', error);
        }
      );
    } else {
      if (
        this.certificateObj.FileDinhKem != '' &&
        this.certificateObj.VanBangChungChi != '' &&
        this.certificateObj.LoaiChungChi != '' &&
        this.certificateObj.LinhVucChungChi != '' &&
        this.certificateObj.MucChungChi != '' &&
        this.certificateObj.DiaDiemDaoTao != '' &&
        this.certificateObj.CoSoDaoTao != '' &&
        this.certificateObj.KetQuaXepLoai != ''
      ) {
        this.masterService.addCertificate(this.certificateObj).subscribe(
          (res) => {
            console.log('Thêm mới thành công:', res);
            alert('Thêm mới thành công!!');
            this._dialog.close();
            this.certificateObj = new Certificate();
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
