import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { CartContext } from '../../context/CartContext'
import Cart from '../../Pages/Cart'
import { BrowserRouter } from 'react-router-dom'

const mockCart = [
  { id: 1, title: 'Produto 1', price: 10.99, image: 'image1.jpg' },
  { id: 2, title: 'Produto 2', price: 15.49, image: 'image2.jpg' },
];

describe('Cart Component', () => {
  it('deve exibir os produtos do carrinho', () => {
    render(
      <CartContext.Provider value={{ cart: mockCart, removeFromCart: vi.fn() }}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument()
    expect(screen.getByText('Produto 1')).toBeInTheDocument()
    expect(screen.getByText('Produto 2')).toBeInTheDocument()
  });

  it('deve mostrar mensagem quando o carrinho estiver vazio', () => {
    render(
      <CartContext.Provider value={{ cart: [], removeFromCart: vi.fn() }}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()
  });
});