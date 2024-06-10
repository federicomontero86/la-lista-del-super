export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Empezá a agregar productos a tu lista 📃</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Ya tenés todo! Hora de pagar 😭💳"
          : `⚠️ Tenés ${numItems} productos en tu lista, y ya agarraste
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
