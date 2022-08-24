import Category from '../models/category'
import Meal from '../models/meals'

export const CATEGORIES = [
    new Category('c1','Italian','#f5428d'),
    new Category('c2','Quick and Easy','#f5428d'),
    new Category('c3','Hamburgers','#f54242'),
    new Category('c4','German','#f5a442'),
    new Category('c5','Italian','#f5428d'),
    new Category('c6','Italian','#f5428d'),
    new Category('c7','Italian','#f5428d'),
    new Category('c8','Italian','#f5428d'),
    new Category('c9','Italian','#f5428d'),
    new Category('c10','Italian','#f5428d'),
]

export const MEALS = [
    new Meal('m1',['c1','c4','c5'],'Spaghetti','cheap','easy','url','5 minutes','pasta, garlic'),
    new Meal('m2',['c3','c5','c7'],'MeatBalls','cheap','easy','url','5 minutes','pasta, garlic'),
    new Meal('m3',['c9','c10','c2'],'Chips','cheap','easy','url','5 minutes','potato'),
]


