import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-trivago-table',
  templateUrl: './trivago-table.component.html',
  styleUrls: ['./trivago-table.component.scss']
})
export class TrivagoTableComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() displayedColumns: any;

  constructor(public tableService: TableService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableService.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
