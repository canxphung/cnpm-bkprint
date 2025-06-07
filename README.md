# Mã Nguồn Dịch Vụ In Thông Minh (BKPrint)

## Cấu Trúc Dự Án

Tài liệu này cung cấp tổng quan về cấu trúc mã nguồn của dịch vụ in thông minh BKPrint, được phát triển dành cho sinh viên Trường Đại học Bách Khoa TP. Hồ Chí Minh (HCMUT). Hệ thống được thiết kế nhằm hỗ trợ việc in ấn tài liệu hiệu quả, tích hợp thanh toán và quản lý máy in. Dưới đây là cấu trúc mã nguồn đề xuất, dựa trên kiến trúc phân lớp đã mô tả trong báo cáo.

Dự án tuân theo kiến trúc phân lớp (Layered Architecture) với các lớp riêng biệt: Giao diện người dùng (Presentation), Xử lý nghiệp vụ (Business Logic), Lớp lưu trữ (Persistence), và Cơ sở dữ liệu (Database). Mã nguồn được tổ chức theo kiến trúc này nhằm đảm bảo tính mô-đun và khả năng mở rộng.

---

## Các Thành Phần Chính

### 1. Lớp Giao Diện (Presentation Layer) - React
- **Sinh viên**: `HomePage.js`, `LoginPage.js`, `PrinterLocationPage.js`, `PrintingPage.js`, `BuyingPage.js`
- **Quản trị viên**: `DashboardPage.js`, `LoginPage.js`, `HomePage.js`
- **Chung**: `Navbar.js`, `Footer.js`, `main.css`

### 2. Lớp Xử Lý Nghiệp Vụ (Business Logic Layer) - Node.js
- `PrintingController.js`: Xử lý việc tải lên, quản lý công việc in, hạn mức in
- `ExternalSystems.js`: Tích hợp với các hệ thống HCMUT_SSO
- `ManagePrinters.js`: Quản lý cấu hình máy in

### 3. Lớp Lưu Trữ (Persistence Layer)
- `PrinterAPI.js`, `StudentAPI.js`, `PrintingHistoryAPI.js`, `SystemPolicyAPI.js`: Các API truy cập dữ liệu

### 4. Lớp Cơ Sở Dữ Liệu (Database Layer) - MongoDB 6.0
- `MongoDBConfig.js`: Cấu hình kết nối cơ sở dữ liệu
- Các mô hình (Models): `Printer.js`, `Student.js`, `PrintingHistory.js`, `SystemPolicy.js`

---

## Thư Viện Phụ Thuộc (Dependencies)

- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Node.js, Express, Mongoose
- **API tích hợp**: HCMUT_SSO
