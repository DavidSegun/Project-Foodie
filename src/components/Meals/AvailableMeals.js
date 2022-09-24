import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealsItems from './MealItems';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeals = () => {
   const dummy_data = DUMMY_MEALS.map(data => <MealsItems key = {data.id} name = {data.name} description = {data.description} price = {data.price}/>)    
    return (
        <>
        <Card>
       <section>
        <ul className={classes.meals}>
       {dummy_data}
      </ul>
      </section>
       </Card>
       </>
    )
}
 export default AvailableMeals
 Card