import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit{

  id: string | null=  null;
  name: string | null = null;

  constructor(private route: ActivatedRoute,
     private router: Router){}

  ngOnInit(): void {
    //路由沒有改變則component不會從抓id (在hashlocation模式會發生,pathlocation不會發生)
    // this.id = this.route.snapshot.queryParamMap.get('id');
    //下面寫法可以解決上面的問題
    this.route.queryParamMap.subscribe(params =>{
      this.id = params.get("id");
    });

    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });


    const dataTableDemoScript = document.createElement('script');
    dataTableDemoScript.src = "assets/js/demo/datatables-demo.js";
    document.body.appendChild(dataTableDemoScript);

  }

}
