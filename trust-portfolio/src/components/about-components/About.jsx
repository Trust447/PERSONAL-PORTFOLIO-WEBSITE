<div className="about-card">
  {items.map((item, index) => (
    <div
      className="card"
      key={item.id}
      ref={el => (cardsRef.current[index] = el)}
    >
      <h3>
        <span>{"<"}</span>
        {item.title}
        <span>{" />"}</span>
      </h3>
      {item.image ? (
        <img src={item.image} alt={item.label} />
      ) : (
        <span className={item.iconClass}></span>
      )}
      <h4>{item.label}</h4>
    </div>
  ))}
</div>
