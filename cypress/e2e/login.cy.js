// login.spec.js

describe('Pengujian Login Berhasil', () => {
    it('Login dengan username dan kata sandi benar', () => {
      cy.visit('https://www.saucedemo.com/');
      
      // Isi formulir login
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      
      // Klik tombol login
      cy.get('[data-test="login-button"]').click();
      
      // Verifikasi pengguna berhasil masuk
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
    });
  });
  
  describe('Pengujian Login Gagal', () => {
    it('Login dengan username atau kata sandi salah', () => {
      cy.visit('https://www.saucedemo.com/');
      
      // Isi formulir login dengan username dan kata sandi yang salah
      cy.get('[data-test="username"]').type('username_salah');
      cy.get('[data-test="password"]').type('password_salah');
      
      // Klik tombol login
      cy.get('[data-test="login-button"]').click();
      
      // Verifikasi bahwa pesan kesalahan muncul
      cy.get('[data-test="error"]').should('be.visible');
    });
  });
  