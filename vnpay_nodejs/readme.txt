1. Cài đặt nodejs lên máy cần chạy. Download nodejs tại: https://nodejs.org/en/
2. Vào command (cmd) và chuyển tới thư mục code demo
3. Cài đặt module cần thiết bằng lệnh: npm install
4. Cấu hình giá trị cho các tham số: vnp_TmnCode,vnp_HashSecret trong file\vnpay_nodejs\config\default.json. Nếu chưa có các thông tin này, vui lòng liên hệ với VNPAY
5. Chạy ứng dụng: npm start app.js. Ứng dụng sẽ start ở port 8888.
6. Mở trình duyệt và truy cập vào địa chỉ: http://localhost:8888/order/create_payment_url để bắt đầu chạy demo
7. Thông tin hướng dẫn kết nối tham khảo thêm tại địa chỉ: https://sandbox.vnpayment.vn/apis/

Terminal ID / Mã Website (vnp_TmnCode): LX933X96

Secret Key / Chuỗi bí mật tạo checksum (vnp_HashSecret): TBGUYUNAITWBQVJIKBCHHDAFBOLRBEHJ



Ngân hàng	NCB
Số thẻ	9704198526191432198
Tên chủ thẻ	NGUYEN VAN A
Ngày phát hành	07/15
Mật khẩu OTP	123456


Ngân hàng	NCB
Số thẻ	9704198526191432198
Tên chủ thẻ	NGUYEN VAN A
Ngày phát hành	07/15
Mật khẩu OTP	123456
http://localhost:8888/order/vnpay_return?vnp_Amount=1000000&vnp_BankCode=NCB&vnp_BankTranNo=VNP14368800&vnp_CardType=ATM&vnp_OrderInfo=Thanh+toan+cho+ma+GD%3A06123504&vnp_PayDate=20240406123526&vnp_ResponseCode=00&vnp_TmnCode=ZSZIOE9N&vnp_TransactionNo=14368800&vnp_TransactionStatus=00&vnp_TxnRef=06123504&vnp_SecureHash=0a3edd54c5c67e206d2fb41605413990a3f7e13f6f8ce9ff7ebaf0cf9f4ad661e40faebf77ea7ed319b748fa3e256495fdbc0b1ea79dd43d4a37e3d45821e7d6
