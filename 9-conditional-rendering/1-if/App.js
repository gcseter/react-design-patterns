function List({ list }) {
    if (!list) {
        return null;
    }

    return (
        <ul>
            {list.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}