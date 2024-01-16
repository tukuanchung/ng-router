import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { News } from 'src/app/models/news';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  data = inject(DataService)
  // news$: any;
  news$!:Observable<News>

  ngOnInit(): void {
    const chartAreaScript = document.createElement('script');
    chartAreaScript.src = "assets/js/demo/chart-area-demo.js";
    document.body.appendChild(chartAreaScript);
    this.data.firstClick();
    this.news$ = this.data.loadNews();
    const chartPieScript = document.createElement('script');
    chartAreaScript.src = "assets/js/demo/chart-pie-demo.js";
    document.body.appendChild(chartPieScript);

    this.route.data.subscribe((data) => {
      console.log(data['pageTitle']);
    });

  }
  gotoPage(pageName:string, name: string, id: number): void{
    this.router.navigate([`${pageName}/${name}`],{
        queryParams: {id: id},
        //state:{id:id}, 可以代到下一頁頁面
    });
  }
}
