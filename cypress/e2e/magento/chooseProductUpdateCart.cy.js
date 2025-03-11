describe('Choose Product and Update Shopping Cart', () => {
  
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');

    // Login ke akun
    cy.get('#email').type('Sukri@gmail.com');
    cy.get('#pass').type('SukriPeod1');
    cy.get('#send2').click();

    // Verifikasi login sukses
    cy.get('.greet.welcome').should('be.visible');
  });

  it('Choose Product Successfully', () => {  
    // Pilih produk pertama dari daftar
    cy.get('.product-item-link').first().click();

    // Pilih ukuran dan warna jika tersedia
    cy.get('[data-attribute-code="size"] .swatch-option').first().click();
    cy.get('[data-attribute-code="color"] .swatch-option').first().click();

    // Tentukan jumlah produk
    cy.get('#qty').clear().type('1');

    // Tambahkan ke keranjang
    cy.get('#product-addtocart-button').click();

    // Verifikasi bahwa produk berhasil ditambahkan
    cy.get('.message-success').should('contain', 'You added');
  });

  it('Update Shopping Cart Successfully', () => {
    // Buka mini cart
    cy.get('.minicart-wrapper').click();
    cy.get('[data-role="go-to-cart"]').click();

    // Ubah jumlah produk di halaman keranjang
    cy.get('.cart-item-qty').clear().type('2');

    // Klik tombol update
    cy.get('[title="Update Shopping Cart"]').click();

    // Verifikasi bahwa update berhasil
    cy.get('.message-success').should('contain', 'Shopping cart has been updated');
  });

});
