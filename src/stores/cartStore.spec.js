import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './cartStore'
describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with an empty items array', () => {
    const cartStore = useCartStore()
    expect(cartStore.items).toEqual([])
    expect(cartStore.totalItemCount).toBe(0)
  })

  it('adds a new product to the cart', () => {
    const cartStore = useCartStore()
    const product = { id: 1, name: 'Produk A', price: 'Rp 100.000' }
    
    cartStore.addProductToCart(product)
    
    expect(cartStore.items).toHaveLength(1)
    expect(cartStore.items[0].name).toBe('Produk A')
    expect(cartStore.items[0].quantity).toBe(1)
    expect(cartStore.totalItemCount).toBe(1)
  })

  it('increases quantity when adding an existing product', () => {
    const cartStore = useCartStore()
    const product = { id: 1, name: 'Produk A', price: 'Rp 100.000' }

    cartStore.addProductToCart(product)
    cartStore.addProductToCart(product)

    expect(cartStore.items).toHaveLength(1)
    expect(cartStore.items[0].quantity).toBe(2)
    expect(cartStore.totalItemCount).toBe(2)
  })
  
  it('removes an item from the cart', () => {
    const cartStore = useCartStore()
    const product = { id: 1, name: 'Produk A', price: 'Rp 100.000' }
    cartStore.addProductToCart(product)

    expect(cartStore.items).toHaveLength(1)

    cartStore.removeItemFromCart(1)

    expect(cartStore.items).toHaveLength(0)
    expect(cartStore.totalItemCount).toBe(0)
  })
})
