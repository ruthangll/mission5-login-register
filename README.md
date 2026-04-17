# Project M5: Protect The Social Network 🛡️

Tugas praktikum Minggu 5 - Login, Register & Security Validation menggunakan React Native + Expo.

---

## 📸 Preview

### Login Screen
![Login](login.jpeg)

### Register Screen
![Register](register.jpeg)

### Home Screen
![Home](home.jpeg)

---

## 📋 Requirement Fitur

### Screen 1 - Login
- Input Email
- Input Password
- Tombol Login
- Tombol **Daftar Disini**

### Screen 2 - Register
- Input Nama
- Input Email
- Input Phone
- Input Password
- Input Confirm Password
- Tombol Register

### Screen 3 - Home
- Welcome Message dengan nama user
- Tombol Logout

---

## 🛡️ Logic Implemented

- **Email Validation** menggunakan Regex agar format email valid.
- **Phone Validation** hanya angka dan minimal 10 digit.
- **Password Validation** minimal 6 karakter.
- **Match Check** Password dan Confirm Password harus sama.
- **Login Security** hanya akun yang sudah register yang bisa login.
- **Personal Greeting** Home menampilkan nama user yang terdaftar.
- **Logout Function** kembali ke halaman login.
- **Keyboard Handling** tampilan tetap nyaman saat mengetik.

---

## 🚀 Demo

### Expo Snack
[Klik untuk mencoba aplikasi](https://snack.expo.dev/@ruthangelsitorus/9cc9ea)

### GitHub Repository
[Klik Repository GitHub](https://github.com/ruthangll/mission5-login-register)

---

## 💻 Cara Menjalankan Project

```bash
npm install
npx expo start
