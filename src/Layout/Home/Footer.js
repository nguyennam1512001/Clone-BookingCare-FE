// Footer.js
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light ">
        <div className="py-5 container">
          <div className='row'>
            <div className='col' lg={3} md={6}>
              <h5>BookingCare</h5>
              <p>Chăm sóc sức khỏe hàng đầu</p>
            </div>
            <div className='col' lg={3} md={6}>
              <h5>Dịch vụ</h5>
              <ul className="list-unstyled">
                <li><a href="#">Khám chuyên khoa</a></li>
                <li><a href="#">Dịch vụ chăm sóc cá nhân</a></li>
                {/* Thêm các mục khác nếu cần */}
              </ul>
            </div>
            <div className='col' lg={3} md={6}>
              <h5>Liên hệ</h5>
              <ul className="list-unstyled">
                <li>Email: info@bookingcare.vn</li>
                <li>Điện thoại: 0123 456 789</li>
                {/* Thêm các thông tin liên hệ khác */}
              </ul>
            </div>
            <div className='col' lg={3} md={6}>
              <h5>Theo dõi chúng tôi</h5>
              {/* Thêm các biểu tượng mạng xã hội hoặc phương tiện truyền thông khác */}
            </div>
          </div>
        </div>
        <div className="bg-secondary text-light text-center py-3">
          <div className='container'>
            <p>&copy; 2024 BookingCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
