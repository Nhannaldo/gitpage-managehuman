// Education

export interface IEducation {
  id?: number;
  trangthai_id: boolean;
  TrinhDoDaoTao: string;
  CoSoDaoTao: string;
  HinhThucDaoTao: string;
  TuNgay: Date;
  DenNgay: Date;
  FileDinhKem: string;
  LoaiDaoTao: string;
  ChuyenNganhDaoTao: string;
  NganhDaoTao: string;
  XepLoaiTotNghiep: string;
  DanhHieuDaoTao: string;
  TrinhDoHocVanUuTien: boolean;
  CuDiHoc: boolean;
}

export class Education {
  id?: number;
  trangthai_id: boolean;
  TrinhDoDaoTao: string;
  CoSoDaoTao: string;
  HinhThucDaoTao: string;
  TuNgay: Date;
  DenNgay: Date;
  FileDinhKem: string;
  LoaiDaoTao: string;
  ChuyenNganhDaoTao: string;
  NganhDaoTao: string;
  XepLoaiTotNghiep: string;
  DanhHieuDaoTao: string;
  TrinhDoHocVanUuTien: boolean;
  CuDiHoc: boolean;

  constructor() {
    this.trangthai_id = true;
    this.TrinhDoDaoTao = '';
    this.CoSoDaoTao = '';
    this.HinhThucDaoTao = '';
    this.TuNgay = new Date();
    this.DenNgay = new Date();
    this.FileDinhKem = '';
    this.LoaiDaoTao = '';
    this.ChuyenNganhDaoTao = '';
    this.NganhDaoTao = '';
    this.XepLoaiTotNghiep = '';
    this.DanhHieuDaoTao = '';
    this.TrinhDoHocVanUuTien = false;
    this.CuDiHoc = false;
  }
}

// Certificate

export interface ICertificate {
  id?: number;
  trangthai_id: boolean;
  VanBangChungChi: string;
  LoaiChungChi: string;
  LinhVucChungChi: string;
  ChungChiQuocTe: boolean;
  MucChungChi: String;
  FileDinhKem: string;
  CoSoDaoTao: string;
  DiaDiemDaoTao: string;
  CuDiHoc: boolean;
  Diem: number;
  KetQuaXepLoai: string;
  NgayCapChungChi: Date;
  TuNgay: Date;
  DenNgay: Date;
}

export class Certificate {
  id?: number;
  trangthai_id: boolean;
  VanBangChungChi: string;
  LoaiChungChi: string;
  LinhVucChungChi: string;
  ChungChiQuocTe: boolean;
  MucChungChi: String;
  FileDinhKem: string;
  CoSoDaoTao: string;
  DiaDiemDaoTao: string;
  CuDiHoc: boolean;
  Diem: number;
  KetQuaXepLoai: string;
  NgayCapChungChi: Date;
  TuNgay: Date;
  DenNgay: Date;

  constructor() {
    this.trangthai_id = true;
    this.VanBangChungChi = '';
    this.LoaiChungChi = '';
    this.LinhVucChungChi = '';
    this.ChungChiQuocTe = false;
    this.MucChungChi = '';
    this.FileDinhKem = '';
    this.CoSoDaoTao = '';
    this.DiaDiemDaoTao = '';
    this.CuDiHoc = false;
    this.Diem = 0;
    this.KetQuaXepLoai = '';
    this.NgayCapChungChi = new Date();
    this.TuNgay = new Date();
    this.DenNgay = new Date();
  }
}

//Join Project

export interface IJoinProject {
  id?: number;
  trangthai_id: boolean;
  SanPhamCNTT: string;
  MoTa: string;
  TuNgay: Date;
  DenNgay: Date;
}

export class JoinProject {
  id?: number;
  trangthai_id: boolean;
  SanPhamCNTT: string;
  MoTa: string;
  TuNgay: Date;
  DenNgay: Date;

  constructor() {
    this.trangthai_id = true;
    this.SanPhamCNTT = '';
    this.MoTa = '';
    this.TuNgay = new Date();
    this.DenNgay = new Date();
  }
}

//Training

export interface ITraining {
  id?: number;
  trangthai_id: boolean;
  TuNgay: Date;
  DenNgay: Date;
  DonVi: string;
  ChucDanh: string;
  KhoaDaoTao: string;
  HinhThucToChuc: string;
  DonViDaoTao: string;
  Diem: number;
  KetQuaDaoTao: string;
  CapChungChi: boolean;
  ChiPhiDaoTao: number;
  ThoiGianCamKet: number;
  TrangThai: string;
  KyHopDong: boolean;
  NoiDungCamKet: string;
  KetQuaCacMon: string;
  ThoiGianCamKetConLai: number;
}

export class Training {
  id?: number;
  trangthai_id: boolean;
  TuNgay: Date;
  DenNgay: Date;
  DonVi: string;
  ChucDanh: string;
  KhoaDaoTao: string;
  HinhThucToChuc: string;
  DonViDaoTao: string;
  Diem: number;
  KetQuaDaoTao: string;
  CapChungChi: boolean;
  ChiPhiDaoTao: number;
  ThoiGianCamKet: number;
  TrangThai: string;
  KyHopDong: boolean;
  NoiDungCamKet: string;
  KetQuaCacMon: string;
  ThoiGianCamKetConLai: number;

  constructor() {
    this.trangthai_id = true;
    this.TuNgay = new Date();
    this.DenNgay = new Date();
    this.DonVi = '';
    this.ChucDanh = '';
    this.KhoaDaoTao = '';
    this.HinhThucToChuc = '';
    this.DonViDaoTao = '';
    this.Diem = 0;
    this.KetQuaDaoTao = '';
    this.CapChungChi = false;
    this.ChiPhiDaoTao = 0;
    this.ThoiGianCamKet = 0;
    this.TrangThai = '';
    this.KyHopDong = false;
    this.NoiDungCamKet = '';
    this.KetQuaCacMon = '';
    this.ThoiGianCamKetConLai = 0;
  }
}
