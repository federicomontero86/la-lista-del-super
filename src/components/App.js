import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

// TODO: Mostrar boton borrar lista solo cuando haya una lista, productos debe ser plural cuando haya mas de un producto en la lista, si no hay productos packed leyenda deberia decir no agarraste ninguno todavia

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currState) => [...currState, item]);
  }

  function handleDeleteItem(id) {
    setItems((currState) => currState.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currState) =>
      currState.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "¿Seguro que querés borrar todos los productos?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
