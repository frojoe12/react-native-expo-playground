import Category from '../models/category'
import Meal from '../models/meals'
import {Burger, Chips, CottagePie, Meatballs, Spaghetti} from '../assets/images/foodImages'



export const CATEGORIES = [
    new Category('c1','Italian','#f5428d', Spaghetti),
    new Category('c2','Quick and Easy','#f5428d', Chips),
    new Category('c3','Hamburgers','#f54242', Burger),
    new Category('c4','British','#f5a442', CottagePie),
]

export const MEALS = [
    new Meal('m1',['c1','c2'],'Spaghetti','cheap','easy','url','5 minutes',['pasta', 'tomatoes','garlic','meat'], ['mince the garlic','mix the meat and garlic','fry over a stove','mix in the tomatoes','cook the spaghetti','put it on plate and enjoy','clear up afterwards'],Spaghetti),
    new Meal('m2',['c1'],'MeatBalls','cheap','easy','url','5 minutes',['pasta', 'garlic', 'meat'], ['form the meat into balls', 'put in the oven'],Meatballs),
    new Meal('m3',['c2'],'Chips','cheap','easy','url','5 minutes',['potato', 'oil'],['cut up the potato into strips', 'fry for 4 minutes'],Chips),
    new Meal('m4',['c4'],'Cottage Pie','cheap','easy','url','55 minutes',['potato', 'mince'],['mix up the bits','put in the oven'],CottagePie),
    new Meal('m5',['c2','c3'],'Quarter Pounder','cheap','easy','url','15 minutes',['mince', 'onion', 'bread roll'],['mix up the bits','fry add to the roll'],Burger),
]


