const users = [
    { username: 'admin', password: '123', role: 'admin' },
    { username: 'user', password: '123', role: 'user' }
];

const btnLogin = document.querySelector(".btn-login");

btnLogin.onclick = function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        alert('Đăng nhập thành công!');
        // Phân quyền và chuyển hướng trang
        if (user.username === 'admin') {
            window.location.href = '../Admin/danhloaisanpham.html';
            alert('Chào Admin!');
        } else if (user.role === 'user') {
            window.location.href = '../Giao diện chính/index.html';
            alert('Chào người dùng!');
        }
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
}
