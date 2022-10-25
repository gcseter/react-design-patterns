const NameWrapper = ({ render }) => {
    const [name, setName] = useState('Dan Abramov');

    return render(name);
}

const Name = () => (
    <NameWrapper render={name => <h2>Hi, {name}!</h2>} />
);
