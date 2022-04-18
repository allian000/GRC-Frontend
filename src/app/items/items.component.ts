import { ItemService } from './../item.service';
import { MessageService } from '../message.service';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
// import { ITEMS  } from '../mock-items'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items: Item[] = []
  selectedItem?: Item;

  constructor(private itemService:ItemService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item:Item): void{
    this.selectedItem = item;
  }

  getItems(): void{
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
