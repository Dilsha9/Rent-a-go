import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any=[{"id":1,"title":"To Kill a Mockingbird by Harper Lee","price":19.95,"image":"https://www.rd.com/wp-content/uploads/2020/01/94_To-Kill-a-Mockingbird-by-Harper-Lee-via-amazon.jpg?resize=768,768"},{"id":2,"title":"The Shining by Stephen King ","price":22.3,"image":"https://www.rd.com/wp-content/uploads/2020/01/85_The-Shining-by-Stephen-King-via-amazon.jpg?resize=768,768"},{"id":3,"title":"All That She Carried","price":55.99,"image":"https://api.time.com/wp-content/uploads/2021/11/100-best-books-all-that-she-carried.jpg?quality=85&w=1600",},
  {"id":4,"title":"The Lovely Bones","price":15.99,"image":"https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781447275206.jpg"},
  {"id":5,"title":"1984","price":65,"image":"https://cdn.lifehack.org/wp-content/uploads/2015/03/1984.jpg"},
  {"id":6,"title":"The Lord of The Rings ","price":18,"image":"https://www.oberlo.com/media/1603897585-image12-1.jpg?fm=webp&w=1824&fit=max"},
  {"id":7,"title":"The Kite Runner","price":29,"image":"https://www.oberlo.com/media/1603897583-image17-1.jpg?fm=webp&w=1824&fit=max"},{"id":8,"title":"Harry Potter and the Philosopher’s Stone","price":10.99,"image":"https://www.oberlo.com/media/1603897577-image22-1.jpg?fm=webp&w=1824&fit=max",},
  {"id":9,"title":"The Book Thief ","price":64,"image":"https://www.oberlo.com/media/1603897566-image40-1.jpg?fm=webp&w=1824&fit=max"},
  {"id":10,"title":"Wuthering Heights","price":10,"image":"https://www.oberlo.com/media/1603897575-image29.jpg?fm=webp&w=1824&fit=max"},
  {"id":11,"title":"Jane Eyre","price":60,"image":"https://www.oberlo.com/media/1603897573-image38-1.jpg?fm=webp&w=1824&fit=max","rating":{"rate":4.8,"count":319}},
  {"id":12,"title":"Animal Farm","price":45,"image":"https://www.oberlo.com/media/1603897576-image25-1.jpg?fm=webp&w=1824&fit=max","rating":{"rate":4.8,"count":400}},
  {"id":13,"title":"Farenheit 451","price":39,"image":"https://www.oberlo.com/media/1603897578-image19-2.jpg?fm=webp&w=1824&fit=max","rating":{"rate":2.9,"count":250}},
  {"id":14,"title":"Little Women","price":50,"image":"https://www.oberlo.com/media/1603897574-image33-1.jpg?fm=webp&w=1824&fit=max","rating":{"rate":2.2,"count":140}}]
}
