import { LargeProductListItem } from "../solution/products/LargeProductListItem";
import { SmallProductListItem } from "../solution/products/SmallProductListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
	return (
		<>
			{people.map((person, i) => (
				<SmallPersonListItem key={i} person={person} />
			))}
			{people.map((person, i) => (
				<>
					<h3>{i + 1}</h3>
					<LargePersonListItem key={i} person={person} />
				</>
			))}
			{products.map((product, i) => (
				<SmallProductListItem key={i} product={product} />
			))}
			{products.map((product, i) => (
				<>
					<h3>{i + 1}</h3>
					<LargeProductListItem key={i} product={product} />
				</>
			))}
		</>
	);
}
export default App;
