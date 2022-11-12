import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor() { }

  data:any =[{"id":1,"title":"Anna Karenina by Leo Tolstoy (1878)","price":10.95,"image":"https://www.rd.com/wp-content/uploads/2020/01/11_Anna-Karenina-by-Leo-Tolstoy-via-amazon.jpg?resize=768,768"},
  {"id":2,"title":"To Kill a Mockingbird by Harper Lee (1960) ","price":22.3,"image":"https://www.rd.com/wp-content/uploads/2020/01/94_To-Kill-a-Mockingbird-by-Harper-Lee-via-amazon.jpg?resize=768,768"},
  {"id":3,"title":"The Little Prince by Antoine de Saint-Exupéry (1943)","price":10.95,"image":"https://www.rd.com/wp-content/uploads/2020/01/76_The-Little-Prince-by-Antoine-de-Saint-Exup%C3%A9ry-via-amazon.jpg?resize=768,768"},
  {"id":4,"title":"The Omnivore’s Dilemma: A Natural History of Four Meals by Michael Pollan (2006)","price":22.3,"image":"https://www.rd.com/wp-content/uploads/2020/01/81_The-Omnivores-Dilemma-A-Natural-History-of-Four-Meals-by-Michael-Pollan-via-amazon.jpg?resize=768,768"},
  {"id":5,"title":"The Right Stuff by Tom Wolfe (1979)","price":10.95,"image":"https://www.rd.com/wp-content/uploads/2020/01/83_The-Right-Stuff-by-Tom-Wolfe-via-amazon.jpg?resize=768,768"},
  {"id":6,"title":" Go Tell It on the Mountain by James Baldwin (1953)","price":22.3,"image":"https://www.rd.com/wp-content/uploads/2020/01/25_Go-Tell-It-on-the-Mountain-by-James-Baldwin-via-amazon.jpg?resize=768,768"},
  ]

  ngOnInit(): void {
  }

}