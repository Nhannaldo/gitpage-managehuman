import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/Service/master.service';
import { Training } from 'src/model/model';

@Component({
  selector: 'app-popup-training',
  templateUrl: './popup-training.component.html',
  styleUrls: ['./popup-training.component.css'],
})
export class PopupTrainingComponent implements OnInit {
  // Select form
  chucdanh: string[] = [
    'Nhân Viên IT',
    'Kỹ Sư Phần Mềm',
    'Quản Trị Mạng',
    'Nhân Viên Hành Chính',
    'Trưởng Phòng Kinh Doanh',
  ];

  hinhthuctochuc: string[] = ['Trực Tuyến', 'Tại Chỗ'];

  loaidaotao: string[] = ['Đại học', 'Sau đại học', 'Tiến sĩ'];

  ketquadaotao: string[] = ['Xuất Sắc', 'Khá', 'Giỏi'];

  trangthai: string[] = ['Hoàn Thành', 'Dự thảo'];

  trainingObj: Training = new Training();

  constructor(
    private _dialog: MatDialogRef<PopupTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MasterService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.trainingObj = this.data;
    }
  }

  closeModal() {
    this._dialog.close();
  }

  onSubmit(): void {
    if (this.data) {
      this.masterService.updateTraining(this.trainingObj).subscribe(
        (res) => {
          console.log('Update thành công:', res);
          alert('Cập nhật thành công!!');
          this._dialog.close();
          this.trainingObj = new Training();
        },
        (error) => {
          console.error('Lỗi khi update:', error);
        }
      );
    } else {
      if (
        this.trainingObj.DonVi != '' &&
        this.trainingObj.ChucDanh != '' &&
        this.trainingObj.KhoaDaoTao != '' &&
        this.trainingObj.HinhThucToChuc != '' &&
        this.trainingObj.DonViDaoTao != '' &&
        this.trainingObj.KetQuaDaoTao != '' &&
        this.trainingObj.TrangThai != '' &&
        this.trainingObj.NoiDungCamKet != '' &&
        this.trainingObj.KetQuaCacMon != ''
      ) {
        this.masterService.addTraining(this.trainingObj).subscribe(
          (res) => {
            console.log('Thêm mới thành công:', res);
            alert('Thêm mới thành công!!');
            this._dialog.close();
            this.trainingObj = new Training();
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
