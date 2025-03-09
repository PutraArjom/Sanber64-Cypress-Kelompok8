describe('Choose Products and Update Shopping Cart di Magento', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/');
  });

  it('Login ke akun Magento', () => {
    cy.get('div.panel.wrapper > div > ul > li.authorization-link > a').click(); // Klik Sign In
    cy.get('#email').type('Sukri@gmail.com'); // Isi email
    cy.get('#pass').type('SukriPeod1', { log: false }); // Isi password
    cy.get('#send2').click(); // Klik tombol login
  });

  it('Pilih Produk dan Tambahkan ke Keranjang', () => {
    y.get('[data-block="minicart"]') // Pastikan minicart kosong
      .should('be.visible');
  
    cy.get('.product-item-link').first().click(); // Klik produk pertama
    cy.get('#option-label-size-143-item-168').click(); // Pilih ukuran (opsional)
    cy.get('#option-label-color-93-item-50').click(); // Pilih warna (opsional)
    cy.get('#product-addtocart-button').click(); // Klik Add to Cart
  
    cy.get('.message-success').should('contain', 'You added Radiant Tee to your shopping cart.'); // Pastikan produk berhasil ditambahkan
  });

  it('Update Shopping Cart', () => {
    cy.get('[data-block="minicart"]').click(); // Buka mini cart
    cy.get('a.viewcart').click(); // Klik View and Edit Cart
  
    cy.get('.input-text.qty').clear().type('2'); // Ubah jumlah produk jadi 2
    cy.get('[title="Update Shopping Cart"]').click(); // Klik tombol Update Cart
  
    cy.get('.message-success').should('contain', 'Shopping cart has been updated'); // Pastikan update berhasil
  });

});