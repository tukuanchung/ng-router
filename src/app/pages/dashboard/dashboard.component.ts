import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { News, NewsElement } from 'src/app/models/news';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  router = inject(Router);
  route = inject(ActivatedRoute);
  data = inject(DataService);
  // news$: any;
  news$!:Observable<News>;

  news : NewsElement[] = [];
  newsSubscription!: Subscription;

  ngOnInit(): void {
    const chartAreaScript = document.createElement('script');
    chartAreaScript.src = "assets/js/demo/chart-area-demo.js";
    document.body.appendChild(chartAreaScript);
    this.data.firstClick();
    // this.news$ = this.data.loadNews(); 推薦寫法

    // 替代寫法，當資料在ts還是會改變就要用下面的寫法
    this.newsSubscription = this.data.loadNews().subscribe((data)=>{
      this.news = data.news;
    });


    const chartPieScript = document.createElement('script');
    chartAreaScript.src = "assets/js/demo/chart-pie-demo.js";
    document.body.appendChild(chartPieScript);

    this.route.data.subscribe((data) => {
      console.log(data['pageTitle']);
    });

  }
  ngOnDestroy(): void {
    this.newsSubscription.unsubscribe();
  }
  gotoPage(pageName:string, name: string, id: number): void{
    this.router.navigate([`${pageName}/${name}`],{
        queryParams: {id: id},
        //state:{id:id}, 可以代到下一頁頁面
    });
  }
}
