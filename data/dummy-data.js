import Category from '../models/category'
import Meal from '../models/meals'

export const CATEGORIES = [
    new Category('c1','Italian','#f5428d'),
    new Category('c2','Quick and Easy','#f5428d'),
    new Category('c3','Hamburgers','#f54242'),
    new Category('c4','British','#f5a442'),
]

export const MEALS = [
    new Meal('m1',['c1','c2'],'Spaghetti','cheap','easy','url','5 minutes','pasta, garlic', 'mix the pasta and garlic, voila'),
    new Meal('m2',['c1'],'MeatBalls','cheap','easy','url','5 minutes','pasta, garlic, meat', 'form the meat into balls and put in the oven'),
    new Meal('m3',['c2'],'Chips','cheap','easy','url','5 minutes','potato, oil','cut up the potato into strips and fry for 4 minutes'),
    new Meal('m4',['c4'],'Cottage Pie','cheap','easy','url','55 minutes','potato, mince','mix up the bits and put in the oven'),
    new Meal('m5',['c2','c3'],'Quarter Pounder','cheap','easy','url','15 minutes','mince, onion, bread roll','mix up the bits and fry add to the roll'),
]


