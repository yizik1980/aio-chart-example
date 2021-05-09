import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoadingAction } from 'src/app/redux/actions';
import { AppState } from './../../redux/store'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  selectData = new Subscription();
  data: number[];
  labels: string[];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadingAction({ msg: 'loading' }));
    this.selectData = this.store.pipe(select(s => s.graph.graphData))
      .subscribe(invoices => {
        if (!invoices) return;

        this.data = invoices.map(item => {
          return item.price;
        })
        this.labels = invoices.map(item => {
          return item.description;
        });
      });
  }

}
